import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { TypeFilter } from './TypeFilter';

const ProductActions = () => {
  return (
    <div className='flex justify-between'>
      <CategoryFilter />
      <TypeFilter />
    </div>
  );
};

export default ProductActions;
