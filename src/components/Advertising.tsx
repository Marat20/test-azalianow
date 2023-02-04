import { iconArrow } from '@/media/svg/arrow';
import Image from 'next/image';
import tableSrc from '../media/pics/table.png';
import tablePinkSrc from '../media/pics/pink-table.png';

export const Advertising = () => {
  return (
    <section className='advertising'>
      <h1 className='advertising__title'>Всё для комфортной работы</h1>
      {iconArrow()}
      <div className='advertising__top'>
        <Image src={tableSrc} width={166} height={148} alt='table' />
        <div className='advertising__top_discount'>
          <div className='parallelogram-yellow'>
            <span>-25%</span>
          </div>
          <p className='advertising__discount-choose'>
            на товары <br /> для кабинета
          </p>
          <p className='advertising__choose'>Выбрать</p>
        </div>
      </div>
      <div className='advertising__bottom'>
        <div className='advertising__bottom_discount'>
          <div className='advertising__discount-choose'>
            Скидка
            <div className='parallelogram-yellow'>
              <span>10%</span>
            </div>
            на периферию для компьютера
          </div>
          <p className='advertising__choose'>Выбрать</p>
        </div>
        <Image src={tablePinkSrc} width={166} height={140} alt='table-pink' />
      </div>
    </section>
  );
};
