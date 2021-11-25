import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="text-gray-600">
      <div>
        <div>
          <nav>
            <div>
              <h1 className="font-bold uppercase">
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
        <main>
          <div>
            <Link href="/">
              <a>Log in</a>
            </Link>
            <Link href="/">
              <a>Sign up</a>
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Sebelion</h3>
          </header>

          <div>
            <h4 className="font-bold">Latest Recipes</h4>
            <div>
              {/* Cards go here */}
              <div>
                <img src="/img/stew.jpg" alt="Stew" />
                <div>
                  <span>5 Bean Chilli Stew</span>
                  <span>Recipe by Mario</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold">Most Popular</h4>
            <div>{/* Cards go here */}</div>

            <div>
              <a></a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
