import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600 font-body">
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-1 md:flex md:justify-end">
          <Navbar />
        </div>

        <main className="px-8 md:px-16 py-6 bg-gray-100 md:col-span-4">
          <div className="flex justify-center md:justify-end gap-2">
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Log in
              </a>
            </Link>
            <Link href="/">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Sign up
              </a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-4xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Sebelion</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
              {/* Cards go here */}
              <Card
                title="5 Bean Chilli Stew"
                owner="Mario"
                minute={25}
                image="/img/stew.jpg"
              />
              <Card
                title="Vwg Noodles"
                owner="Princess Peach"
                minute={10}
                image="/img/noodles.jpg"
              />
              <Card
                title="Tofu Curry"
                owner="Luigi"
                minute={40}
                image="/img/curry.jpg"
              />
              <Card
                title="Vegetable Soup"
                owner="Mario"
                minute={50}
                image="/img/soup.jpg"
              />
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
              {/* Cards go here */}
              <Card
                title="Vwg Noodles"
                owner="Princess Peach"
                minute={10}
                image="/img/noodles.jpg"
              />
              <Card
                title="5 Bean Chilli Stew"
                owner="Mario"
                minute={25}
                image="/img/stew.jpg"
              />
              <Card
                title="Vegetable Soup"
                owner="Mario"
                minute={50}
                image="/img/soup.jpg"
              />
              <Card
                title="Tofu Curry"
                owner="Luigi"
                minute={40}
                image="/img/curry.jpg"
              />
            </div>

            <div className="flex justify-center mt-8">
              <a className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner font-bold transition hover:scale-125 hover:bg-opacity-50 duration-300">
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
