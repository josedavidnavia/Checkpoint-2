import React, { useState, useEffect } from 'react';
import { Body } from '../types/types';
import Card from './Card';

const List: React.FC = () => {
  const [bodies, setBodies] = useState<Body[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBodies = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
        const data = await response.json();
        if (data.bodies) {
          setBodies(data.bodies);
        } else {
          setError('No celestial bodies found');
        }
      } catch (err) {
        setError('Failed to fetch celestial bodies');
      }
    };

    fetchBodies();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {bodies.length > 0 ? (
        bodies.map((body) => (
          <Card key={body.id} body={body} />
        ))
      ) : (
        <p>Loading celestial bodies....</p>
      )}
    </div>
  );
};

export default List;
