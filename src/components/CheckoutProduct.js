import React, { useState } from "react";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const CheckoutProduct = ({
    id,
    title,
    price,
    // rating,
    description, 
    category, 
    image,
    // hasPrime,
}) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5)
    const dispatch = useDispatch()
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
      }
      dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
      dispatch(removeFromBasket({ id }))
    }

  return (
    <div className="grid grid-cols-5">
      {/* Left */}
      <img
        src={image}
        alt="Checkout Image"
        height={100}
        width={100}
        objectFit="contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
        </div>
        <p className="text-xs my2 line-clamp-3">{description}</p>
        <Currency
        quantity={price}
        currency="USD"
        />
        {hasPrime && (
            <div className="flex items-center space-x-2">
                <img loading="lazy" className=" flex w-14" src="https://ams03pap001files.storage.live.com/y4mjJNRMY5JgUQF34S5tX-OeeizM7bvyGbldvKHyqcVn7dE9SX6cv0ptRSna4EAiLFUvQ0O1UKiaYfDZap9ClYL4wUTuUM7Mopw5d-vn7dhx0YSKeNG2jhLFIL8EA8vJxlTcUIEGLpPf5N-MbpZ90H6YOUIleC-L8n4E9DWdj8AU3iZp4FL-_yb4OuwLb-Rk0l2?width=338&height=77&cropmode=none" alt="Has Prime" />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}
      </div>
      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button mt-auto" onClick={addItemsToBasket}>Add to cart</button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
