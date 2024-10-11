import React from 'react';
import { Body } from '../types/types';
import { Link } from 'react-router-dom';

interface Props {
  body: Body;
}

const Card: React.FC<Props> = ({ body }) => (
  <div className="card">
    <h3>{body.englishName}</h3>
    <p>Gravity: {body.gravity ?? 'N/A'}</p>
    <p>Density: {body.density ?? 'N/A'}</p>
    <Link to={`/body/${body.id}`}>Details</Link>
  </div>
);

export default Card;
