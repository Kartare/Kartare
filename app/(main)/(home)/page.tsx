

import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Github, LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {

  const { isAuthenticated } = await getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <header>
        <h1 className="text-7xl text-center">Kartare</h1>
        <h2 className="text-2xl mt-10 text-center text-slate-800">AI augmented roadtrip planner</h2>

        <div className="mt-6 flex justify-center">
          <p className="italic text-sm">Planner is currently in <u>static</u> mode.</p>
        </div>

        <div className="mt-2 flex justify-center">

          {isLoggedIn && (
            <Link href="/planner">
              <Button variant={"outline"}>
                <ArrowRight width={16} height={16} className="mr-2" />
                Go to planner
              </Button>
            </Link>
          )}
          {!isLoggedIn && (
            <LoginLink postLoginRedirectURL="/planner">
              <Button variant={"outline"}>
                <LogIn width={16} height={16} className="mr-2" />
                Login
              </Button>
            </LoginLink>
          )}
        </div>
      </header>

      <div className="w-full flex justify-center fixed bottom-4 px-4">
        <div className="w-full max-w-lg flex flex-col-reverse sm:flex-row">
          <div className="sm:w-1/2 w-full text-center sm:mt-0 mt-4">
            Copyright &copy; 2024 &ndash; Kartare
          </div>
          <div className="sm:w-1/2 w-full flex justify-center">
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
