import Image from 'next/image';
import { FC, memo } from 'react';
import { IProduct } from '@/types/product.types';
import { getCurrency } from '@/utils/currency';
import { Rating } from './Rating';
import { Description } from './Description';
import { Buttons } from './Buttons';

export const Product: FC<IProduct> = memo(
  ({ id, image, category, title, description, price, rating }) => {
    return (
      <figure className='product'>
        {rating.count > 300 && (
          <div className='parallelogram product__hit'>
            <span>Хит</span>
          </div>
        )}
        <Image
          className='product__image'
          loader={() => image}
          src={image}
          alt={title}
          width={200}
          height={220}
        />
        <Rating category={category} rating={rating} />
        <Description description={description} />
        <p className='product__price'>
          {getCurrency(price)}₽<span> /шт.</span>
        </p>
        <Buttons id={id} />
      </figure>
    );
  }
);

Product.displayName = 'product';
