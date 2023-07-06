import React, { useState, useEffect } from 'react';

function FetchAPI() {
  const [emiten, setEmiten] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.goapi.id/v1/stock/idx/companies?api_key=w7paqZoA95Ef7iSmd9DInHZUDNRUFH?_limit=10'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <div>FetchAPI</div>;
}

export default FetchAPI;
