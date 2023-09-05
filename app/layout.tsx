import "./globals.css";
import Head from "./head";
import "moment/locale/id";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <body>
        <main className='container min-h-screen'>{children}</main>
        <footer className='p-[40px] bg-zinc-100 mt-[10px]'>
          Made By Fadil
        </footer>
      </body>
    </html>
  );
}
