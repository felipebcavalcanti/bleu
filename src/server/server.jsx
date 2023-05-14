import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./ServerLog.txt');
        const text = await response.text();

        
        const line = text.split('\n');
        const dados = line.map(linha => linha.split(','));
        setData(dados);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map((linha, index) => (
        <div key={index}>
          {linha.map((campo, index) => (
            <span key={index}>{campo}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
