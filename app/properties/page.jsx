import React from 'react';
import Link from 'next/link';

const PropertiesPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Properties Page</h1>
      <div className='flex flex-col'>
        <Link href='/'>Go Home</Link>
        <Link href='/properties/add'>Add Property</Link>
      </div>
    </div>
  );
};

export default PropertiesPage;
