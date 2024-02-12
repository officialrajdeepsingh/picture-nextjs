import { Picture } from "@/components/Picture";
import { ShowPrefersColorTheme } from "@/components/Prefers-color-theme";

export default function Home() {

  return (
    <div className="h-full">
      
      <ShowPrefersColorTheme />

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Picture />
      </div>
    </div>
  );
}
