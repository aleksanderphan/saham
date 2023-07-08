import requests
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix, accuracy_score

app = Flask(__name__)
CORS(app)

@app.route('/predict/<ticker>', methods=['GET'])
def prediction(ticker):
    api_key = 'w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
    url = f"https://api.goapi.id/v1/stock/idx/{ticker}/historical?&api_key={api_key}"
    response = requests.get(url)
    data = response.json()

    df = pd.DataFrame(data['data']['results'])

    df['close'] = df['close'].astype(float).astype(int)
    df['open'] = df['open'].astype(float).astype(int)
    df['status'] = df.apply(lambda row: 'Naik' if row['close'] > row['open'] else 'Turun', axis=1)

    features = df[['open', 'high', 'low', 'close', 'volume']]
    target = df['status']

    nb = GaussianNB()
    nb.fit(features, target)

    latest_data = features.iloc[-1:]  # Select the last row as the latest data

    prediction = nb.predict(latest_data)
    probabilities = nb.predict_proba(latest_data)[0]  # Get the prediction probabilities

    prediction_dict = {
        'prediction': prediction[0],
        'probability': {
            'Naik': f"{probabilities[0] * 100:.2f}%",  # Convert probabilities to percentages
            'Turun': f"{probabilities[1] * 100:.2f}%"
        }
    }

    response = jsonify(prediction_dict)

    return response


@app.route('/explain/<ticker>', methods=['GET'])
def explanation(ticker):
    api_key = 'w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
    url = f"https://api.goapi.id/v1/stock/idx/{ticker}/historical?&api_key={api_key}"
    response = requests.get(url)
    data = response.json()

    df = pd.DataFrame(data['data']['results'])

    df['close'] = df['close'].astype(float).astype(int)
    df['open'] = df['open'].astype(float).astype(int)
    df['status'] = df.apply(lambda row: 'Naik' if row['close'] > row['open'] else 'Turun', axis=1)

    features = df[['open', 'high', 'low', 'close', 'volume']]
    target = df['status']

    X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.1, random_state=1)

    nb = GaussianNB()
    nb.fit(X_train, y_train)

    predictions = nb.predict(X_test)

    accuracy = accuracy_score(y_test, predictions) * 100

    confusion = confusion_matrix(y_test, predictions)

    # Extract TP, TN, FP, FN from the confusion matrix
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
    explanation = f"Dari semua {total_predictions} contoh, {correct_predictions} diprediksi benar oleh Naive Bayes classifier. "
    explanation += f"Akurasi yang didapatkan sebesar: {accuracy:.2f}%"

    # Response
    response = jsonify({
        'explanation': explanation,
        'accuracy': f"{accuracy:.2f}%",
        'precision': f"{precision:.2f}%",
        'recall': f"{recall:.2f}%",
        'f1_score': f"{f1:.2f}%"
    })

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
