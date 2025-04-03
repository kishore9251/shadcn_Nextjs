import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/Components/sidenavbar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen w-full bg-white text-black flex",inter.className,{
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
      <SideNavbar/>

       <div className="p-10 w-full"> {children}</div>
      </body>
    </html>
  );
}
