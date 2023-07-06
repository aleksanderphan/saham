import React, { useState, useEffect } from 'react';

function FetchAPI() {
  const [emiten, setEmiten] = useState([]);
  useEffect(() => {
    fetch('')
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
