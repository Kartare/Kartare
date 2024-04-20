import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <header>
        <h1 className="text-7xl text-center">Kartare</h1>
        <h2 className="text-2xl mt-10 text-center text-slate-800">AI augmented roadtrip planner</h2>
        <div className="mt-4 flex justify-center">
          <Link href="/planner">
            <Button variant={"outline"}>
              <ArrowRight width={16} height={16} className="mr-2" />
              Go to planner
            </Button>
          </Link>
        </div>
      </header>

      <div className="w-full flex justify-center fixed bottom-4 px-4">
        <div className="w-full max-w-lg flex flex-row">
          <div className="w-1/2">
            Copyright &copy; 2024 &ndash; Kartare
          </div>
          <div className="w-1/2">
            <Link href="https://github.com/kartare/kartare" className="flex items-center" target="_blank">
              <Github width={16} height={16} className="mr-2" />
              Contribute via GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
