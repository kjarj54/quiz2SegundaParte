import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Weather app",
  description: "A app to check the weather",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-200`}>
        <Header />
        <div className="mx-auto my-0 w-10/12">{children}</div>
      </body>
    </html>
  );
}
