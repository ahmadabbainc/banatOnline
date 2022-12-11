import React from 'react'
import Product from './Product'

const ProductsFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row md:grid-cols-2 lg:cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products.slice(0, 4).map(({ id, title, price, description, category, image }) =>
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      )}
      <img className='md:col-span-full w-full cursor-pointer' src="https://ams03pap001files.storage.live.com/y4mxVZZ-e6UOMCOHt0OUKACpehq6ogP5hlQEF0uIlArNJQHrqAAjkr_RRAcWdZiR_xfxATzTKM0y00oDfjFMeb5EgJ-qc75XZkfqlGlQcdZu-mPJeY3UMyuTW-dKSs-ahRNcb0iNtu2-TLmthPjYSaN7TBmhMwL6UDrbRCR6HwYqWMDpV96hSerqOau0NAIWejp?width=1301&height=263&cropmode=none" alt="feed-banner" />
      <div className='md:col-span-2'>
        {products.slice(4, 5).map(({ id, title, price, description, category, image }) =>
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )}
      </div>
      {products.slice(5, products.length).map(({ id, title, price, description, category, image }) =>
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      )}
    </div>
  )
}

export default ProductsFeed
