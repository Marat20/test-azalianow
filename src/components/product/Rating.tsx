import { IRating } from '@/types/product.types';
import { showRating } from '@/utils/rating';
import { FC } from 'react';

interface IProps {
  category: string;
  rating: IRating;
}

export const Rating: FC<IProps> = ({ category, rating }) => {
  return (
    <div className='product__rating'>
      <p>{category}</p>
      <div>{showRating(rating.rate)}</div>
    </div>
  );
};
