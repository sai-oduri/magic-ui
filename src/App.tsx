// import BlurIn from "@/components/magicui/blur-in";

import { DockDemo } from "./components/ui/Dock";

import DotPattern from "@/components/magicui/dot-pattern";

//@ts-ignore
const DotPatternDemo = ({ children }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="">
        {/* Dot Pattern */}
        {children}
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
    </div>
  );
};

export default function App() {
  return (
    <div>
      {/* <BlurIn word={"Hello World"}></BlurIn> */}
      <DotPatternDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
        <DockDemo></DockDemo>
      </DotPatternDemo>
    </div>
  );
}