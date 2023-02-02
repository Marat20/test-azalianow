import Image from 'next/image';
import { FC, useState } from 'react';
import { IProduct } from '@/types/product.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { addProduct, removeProduct } from '@/redux/slices/cartSlice';
import { addFav, removeFav } from '@/redux/slices/favouriteSlice';

export const Product: FC<IProduct> = ({
  id,
  image,
  category,
  title,
  description,
  price,
  rating,
}) => {
  const [count, setCount] = useState(0);
  const { cart, favourite } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const isFav = favourite.includes(id);
  const isInCart = cart.find((prod) => prod.id === id);

  const handleProduct = (id: number, count: number) => {
    isInCart
      ? dispatch(removeProduct({ id, count }))
      : dispatch(addProduct({ id, count }));
  };

  const handleFavourite = (id: number) => {
    isFav ? dispatch(removeFav(id)) : dispatch(addFav(id));
  };

  return (
    <figure className='product'>
      {rating.count > 300 && <div className='product__hit'>.</div>}

      <Image
        className='product__image'
        loader={() => image}
        src={image}
        alt={title}
        width={220}
        height={220}
      />
      <div className='product__category'>
        <p>{category}</p>
        <p>
          {rating.count}|{rating.count}
        </p>
      </div>
      <p className='product__description'>
        {description.length > 96
          ? description.slice(0, 96) + '...'
          : description}
      </p>
      <p className='product__price'>{price} /шт.</p>
      <div className='product_buttons'>
        <button onClick={() => handleProduct(id, count)}>В корзину</button>
        <button onClick={() => handleFavourite(id)}>ЛАЙК</button>
      </div>
    </figure>
  );
};
