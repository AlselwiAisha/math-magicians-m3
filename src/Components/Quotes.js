import React, { useEffect, useState } from 'react';
import './Quotes.css';

const Quote = () => {
  const [data, setData] = useState({
    loading: false,
    error: false,
    loadingData: [],
  });
  useEffect(() => {
    const Quotes = async () => {
      try {
        setData((State) => ({ ...State, loading: true }));
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: { 'X-Api-Key': 'B9kClOR1a7eI0+srbHaNSA==whCdpSmCFFe0QFFi' },
        });
        const result = await res.json();
        const { error } = result;
        if (!res.ok) throw new Error(`Oops there is an error... ${error} `);
        setData((State) => ({ ...State, loadingData: result }));
        setData((State) => ({ ...State, loading: false }));
      } catch (err) {
        setData((State) => ({ ...State, error: true }));
      }
    };
    Quotes();
  }, []);
  let content = '';
  if (data.loading) content = 'Loading ...';
  if (data.error) content = 'Oops there is an error...';

  return (
    <>
      {data.error ? (
        <p className="error">{content}</p>
      ) : (
        <div className="Container">
          <p className="loading">{content}</p>
          {data.loadingData.map((data) => (
            <div className="Text" key={data.id}>
              <h2>{`"${data.category}":`}</h2>
              <p>
                {`((${data.quote})) '${data.author}' .`}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Quote;
