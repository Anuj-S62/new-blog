import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
// import Home from "./page";
import Home from "@/components/HomeData";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>
            Anuj's Blog
          </h1>
        </Link>
        
        <p>Welcome to my GSOC blog</p>
      </div>
    </header>
  )

  const Footer = (
    <footer>
      <div>
        <br/>
        
        <p>Developed by Anuj</p>
      </div>
    </footer>
  )

  const HomeImage = (
    <div>
      <div className="image-container">
        <Image
          src="/images/agl2.png" // Adjust the path to your image
          alt="Description of image"
          layout="fill" // Make the image fill the container
          // fill = {true}

        />
      </div>
      {/* Your other content goes here */}
    </div>
  )




  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {HomeImage}
        <Home>
        </Home>
        {children}
       
        </body>
    </html>
  );
}
