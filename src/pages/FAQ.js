import React, { useState } from "react";

export default function FAQ() {
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex w-full items-center justify-between p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 transform text-gray-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <div class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <div>
            <p class="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
              Brand new
            </p>
          </div>
          <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Frequently Asked Questions
          </h2>
          <p class="text-base text-gray-700 md:text-lg ">
            Your questions, answered.
          </p>
        </div>
        <div class="space-y-4">
          <Item title="How can?"></Item>
          <Item title="What is?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            distinctio culpa reprehenderit labore voluptatem suscipit, cumque
            numquam, quis mollitia animi facere expedita incidunt voluptas nobis
            odit totam voluptate vel sint!
          </Item>
          <Item title="Is the?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How much?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </div>
  );
}
