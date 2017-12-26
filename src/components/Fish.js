import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const  { details, index } = this.props;
    const isAvailble = details.status === 'available'
    const buttonText = isAvailble ? 'Add to Order' : 'Sold Out!'
    return(
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailble} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
