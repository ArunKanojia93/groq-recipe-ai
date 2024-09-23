import Image from "next/image";
import ShineBorder from "./magicui/ShineBorder";
export default function Header() {
  return (
    <header className="fixed top-3 left-3">
      <nav aria-label="Global" className="mx-auto flex items-center w-full justify-between">
        <ShineBorder className="relative flex items-center justify-center overflow-hidden rounded-lg bg-background" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
          <a href="#" className="-m-1.5 flex gap-2 items-center text-lg font-serif font-black">
            <span className="sr-only">Groq Recipe AI</span>
            <Image priority alt="logo" src="/logo.png" width={20} height={20} className="rounded-full" />
            Groq Recipe AI
          </a>
        </ShineBorder>
        <div></div>
      </nav>
    </header>
  );
}
