import { IProduct } from '@/types/product.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
