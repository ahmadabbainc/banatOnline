import React, { useState } from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemsToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        dispatch(addToBasket(product))
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 italic text-xs text-gray-400'>{category}</p>

            <Image className='cursor-pointer' src={image} height={200} width={200} objectFit="contain" />

            <h4 className='my-3 cursor-pointer'>{title}</h4>

            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                ))}
            </div>

            <p className='text-xs my2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency
                    quantity={price}
                    currency="USD"
                />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img 
                    loading="lazy"
                    className='w-12' 
                    src="https://ams03pap001files.storage.live.com/y4mjJNRMY5JgUQF34S5tX-OeeizM7bvyGbldvKHyqcVn7dE9SX6cv0ptRSna4EAiLFUvQ0O1UKiaYfDZap9ClYL4wUTuUM7Mopw5d-vn7dhx0YSKeNG2jhLFIL8EA8vJxlTcUIEGLpPf5N-MbpZ90H6YOUIleC-L8n4E9DWdj8AU3iZp4FL-_yb4OuwLb-Rk0l2?width=338&height=77&cropmode=none"
                    alt="prime" />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}

            <button onClick={addItemsToBasket} className='mt-auto button cursor-pointer'>Add to Cart</button>
        </div>
    )
}

export default Product
