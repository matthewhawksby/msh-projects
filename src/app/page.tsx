import Dropdown from "./components/dropdown";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Grid from "./components/grid";
import ScrollBox from "./components/scrollbox";
import FloatingTextbox from "./components/textbox";
import ColorFadeComponent from "./components/fadein";
import ScrollRevealComponent from "./components/scrollAppear";
import Roundel from "./components/roundel";
{
  /*TODO:: 
  {false &&<ScrollBox bgColor="bg-emerald-500"
            width={10}
            height={20}> Text goes here!</ScrollBox>}
      {false && <ScrollRevealComponent></ScrollRevealComponent>}
      {false &&<ColorFadeComponent></ColorFadeComponent>}
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
<main className="max-w-screen bg-gray-100">
      <nav className="flex md:pr-32 md:pl-32 max-w-full bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-b-2 sticky top-0 z-50">
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
            <p className="font-body xl:h-[7vw] top-1/2 text-lg xl:text-3xl leading-tight m-4">
              Hi! My name is <b>Matthew Hawksby.</b>
              <br></br>
              <br></br> 
              I&apos;m a <b>Computer Science and Mathematics</b> student at Simon Fraser University in BC Canada.
            </p> 
          </FloatingTextbox>
          </div>
          <div className="flex gap-1 justify-evenly">
            <Grid color="emerald" rows={2} ></Grid>
          </div>
        </div>


      <div className="relative bg-emerald-100 h-[40vw] rounded-lg opacity-80 font-body sm:pr-4 sm:pl-4 md:pl-12 md:pr-12 mr-10 ml-10">
          <div className="absolute top-[2vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[8vw] rounded-lg left-[5vw]">
            <FloatingTextbox>
              <p className="font-body text-2xl ">
                I have interests in natural language processing, machine reasoning and other topics. I&apos;d like to set this
                website up to be a home to a bunch of fun little projects and math or data visualizations.
              </p>
            </FloatingTextbox>
            </div>
          <div className="absolute top-[12vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[15vw] right-[5vw] rounded-lg right-[5vw]">
            <FloatingTextbox>
            <p className="font-body text-2xl">
                I am also involved with the Burnaby Mountain Toastmasters, the resident Toastmasters club at SFU, where I am the VP of Membership. 
                It&apos;s a lot of fun delivering speeches on different topics and encouraging others to get out of their shell. 
                <br></br>

              </p>
            </FloatingTextbox>
          </div>
          <div className="absolute top-[24vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[8vw] rounded-lg left-[5vw]">
              <FloatingTextbox>
                <p className="font-body text-2xl">
                  As part of my interest in natural language processing, I am currently a volunteer R.A. with the linguistics department at SFU.
                  I will eventually be putting up all my projects on this website.... I would like to build it into a full blog as well.
                </p>
              </FloatingTextbox>
            </div>
          </div>
      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">



        <div>
          <ScrollBox
            bgColor="bg-emerald-500"
            width={10}
            height={20}
          >          </ScrollBox>
          <div className="flex justify-center pt-6 font-dm-sans max-w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Font is Iosevka/Sarasa Gothic.
          </div>
        </div>
      </div>
      <nav className="flex md:pr-32 md:pl-32 h-10 max-w-full bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
