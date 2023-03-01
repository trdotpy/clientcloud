import React from "react";

export default function Testimonials() {
  return (
    <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold leading-none tracking-tight md:mb-12 lg:text-4xl">
          User Testimonials
        </h2>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-sm text-gray-500">
              "ClientCloud has been a game-changer for us. It's easy to use,
              integrates seamlessly with our other tools, and has helped us keep
              track of leads, follow-ups, and deals in a much more organized
              way."
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>

              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  John McCulling
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Software Engineer @ DataBark
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-sm text-gray-500">
              "ClientCloud has revolutionized the way we approach our marketing
              campaigns. The reporting and analytics features are fantastic. I
              can't recommend this platform enough!"
            </div>

            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                <img
                  src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>

              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  Kate Johnson
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  CTO @ NextDash
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-sm text-gray-500">
              "ClientCloud has made my job so much easier. The platform is
              intuitive and user-friendly, and the automation features have
              saved me countless hours of manual data entry."
            </div>

            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>

              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  Greg Jackson
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  CFO @ UpDown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
