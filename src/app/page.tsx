import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2 w-screen md:pl-32 md:pr-32 lg:pl-32 lg:pr-32">
      <div className="border-4 p-3 rounded-lg">
        <header className="">
          <div className="w-full z-10 max-w-7xl items-center justify-between flex">
            <Image
              src="/ac-mshblack192.png"
              alt="Matthew Scott Hawksby Logo"
              className="dark:hidden p-2 w-22 sm:w-24 md:w-32 lg:w-32"
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
              <ul className="hidden sm:inline-flex text-2xl">
                <li className="">
                  <a
                    href="#"
                    className="block py-2 px-3 bg-white font-semibold hover:text-tetraRed"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 bg-white hover:text-blue-700 font-semibold hover:text-tetraBlue"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 bg-white hover:text-blue-700 font-semibold hover:text-tetraGreen"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 bg-white hover:text-blue-700 font-semibold hover:text-tetraPurple"
                  >
                    Fourth
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden lg:hidden">
              {/*TODO:: 
                 Break everything apart into seperate reusable components.
                 Make the Menu work correctly
                 Add in the header elements with hover and current page underlined.
                 All of this should display differently in dark mode.
                 Make the Menu inline.
                 Add accordion Menus to the about page.

                  */}
              <div
                className="sans font-dm-sans inline-flex items-center overflow-hidden border-gray-300 bg-black 
                              dark:border-gray-800 dark:bg-gray-900 rounded-md sm:w-30 sm:h-30 md:w-32 md:h-32"
              >
                <a
                  href="#"
                  className="border-e px-4 py-2 text-sm/none text-white text-large bg-gray-900 sm:w-30 sm:h-24 md:w-32 md:h-32 dark:border-e-gray-800 dark:text-gray-300"
                >
                  MENU
                </a>
              </div>

              <div
                className="absolute collapse end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg 
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
            {/*
            <p
              className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b 
              from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
              lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            >
              //Matthew Hawksby&nbsp; // //
              <code className="font-mono font-bold">This is some more text.</code>
              
            </p>
            */}
            {/*
            <div
              className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t
              from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none"
            >
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              ></a>

            </div>
            */}
          </div>

          <div
          //className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full
          //before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
          //before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3
          //after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
          //before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
          //after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px]
          //before:lg:h-[360px]"
          ></div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full justify-evenly lg:max-w-5xl lg:grid-cols-1 lg:text-left">
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
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
        </header>
      </div>
    </main>
  );
}
