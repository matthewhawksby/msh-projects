import Dropdown from "./components/dropdown";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Grid from "./components/grid";
import ScrollBox from "./components/scrollbox";

{
  /*TODO:: 
   *  AI-ML uses in art and creative visuals.
   *  AI-ML uses in data visualization.
   *  AI-ML uses in historical topics.
   *  AI-ML uses in a small browser game (chess engine?).
   *  AI-ML uses with a chatbot.
   *  Projects by topic (create tags to immediately identify)
      Try using very subtle gradients in text boxes.
      Separate Elements for name and description
      Build dropdown menu component
      Segment Anything to create a css bottom element based on the skyline.
      breaks?
      Switch off of vercel to a regular hosted website eventually.
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
      Pictures.
      Make sure it works on rotations too.
      Emphasis on Applications.
      Projects page: Give it a second nav bar with a list of projects.
      Blog: Needs full functionality for code display etc.
      */
}

export default function Home() {
  return (
    <main className="w-screen bg-gray-100">
      <nav className="flex md:pr-32 md:pl-32 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-b-2 sticky top-0 z-50">
        <Logo></Logo>
        <div className="inline-flex md:hidden mr-2">
          <Dropdown></Dropdown>
        </div>
        <div className="hidden md:flex">
          <Menu></Menu>
        </div>
      </nav>
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <Grid></Grid>
      </div>
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <div>
          <div className="bg-emerald-200 p-12 rounded-lg text-2xl pt-12 md:max-2xl:pb-12 font-display h-48 md:max-2xl:ml-10 md:max-2xl:text-4xl text-gray-1000 font-bold">
            Matthew Hawksby is a student,<br></br> future software developer{" "}
            <br></br> and AI/ML enthusiast <br></br> living in Coquitlam, BC.
          </div>
          <div className="bg-red-50 h-72 md:w-1/3">Testing</div>
          <ScrollBox
            bgColor="bg-emerald-500"
            width={10}
            height={20}
          ></ScrollBox>
          <div className="flex justify-center pt-6 font-dm-sans w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-tetraRed border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Always interested in learning new things.
            <br></br>I hope to find ways to bring substantial value to the
            companies and organizations that I work for in the future.
          </div>
          <div className="flex justify-center">
            <div className="grid pt-12 mb-32 text-center lg:mb-0 lg:w-full justify-evenly gap-4 lg:max-w-5xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
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
                  https://picaq.github.io/sarasa/
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
