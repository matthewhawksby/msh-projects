import Image from "next/image";
import Dropdown from "./components/dropdown";

{
  /*TODO:: 
                 Try using very subtle gradients in text boxes.
                 Separate Elements for name and description
                 Build dropdown menu component
                 Segment Anything to create a css bottom element based on the skyline.
                 breaks?
                 Switch off of vercel to a regular hosted website.
                 Underline Slide motion (kjt)
                 PostgreSQL setup.
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
                  */
}

export default function Home() {
  return (
    <main className="w-screen bg-neutral-50">
      <div className="flex w-screen z-10 items-center justify-between border-gray-900/50 bg-white border-b-2">
        <Image
          src="/ac-mshblack192.png"
          alt="Matthew Scott Hawksby Logo"
          className="dark:hidden inline-block float-left w-10 sm:w-12 md:w-14 lg:w-16 m-3 lg:ml-24 md:ml-24"
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
        <div className="md:max-2xl:hidden">
          <Dropdown></Dropdown>
        </div>

        <div className="inline-block float-right hidden sm:inline-flex">
          <ul className="hidden sm:inline-flex text-2xl text-gray-900 lg:mr-24 md:mr-24">
            <li className="">
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline  underline-offset-4 decoration-gray-900 decoration-2 delay-250"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 font-semibold hover:underline underline-offset-4 decoration-gray-900 decoration-2 delay-250"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
        <div className="md:max-xl:hidden"></div>
      </div>
      <div className="flex">
        <div className="w-screen pr-2 pl-2 sm:pr-4 sm-pl-4 md:pr-24 md:pl-24 lg:pr-24 lg:pl-24">
          <div className="text-2xl pt-12 md:max-2xl:pb-12 font-display w-full h-48 md:max-2xl:ml-10 md:max-2xl:text-4xl md:max-2xl:w-1/2 text-gray-800 font-bold">
            Matthew Hawksby is a student,<br></br> future software developer{" "}
            <br></br> and AI/ML enthusiast <br></br> living in Coquitlam, BC.
          </div>
          <div className="pt-6 font-dm-sans w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-800 font-bold border-tetraRed border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Please get in touch if you&apos;re interested in my projects.
            <br></br> I am actively looking for internships.
          </div>
        </div>
        <div className="bg-red-50 h-48 w-1/2">Testing</div>
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
    </main>
  );
}
