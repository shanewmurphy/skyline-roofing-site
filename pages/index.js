import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@nextui-org/react";
import HomeHero from "@/components/Home-Hero";
import KeyPoints from "@/components/Key-Points";
import WhyUs from "@/components/Why-Us";
import AboutUs from "@/components/About-Us";
import RoofNav from "@/components/Roofs-nav";
import RecentProjects from "@/components/Recent-Projects";
import TestimonialCard from "@/components/Testimonial-Card";
import CTAbanner from "@/components/CTA/Contact-banner";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomeHero />
      </div>
      <div>
        <KeyPoints />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <CTAbanner />
      </div>
      <div>
        <RoofNav />
      </div>
      <div>
        <RecentProjects />
      </div>
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
}
