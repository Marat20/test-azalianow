import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { iconFav } from '@/media/svg/fav';
import { addProduct, removeProduct } from '@/redux/slices/cartSlice';
import { addFav, removeFav } from '@/redux/slices/favouriteSlice';
import { FC, useState } from 'react';

interface IProps {
  id: number;
}

export const Buttons: FC<IProps> = ({ id }) => {
  const [count, setCount] = useState(1);
  const { cart, favourite } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const isFav = favourite.includes(id);
  const isInCart = cart.find((prod) => prod.id === id);

  //   Добавление/удаление товара из корзины

  const handleProduct = (id: number, count: number) => {
    isInCart
      ? dispatch(removeProduct({ id, count }))
      : dispatch(addProduct({ id, count }));
  };

  //   Добавление/удаление товара из избранного

  const handleFavourite = (id: number) => {
    isFav ? dispatch(removeFav(id)) : dispatch(addFav(id));
  };

  const changeCount = (type: string) => {
    if (type === 'increase') setCount((prev) => prev + 1);
    else if (type === 'decrease' && count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div className='product__buttons'>
      {isInCart ? (
        <button
          className='product__buttons_in-cart'
          onClick={() => handleProduct(id, count)}>
          В корзине
        </button>
      ) : (
        <div className='product__buttons_all'>
          <button
            className='product__buttons_addCart'
            onClick={() => handleProduct(id, count)}>
            В корзину
          </button>
          <div className='product__buttons_count'>
            <div
              className='product__buttons_minus'
              onClick={() => changeCount('decrease')}>
              -
            </div>
            <p>{count}</p>
            <div
              className='product__buttons_plus'
              onClick={() => changeCount('increase')}>
              +
            </div>
          </div>
        </div>
      )}

      <div
        className='product__buttons_favourite'
        onClick={() => handleFavourite(id)}>
        {iconFav(isFav)}
      </div>
    </div>
  );
};
