import React from 'react';
import Link from 'next/link';




const Nav = () => {






  return (
    <div className="flex mt-10 ">
<Link href="/Product">
<div className="mx-4 ">Product</div>
</Link>


      <div className="mx-4">Industries</div>
      
      <div className="mx-4">Apollo</div>
      <div className="mx-4">Bootcamps</div>
    </div>
  );
}

export default Nav;
