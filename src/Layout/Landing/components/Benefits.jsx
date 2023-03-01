import {
  IconHeadset,
  IconRocket,
  IconCloud,
  IconLock,
} from "@tabler/icons-react";
import React from "react";

export default function Benefits() {
  return (
    <div class="min-h-screen py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 max-w-xl text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            The ClientCloud Advantage
          </h2>
          <p className="text-base md:text-lg">
            Say goodbye to the chaos of managing customer data across multiple
            platforms. With CloudConnect, you can manage your entire customer
            lifecycle from one centralized location.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <IconRocket />
            </div>

            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
              <p class="mb-2 text-gray-500">
                Whether you're just starting out or have been in business for
                years, our platform can adapt to your needs and scale as you
                grow.
              </p>
            </div>
          </div>

          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <IconLock />
            </div>

            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Security</h3>
              <p class="mb-2 text-gray-500">
                We understand the importance of keeping your data safe and
                secure. That's why we use the latest security protocols to
                protect your data and keep your customer information
                confidential.
              </p>
            </div>
          </div>

          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <IconCloud />
            </div>

            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
              <p class="mb-2 text-gray-500">
                Our cloud-based platform ensures that you can access your data
                from anywhere, at any time. You don't have to worry about
                installing or updating software, as everything is managed in the
                cloud.
              </p>
            </div>
          </div>

          <div class="flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <IconHeadset />
            </div>

            <div>
              <h3 class="mb-2 text-lg font-semibold md:text-xl">Support</h3>
              <p class="mb-2 text-gray-500">
                Our team of experts is always here to help you with any
                questions or issues you may have. From onboarding to ongoing
                support, we're committed to ensuring that you get the most out
                of our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
