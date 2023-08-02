import requests
import pandas as pd

from flask import Flask, jsonify
from flask_cors import CORS

from sklearn.metrics import confusion_matrix, accuracy_score
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)


def exponential_smoothing(data, alpha=0.5):
  df = pd.DataFrame(data)
  smoothed_data = df.ewm(alpha=alpha).mean()
  smoothed_data = smoothed_data.fillna(0)
  return smoothed_data.values


@app.route('/predict/<ticker>', methods=['GET'])
def prediction(ticker):
  api_key = 'w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
  url = f"https://api.goapi.id/v1/stock/idx/{ticker}/historical?from=2017-01-01&to=2030-12-31&api_key={api_key}"
  #url = f"https://api.goapi.id/v1/stock/idx/{ticker}/historical?from=2017-01-01&to=2023-07-14&api_key={api_key}"
  response = requests.get(url)
  data = response.json()

  df = pd.DataFrame(data['data']['results'])

  df['open'] = df['open'].astype(float).astype(int)
  df['high'] = df['high'].astype(float).astype(int)
  df['low'] = df['low'].astype(float).astype(int)
  df['close'] = df['close'].astype(float).astype(int)
  df['status'] = df.apply(lambda row: 'Naik'
                          if row['close'] > row['open'] else 'Turun',
                          axis=1)

  features = df[['open', 'high', 'low', 'close', 'volume']]
  target = df['status']

  # Normalisasi data
  scaler = MinMaxScaler()
  features = scaler.fit_transform(features)

  # Penerapan metode exponential smoothing
  features = exponential_smoothing(features)

  #Perhitungan Naive Bayes
  X_train, X_test, y_train, y_test = train_test_split(features,
                                                      target,
                                                      test_size=0.25,
                                                     random_state=1)

  #Naive Bayes
  nb = GaussianNB()
  nb.fit(X_train, y_train)

  #Data Mutakhir
  latest_data = features[-1]
  latest_data = latest_data.reshape(1, -1)

  #Prediksi Status
  prediction = nb.predict(latest_data)[0]
  probabilities = nb.predict_proba(latest_data)[0]

  #Hasil Prediksi Dalam Bentuk JSON
  prediction_dict = {
    'prediksi': prediction[0],
    'probabilitas': {
      'Naik': f"{probabilities[0] * 100:.2f}%",
      'Turun': f"{probabilities[1] * 100:.2f}%"
    }
  }

  #Data Dikirim Dalam Bentuk JSON
  response = jsonify(prediction_dict)

  return response


@app.route('/explain/<ticker>', methods=['GET'])
def explanation(ticker):
  api_key = 'w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
  url = f"https://api.goapi.id/v1/stock/idx/{ticker}/historical?from=2016-06-07&to=2030-12-31&api_key={api_key}"
  response = requests.get(url)
  data = response.json()

  df = pd.DataFrame(data['data']['results'])

  df['open'] = df['open'].astype(float).astype(int)
  df['high'] = df['high'].astype(float).astype(int)
  df['low'] = df['low'].astype(float).astype(int)
  df['close'] = df['close'].astype(float).astype(int)
  df['status'] = df.apply(lambda row: 'Naik'
                          if row['close'] > row['open'] else 'Turun',
                          axis=1)

  features = df[['open', 'high', 'low', 'close', 'volume']]
  target = df['status']

  scaler = MinMaxScaler()
  features = scaler.fit_transform(features)

  features = exponential_smoothing(features)

  X_train, X_test, y_train, y_test = train_test_split(features,
                                                      target,
                                                      test_size=0.25,
                                                      random_state=1)

  nb = GaussianNB()
  nb.fit(X_train, y_train)

  predictions = nb.predict(X_test)

  accuracy = accuracy_score(y_test, predictions) * 100

  # Confusion Matrix
  confusion = confusion_matrix(y_test, predictions)

  TP = confusion[1][1]
  TN = confusion[0][0]
  FP = confusion[0][1]
  FN = confusion[1][0]

  accuracy = accuracy_score(y_test, predictions) * 100
  precision = (TP / (TP + FP)) * 100
  recall = (TP / (TP + FN)) * 100
  f1 = (2 * ((precision * recall) / (precision + recall)))

  total_predictions = len(y_test)
  correct_predictions = (predictions == y_test).sum()
  explanation = f"Dari semua {total_predictions} data, {correct_predictions} diprediksi benar oleh Naive Bayes. "
  explanation += f"Akurasi yang didapatkan sebesar: {accuracy:.2f}%"

  # Hasil penjelasan
  response = jsonify({
    'confusion_matrix': {
      'TP': str(TP),
      'FP': str(FP),
      'TN': str(TN),
      'FN': str(FN)
    },
    'accuracy': f"{accuracy:.2f}%",
    'precision': f"{precision:.2f}%",
    'recall': f"{recall:.2f}%",
    'f1_score': f"{f1:.2f}%"
  })

  return response


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000)
