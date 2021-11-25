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
                  <a>Sebel Food</a>
                </Link>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700 font-bold">
                <Link href="/">
                  <a>
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end gap-2">
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2">
                Log in
              </a>
            </Link>
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2">
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
                  <span>25 mins</span>
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
                  <span>25 mins</span>
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
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>
            <div className="mt-8">{/* Cards go here */}</div>

            <div className="flex justify-center">
              <a className="btn bg-secondary-100 text-secondary-200">
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
