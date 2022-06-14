import Head from "next/head";
import {
  Hero,
  OurServices,
  RecentProjects,
  TechnologiesUsed,
  Testimonials,
} from "../components";
import ContactUs from "../components/home/ContactUs/ContactUs";
import WhySsrGeek from "../components/home/WhySsrGeek/WhySsrGeek";

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
        <WhySsrGeek />
        <ContactUs />
      </main>
    </div>
  );
}
