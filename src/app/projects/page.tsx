import Dropdown from "../components/dropdown";
import Logo from "../components/logo";
import Menu from "../components/menu";
import Grid from "../components/grid";
import ScrollBox from "../components/scrollbox";
import FloatingTextbox from "../components/textbox";
import Roundel from "../components/roundel";
import ProjectGrid from "../components/ProjectGrid";


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
            <p className="font-body xl:h-[7vw] top-1/2 text-lg xl:text-2xl leading-tight m-4">
              Here&apos;s my projects page! 
              <br></br>
               I&apos;m working on some projects in my classes at the moment, and I hope to add pages for them at the end of the semester.
            </p>
          </FloatingTextbox>
          </div>
          <Grid color="red" rows={2}></Grid>
      </div>

      <div className="relative bg-red-100 h-[35vw] rounded-lg opacity-80 font-body sm:pr-4 sm:pl-4 md:pl-12 md:pr-12 mr-10 ml-10">
          <div className="absolute top-[2vw] z-10 w-[80vw] md:w-[45vw] lg:w-[70vw] xl:w-[90vw] xl:h-[8vw] rounded-lg left-[2vw]">
            <ProjectGrid></ProjectGrid>
          </div>
          <div className="absolute top-[12vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[15vw] right-[5vw] rounded-lg right-[5vw]">
          </div>
          <div className="absolute top-[24vw] z-10 w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[45vw] xl:h-[8vw] rounded-lg left-[5vw]">
          </div>
      </div>





      <div className="justify-center sm:pr-4 sm:pl-4 md:pl-40 md:pr-40">
        <div>
          <ScrollBox
            bgColor="bg-red-500"
            width={10}
            height={20}
          ><p>d</p></ScrollBox>
          <div className="flex justify-center pt-6 w-full h-32 pt-24 md:max-2xl:w-1/2 text-center text-gray-1000 font-bold border-tetraRed border-b-2 text-lg lg:pb-12 md:max-2xl:pt-10 md:max-2xl:pl-6">
            Fonts are DM Sans and Iosevka Mono/Sarasa Gothic Mono.
          </div>
        </div>
      </div>
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
