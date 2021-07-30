import React from 'react';

// TODO: find a uniqe key to map offers instead of map index
const SpecialOffers = ({
  offers = []
}) => {
  return (
    <div>
      <h2>Special Offers</h2>
      { offers.map((offer, index) => (
        <span key={ index }>
          <h4>#{ index + 1 }</h4>
          <ul>
            <li>type: { offer.type }</li>
            <li>status: { offer.status }</li>
            <li><a href={ offer.url }>More information</a></li>
          </ul>
        </span>
      )) }
    </div>
  )
};

export default SpecialOffers;