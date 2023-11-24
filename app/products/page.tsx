import ProductActions from './components/ProductActions';
import { ProductTable } from './components/ProductTable';

const ProductPage = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='px-5 md:px-20 py-20 mx-auto'>
        <ProductActions />
        <div className='flex flex-col justify-center items-center mt-5'>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
