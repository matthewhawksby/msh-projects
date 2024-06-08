import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="flex w-screen z-10 items-center justify-between bg-tetraPurple">
        <Image
          src="/ac-mshblack192.png"
          alt="Matthew Scott Hawksby Logo"
          className="dark:hidden w-10 sm:w-12 md:w-14 lg:w-16 m-3 lg:ml-24 md:ml-24"
          width={100}
          height={100}
          priority
        />
        {/*
            <Image
              src=""
              alt="Dark Mode MSH Logo"
              className="light:hidden p-2 w-22 sm:w-30 md:w-32 lg:w-30"
              width={100}
              height={100}
              priority
            />
            */}
        <div className="hidden sm:inline-flex">
          <ul className="hidden sm:inline-flex text-2xl text-customOffWhite lg:mr-24 md:mr-24">
            <li className="">
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline decoration-customOffWhite decoration-1 delay-250"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline decoration-customOffWhite decoration-1 delay-250"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline decoration-customOffWhite decoration-1 delay-250"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline decoration-customOffWhite decoration-1 delay-250"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden">
          {/*TODO:: 
                 breaks?
                 Curves as separators.
                 Logo Still doesn't look completely right.
                 I used padding for a lot of stuff where it's probably not the best solution.
                 Break everything apart into separate reusable components.
                 Make the Menu work correctly.
                 Add in the header elements with hover and current page underlined.
                 All of this should display differently in dark mode.
                 Make the Menu inline.
                 Add accordion Menus to the about page.
                 As you scroll down the page, the icon and navbar/menu attach to the top of the page and follow you down the page.
                 Pictures.
                 Make sure it works on rotations too.
                 Emphasis on Applications.
                 Projects page: Give it a second nav bar with a list of projects.
                 Blog: Needs full functional for code display etc.
                  */}
          <div
            className="sans font-dm-sans inline-flex items-center overflow-hidden border-white b-4
                              dark:border-gray-800 dark:bg-gray-900 rounded-md sm:w-30 sm:h-30 md:w-32 md:h-32"
          >
            <a
              href="#"
              className="px-4 py-2 text-sm/none text-black text-large h-14 sm:w-30 sm:h-24 
                             md:w-32 md:h-32 dark:text-gray-300 items-center flex border-tetraRed border-4 bg-white"
            >
              MENU
            </a>
          </div>

          <div
            className="absolute collapse end-0 z-10 mt-2 w-56 rounded-md border-gray-100 bg-white shadow-lg 
                           dark:border-gray-800 dark:bg-gray-900"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 
                               dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                Projects
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 
                               dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                Blog
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700
                               dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                About
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700
                               dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                Links
              </a>

              <form method="POST" action="#">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50
                                 dark:text-red-500 dark:hover:bg-red-600/10"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Inside Button Element
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen pr-2 pl-2 sm:pr-4 sm-pl-4 md:pr-24 md:pl-24 lg:pr-24 lg:pl-24">
        <div className="text-2xl pt-12 pb-44 font-display w-full h-48 ml-2 md:ml-10 lg:ml-10 lg:text-5xl md:text-5xl text-gray-800 font-bold">
          Matthew Hawksby is a student, <br></br> future software developer{" "}
          <br></br> and AI/ML enthusiast <br></br> living in Coquitlam, BC.
        </div>
        <div className="pt-6 pb-24 pt-16 pl-10 font-dm-sans w-full h-32  text-xl text-gray-800 font-bold border-tetraRed border-b-2">
          Please get in touch if you&apos;re interested in my projects.<br></br>{" "}
          I am actively looking for internships.
        </div>

        <div className="pt-12 mb-32 grid text-center lg:mb-0 lg:w-full justify-evenly gap-4 lg:max-w-5xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
              hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              First Text Box is located here. Create link to Projects page.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
              hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Blog{" "}
              {/* NOTE : The group-hover translate item down there is fun.
                    TODO:: These things are so neat.*/}
              <span className="inline-block transition-transform group-hover:translate-y-10 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Second Text Box. Link to Blog.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
              hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Third Text Box, link to About information.
            </p>
          </a>

          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 
              hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Links{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Miscellaneous links.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
