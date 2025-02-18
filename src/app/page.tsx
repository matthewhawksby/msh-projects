import Dropdown from "./components/dropdown";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Grid from "./components/grid";
import ScrollBox from "./components/scrollbox";
import FloatingTextbox from "./components/textbox";
import Roundel from "./components/roundel";
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
      <div className="mt-[3vw] mb-[2vw]">
        <div className="font-body justify-center sm:pr-4 sm:pl-4 md:pl-12 md:pr-12">
          <FloatingTextbox><p className="font-body text-2xl">
          Hi! My name is <b>Matthew Hawksby</b>, I&apos;m a <b>Computer Science and Mathematics</b> student at Simon Fraser University in BC Canada.</p> 
          <br></br> 
          <p>
          I have interests in natural language processing, machine reasoning and other topics. I&apos;d like to set this
          website up to be a home to a bunch of fun little projects and math or data visualizations.
        </p>
        <p className="font-body text-lg">
          I am also involved with the Burnaby Mountain Toastmasters, the resident Toastmasters club at SFU, where I am the VP of Membership. 
          It&apos;s a lot of fun delivering speeches on different topics and encouraging others to get out of their shell. 
        </p>
        <p className="font-body text-lg mt-4">
        As part of my interest in natural language processing, I am currently a volunteer R.A. with the linguistics department at SFU.
          I will eventually be putting up all my projects on this website.... I would like to build it into a full blog as well!
        
        </p></FloatingTextbox>
          
          <Grid color="emerald"></Grid>
        </div>
      </div>
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <div>
          <ScrollBox
            bgColor="bg-emerald-500"
            width={10}
            height={20}
          ></ScrollBox>
          <div className="flex justify-center pt-6 font-dm-sans w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-tetraRed border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Font is Iosevka/Sarasa Gothic.
          </div>
        </div>
      </div>
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
