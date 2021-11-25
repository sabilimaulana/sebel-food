import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600 font-body">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1">
          <nav>
            <div>
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <Link href="/">
                  <a className="hover:text-gray-700 ">Sebel Food</a>
                </Link>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700 font-bold">
                <Link href="/">
                  <a>
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <span>About</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <span>Contact</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end gap-2">
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white">
                Log in
              </a>
            </Link>
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white">
                Sign up
              </a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Sebelion</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
              {/* Cards go here */}
              <div className="card">
                <figure className="relative overflow-hidden w-full h-32 sm:h-48 object-cover">
                  <Image
                    src="/img/stew.jpg"
                    alt="Stew"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="m-4">
                  <span className="font-bold">5 Bean Chilli Stew</span>{" "}
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card">
                <figure className="relative overflow-hidden w-full h-32 sm:h-48 object-cover">
                  <Image
                    src="/img/noodles.jpg"
                    alt="Noodles"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="m-4">
                  <span className="font-bold">Vwg Noodles</span>{" "}
                  <span className="block text-gray-500 text-sm">
                    Recipe by Princess Peach
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>10 mins</span>
                </div>
              </div>
              <div className="card">
                <figure className="relative overflow-hidden w-full h-32 sm:h-48 object-cover">
                  <Image
                    src="/img/curry.jpg"
                    alt="Curry"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="m-4">
                  <span className="font-bold">Tofu Curry</span>{" "}
                  <span className="block text-gray-500 text-sm">
                    Recipe by Luigi
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>40 mins</span>
                </div>
              </div>
              <div className="card">
                <figure className="relative overflow-hidden w-full h-32 sm:h-48 object-cover">
                  <Image
                    src="/img/soup.jpg"
                    alt="Soup"
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="m-4">
                  <span className="font-bold">Vegetable Soup</span>{" "}
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>50 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>
            <div className="mt-8">{/* Cards go here */}</div>

            <div className="flex justify-center">
              <a className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner font-bold">
                Load more
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
