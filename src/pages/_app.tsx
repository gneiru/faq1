import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "~/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar />
      <div className="text-black dark:text-white bg-slate-200 dark:bg-slate-800">
        <Component {...pageProps} />

      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
