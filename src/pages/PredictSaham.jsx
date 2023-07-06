import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PredictSaham() {
  const { ticker } = useParams();

  return (
    <div>
      <h1>New Page</h1>
      <p>Ticker: {ticker}</p>
      {/* Proses Naive Bayes Here */}
    </div>
  );
}

export default PredictSaham;
