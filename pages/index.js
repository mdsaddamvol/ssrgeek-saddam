import Head from "next/head";
import { Hero, Navbar, OurServices } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SSR GEEK</title>
        <meta
          name="description"
          content="Nextjs, Reactjs , Fullstack web development company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <OurServices />

      <footer></footer>
    </div>
  );
}
