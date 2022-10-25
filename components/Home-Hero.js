import styles from "./home-hero.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function HomeHero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content_container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h1>Whatever the job, Skyline Roofing has you covered</h1>
              <h4>
                Skyline Roofing is the name you can trust to put a roof over
                your head. We provide a nationwide service all covered by an
                insurance-backed guarantee.
              </h4>
              <h3>Get your free No obligation quote</h3>
              <span>Call 085 233 5120</span>
            </div>
          </Grid>
          <Grid xs={0} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1666449363/Site%20Images/Hero_img_B_qz3tzc.png"
              width={525}
              height={483}
              alt="skyline chadding roofing"
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
