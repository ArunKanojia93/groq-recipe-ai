import Image from "next/image";
import OrbitingCircles from "./magicui/OrbitingCircles";

export default function Background() {
  return (
    <div className="relative flex w-[400px] h-[400px] flex-col items-center justify-center overflow-hidden rounded-lg my-auto">
      {/* Inner Circles */}
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={70}>
        <Image unoptimized src="/menu.gif" alt="food" width={100} height={100} className="rounded-full" />
      </OrbitingCircles>
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={70}>
        <Image unoptimized src="/plate.gif" alt="food" width={100} height={100} className="rounded-full" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={170} duration={20} reverse>
        <Image unoptimized src="/pizza.gif" alt="food" width={100} height={100} className="rounded-full" />
      </OrbitingCircles>
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={170} duration={20} delay={20} reverse>
        <Image unoptimized src="/donut.gif" alt="food" width={100} height={100} className="rounded-full" />
      </OrbitingCircles>
    </div>
  );
}
