import { useState, useEffect } from 'react';

interface DataResponse {
  message: string;
}

function App() {
  const [data, setData] = useState<DataResponse | null>(null);

  useEffect(() => {
    // Fetching data from the backend URL
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="text-3xl font-bold underline">
      <h1>React + Express Connection</h1>
      {data ? (
        <p>Backend says: {data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;