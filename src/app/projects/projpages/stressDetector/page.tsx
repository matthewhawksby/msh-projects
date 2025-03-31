import Dropdown from "../../../components/dropdown";
import Logo from "../../../components/logo";
import Menu from "../../../components/menu";
import Grid from "../../../components/grid";
import ScrollBox from "../../../components/scrollbox";
import FloatingTextbox from "../../../components/textbox";
import Roundel from "../../../components/roundel";
import SocialLinks from "../../../components/sociallinks";
import SocialIcons from "../../../components/iconset"

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

      
      <nav className="flex md:pr-32 md:pl-32 h-10 w-screen bg-neutral-200 items-center justify-between border-gray-900/50 bg-white border-t-2 sticky bottom-0 z-50"></nav>
    </main>
  );
}
