import { CardProps } from '../../utils/types';
import './Cards.css';

function Card({ image, index, id, name }: CardProps) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ image }
        alt={ id }
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {name}
      </p>
    </div>
  );
}

export default Card;
