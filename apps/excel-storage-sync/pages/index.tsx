import React, { useState, useEffect } from 'react';

export function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/bucket');
      const json = await res.json();
      console.log(json[0])
      setData(JSON.stringify(json[0]));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        <span>Excel Sync</span>
      </h1>
      <div>{data ? <h1>{data}</h1> : <p>Loading...</p>}</div>
    </div>
  );
}

export default Index;
