import React from 'react';
import Link from 'next/link';

const PropertyAddPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Add Properties Page</h1>
      <div className='flex flex-col'>
        <Link href='/properties'>Show Properties</Link>
        <Link href='/'>Go Home</Link>
      </div>
    </div>
  );
};

export default PropertyAddPage;
