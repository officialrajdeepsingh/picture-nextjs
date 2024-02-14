import { Logo } from "@/components/Logo";
import { ShowPrefersColorTheme } from "@/components/Prefers-color-theme";
import { ResponsivePicture } from "@/components/ResponsivePicture";

export default function Home() {

  return (
    <div className="h-full 2xl:text-4xl">
      
      <ShowPrefersColorTheme />

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Logo />
      </div>
      
      <h1> Responsive Picture</h1>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <ResponsivePicture />
      </div>


    </div>
  );
}
