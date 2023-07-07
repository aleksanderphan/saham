import requests
import json
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix, precision_score, recall_score, accuracy_score

app = Flask(__name__)
CORS(app)

@app.route('/predict/<ticker>', methods=['GET'])
def predict(ticker):
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
    risk_percentage = 100 - accuracy

    total_predictions = len(y_test)
    correct_predictions = (predictions == y_test).sum()
    explanation = f"Out of {total_predictions} instances, {correct_predictions} were predicted correctly by the Naive Bayes classifier. "
    explanation += f"The accuracy of the classifier in predicting the 'status' is: {accuracy:.2f}%"
    
  
    #response
    response = jsonify({'explanation': explanation, 'accuracy': f"{accuracy:.2f}%", 'risk': f"{risk_percentage:.2f}%"})


    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
