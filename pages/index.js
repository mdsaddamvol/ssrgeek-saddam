import Head from "next/head";
import {
  Hero,
  OurServices,
  RecentProjects,
  TechnologiesUsed,
  Testimonials,
} from "../components";

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

      <main>
        <Hero />
        <OurServices />
        <RecentProjects />
        <TechnologiesUsed />
        <Testimonials />
        <footer></footer>
      </main>
    </div>
  );
}
