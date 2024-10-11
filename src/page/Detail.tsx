import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Body } from '../types/types';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [body, setBody] = useState<Body | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBody = async () => {
      try {
        const response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies/${id}`);
        const data = await response.json();
        if (data) {
          setBody(data);
        } else {
          setError('Celestial body not found');
        }
      } catch (err) {
        setError('Failed to fetch celestial body');
      }
    };

    fetchBody();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {body ? (
        <>
          <h1>{body.englishName}</h1>
          <p>Gravity: {body.gravity ?? 'N/A'}</p>
          <p>Density: {body.density ?? 'N/A'}</p>
          <p>Mass: {body.mass?.massValue ?? 'N/A'} x 10^({body.mass?.massExponent}) kg</p>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

export default Detail;
