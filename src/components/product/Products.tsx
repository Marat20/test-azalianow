import { useGetProductsQuery } from '@/redux/productsApi';
import { Product } from './Product';

export const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <>
      {data?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
};
