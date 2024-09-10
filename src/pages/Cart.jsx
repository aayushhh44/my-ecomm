import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, addToFavorite, favItems } =
    useContext(CartContext);
  // console.log(removeFromCart);
  // console.log("Ranmati", favItems);
  // const navigate = useNavigate();

  const increment = (itemId) => {
    updateQuantity(itemId, "increment");
  };

  const decrement = (itemId) => {
    updateQuantity(itemId, "decrement");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const finalPrice = totalPrice - 299 + 99 + 799;
  // console.log(totalPrice)

  console.log("your dad", cartItems);
  return (
    <div className="p-4 sm:p-16">
      {/* <p>lams{totalPrice}</p> */}
      {/* {cartItems.map((item) =>(
        <div key={item?.id}>
          <p>{item?.productName}</p>
          <img src={item?.image} alt="" />
        </div>
      ))} */}
      {/* <h1 className="text-center">cart</h1>

      <div className="flex justify-between shadow-md p-4 rounded-lg">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div> */}

      <section class="antialiased">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h2>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                {cartItems.length !== 0 ? (
                  <div>
                    {cartItems.map((item) => (
                      <div
                        key={item?.id}
                        className="rounded-lg border p-4 shadow-md md:p-6"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <img
                            className="hidden h-20 w-20 dark:block"
                            src={item?.image}
                            alt="product image"
                          />
                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => decrement(item?.id)}
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 hover:bg-red-700 focus:outline-none bg-[#da4443]"
                              >
                                <svg
                                  className="h-2.5 text-white w-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                                placeholder=""
                                value={item?.quantity}
                                required
                              />
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  increment(item?.id);
                                }}
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 hover:bg-red-700 focus:outline-none bg-[#da4443]"
                              >
                                <svg
                                  className="h-2.5 w-2.5 text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold">
                                NPR {item?.price}
                              </p>
                            </div>
                          </div>
                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a className="text-base font-medium hover:underline">
                              {item?.productName}
                            </a>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => addToFavorite(item)}
                                type="button"
                                className="inline-flex items-center text-sm font-medium hover:underline dark:text-gray-400"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                Add to Favorites
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeFromCart(item?.id);
                                }}
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="text-3xl font-poppins">
                      Your cart is <span className="text-red-600">Empty</span>
                    </h2>
                    <p className="font-poppins text-sm text-justify">
                      Looks like you've not added anything to your cart. Go
                      ahead and add some items to your cart
                    </p>
                  </div>
                )}

                {/* <div class="rounded-lg border p-4 shadow-md md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" class="shrink-0 md:order-1">
                      <img
                        class="h-20 w-20 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                      <img
                        class="hidden h-20 w-20 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      />
                    </a>

                    <label for="counter-input" class="sr-only">
                      Choose quantity:
                    </label>
                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                      <div class="flex items-center">
                        <button
                        onClick={decrement}
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300  hover:bg-red-700 focus:outline-none bg-[#da4443]"
                        >
                          <svg
                            class="h-2.5 text-white w-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          data-input-counter
                          // onClick={add}
          
                          class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium focus:outline-none focus:ring-0 "
                          placeholder=""
                          value={count}
                          required
                        />
                        <button
                        onClick={increment}
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300  hover:bg-red-700 focus:outline-none bg-[#da4443]"
                        >
                          <svg
                            class="h-2.5 w-2.5 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold ">$1,499</p>
                      </div>
                    </div>  

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a href="#" class="text-base font-medium hover:underline">
                        PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                        M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                        Keyboard layout INT
                      </a>

                      <div class="flex items-center gap-4">
                        <button
                          type="button"
                          class="inline-flex items-center text-sm font-medium  hover:underline dark:text-gray-400 "
                        >
                          <svg
                            class="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                          </svg>
                          Add to Favorites
                        </button>

                        <button
                          type="button"
                          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <svg
                            class="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="hidden xl:mt-8 xl:block">
                <h3 class="text-2xl font-semibold text-gray-900">
                  People also bought
                </h3>
                <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                  <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm border-gray-700">
                    <div class="overflow-hidden rounded">
                      <img
                        class="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                      <img
                        class="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        class="text-lg font-semibold leading-tight text-gray-900 hover:underline "
                      >
                        iMac 27”
                      </a>
                      <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p class="text-lg font-bold text-gray-900 ">
                        <span class="line-through"> $399,99 </span>
                      </p>
                      <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $299
                      </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-1"
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-1"
                        role="tooltip"
                        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <button
                        type="button"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700"
                      >
                        <svg
                          class="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div class="space-y-6 overflow-hidden rounded-lg border  bg-white p-6 shadow-sm border-gray-700 ">
                    <a href="#" class="overflow-hidden rounded">
                      <img
                        class="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                        alt="imac image"
                      />
                      <img
                        class="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div>
                      <a
                        href="#"
                        class="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                      >
                        Playstation 5
                      </a>
                      <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p class="text-lg font-bold text-gray-900">
                        <span class="line-through"> $799,99 </span>
                      </p>
                      <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $499
                      </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-2"
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-2"
                        role="tooltip"
                        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Add to favourites
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <button
                        type="button"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium   hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          class="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700">
                    <div class="overflow-hidden rounded">
                      <img
                        class="mx-auto h-44 w-44 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                        alt="imac image"
                      />
                      <img
                        class="mx-auto hidden h-44 w-44 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                        alt="imac image"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        class="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                      >
                        Apple Watch Series 8
                      </a>
                      <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        This generation has some improvements, including a
                        longer continuous battery life.
                      </p>
                    </div>
                    <div>
                      <p class="text-lg font-bold text-gray-900">
                        <span class="line-through"> $1799,99 </span>
                      </p>
                      <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                        $1199
                      </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2.5">
                      <button
                        data-tooltip-target="favourites-tooltip-3"
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
                      >
                        <svg
                          class="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="favourites-tooltip-3"
                        role="tooltip"
                        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium opacity-0 shadow-sm transition-opacity duration-300 "
                      >
                        Add to favourites
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>

                      <button
                        type="button"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          class="-ms-2 me-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                <p class="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd class="text-base font-medium text-gray-900 ">
                        NPR {totalPrice}
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd class="text-base font-medium text-green-600">
                        -NPR 299.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd class="text-base font-medium text-gray-900 ">
                        NPR 99
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd class="text-base font-medium text-gray-900 ">
                        NPR 799
                      </dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 ">Total</dt>
                    <dd class="text-base font-bold text-gray-900 ">
                      NPR {finalPrice}
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    // onClick={navigate("/")}
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700  sm:p-6">
                <form class="space-y-4">
                  <div>
                    <label
                      for="voucher"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="flex w-full items-center bg-red-600 justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
