import React from 'react';
import './Cards.css';

function CardItem({ src, label }) {
  return (
    <div className='cards__item'>
      <figure className='cards__item__pic-wrap' data-category={label}>
        <img
          className='cards__item__img'
          src={src}
          alt={label}
        />
      </figure>
    </div>
  );
}

export default CardItem;
