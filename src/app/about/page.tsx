import Dropdown from "../components/dropdown";
import Logo from "../components/logo";
import Menu from "../components/menu";
import Grid from "../components/grid";
import ScrollBox from "../components/scrollbox";
import FloatingTextbox from "../components/textbox";
import Roundel from "../components/roundel";
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

      <div className="relative w-screen h-1/4 xl:h-1/3 font-body pr-1 pl-1 sm:pr-1 sm:pl-1 md:pl-4 md:pr-4 lg:pl-12 lg:pr-12 z-20 mt-10 mb-10">
        <div className= "absolute z-10 w-[80vw] h-[20vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[15vw] p-7 m-10">      
          <FloatingTextbox>
            <p className="font-body text-2xl">
              I previously worked as a cheesemaker for the company, Saputo, mainly producing cheddar, mozzarella and jalapeño jack. I&apos;ll put some other about stuff here later!
            </p> 
          <br></br>
          </FloatingTextbox>
        </div>
          <Grid color="yellow" rows={2}></Grid>
      </div>
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <div>
          <ScrollBox
            bgColor="bg-yellow-500"
            width={10}
            height={20}
          ><p>t</p></ScrollBox>
          <div className="flex justify-center pt-6 font-dm-sans w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-tetraRed border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Fonts are DM Sans and Iosevka/Sarasa Gothic.
          </div>
        </div>
      </div>
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
