import type { NextPage } from 'next';
import clsxm from '@/lib/clsxm';

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <div className={clsxm(['underline', 'text-3xl', 'font-bold'])}>123</div>
      Hello world!
    </h1>
  );
};

export default Home;
