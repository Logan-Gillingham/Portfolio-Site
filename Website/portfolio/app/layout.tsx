import WiiPointer from "@/components/WiiPointer";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";

const ubuntu = Ubuntu({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="cursor-none">
      <body className={`${ubuntu.className} cursor-none bg-[#ebebeb] overflow-hidden`}>
        <AudioProvider>
        <WiiPointer />
        {children}
        </AudioProvider>
      </body>
    </html>
  );
}