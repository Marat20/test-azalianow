import { FC } from 'react';

interface IProps {
  description: string;
}

export const Description: FC<IProps> = ({ description }) => {
  return (
    <p className='product__description'>
      {description.length > 96 ? description.slice(0, 96) + '...' : description}
    </p>
  );
};
