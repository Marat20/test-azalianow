import { useGetProductsQuery } from '@/redux/productsApi';
import { Product } from './product/Product';

export const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className='error'>Error...</div>
      ) : (
        data?.map((product) => <Product key={product.id} {...product} />)
      )}
    </>
  );
};
