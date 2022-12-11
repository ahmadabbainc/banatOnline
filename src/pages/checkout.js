import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();


  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex mx-auto max-w-6xl">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/G/01//pxd/marketing/paycode/2021/US-MX-lp-lego-assets/slsm_banner_1500x300.png"
            alt="checkout banner"
            width={1050}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white font-bold">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your shopping cart is empty"
                : "Shopping cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                ratings={item.ratings}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold ml-2">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
                  <button
                    role="link"
                    disabled={!session}
                    className={`button mt-2 ${
                      !session &&
                      "from-gray-500 to-gray-500 border-gray-500 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <a href="https://buy.stripe.com/test_00g7t75rv4OH0dW9AA">
                    {!session ? "Sign in to checkout" : "proceed to checkout"}
                    </a>
                  </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
