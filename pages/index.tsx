import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <Link href="/">
                <a>Sebel Food</a>
              </Link>
            </h1>
          </div>
          <ul>
            <li>
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
          <h2>Recipes</h2>
          <h3>For Sebelion</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>
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

          <h4>Most Popular</h4>
          <div>{/* Cards go here */}</div>

          <div>
            <a></a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
