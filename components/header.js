import Container from "@/components/container";
import Link from "next/link";
import AboutSidebar from "./aboutSidebar";

export default function Header() {
  return (
    <header className="py-[20px] h-[180px] mb-4  border-b border-black  md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <Link
            href="/"
            className="mb-1 text-3xl md:mb-0 hover:text-gray-500 focus:text-gray-500"
          >
            lyriku
          </Link>

          <nav className="flex w-full ml-auto space-x-3 text-sm md:text-base md:w-auto">
            <AboutSidebar />
          </nav>
        </div>
        <div className="grid grid-cols-3">
          <div className="text-2xl">
            <p>multilingual song lyrics</p>
          </div>
          <div></div>
          <div className="text-base">
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] bg-[#ddcfcf] mr-2"></div>
              <span>Japanese</span>
            </div>
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] bg-[#aebbba] mr-2"></div>
              <span>Korean</span>
            </div>

            <div className="flex items-center">
              <div className="w-[18px] h-[18px] bg-[#d3cec4] mr-2"></div>
              <span>English</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
