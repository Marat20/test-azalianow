import { Advertising } from '@/components/Advertising';
import { Products } from '@/components/Products';

export default function Home() {
  return (
    <div className='container'>
      <Advertising />
      <Products />
    </div>
  );
}
