import { useState } from 'react';

function Card({ id, name, info, price, image, removetour }) {
  const [readmore, showless] = useState(false);
  const description = readmore ? info : `${info.substr(0, 200)}...`;
  function readmoreHandler() {
    showless(!readmore);
  }
  return (
    <div className='card'>
      <div className='image'>
        <img src={image} alt='' />
      </div>
      <div className='tour-info'>
        <div className='tour-price'>${price}</div>
        <div className='tour-name'>{name}</div>
        <div className='description'>
          {description}
          <span className='read-more' onClick={readmoreHandler}>
            {readmore ? `showless` : `readmore`}
          </span>
        </div>
        <button
          className='btn-red'
          onClick={() => {
            removetour(id);
          }}
        >
          Not Intrested
        </button>
      </div>
    </div>
  );
}

export default Card;
