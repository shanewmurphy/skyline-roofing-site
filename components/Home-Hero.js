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
                When you are seeking a slate roofing company in Dublin or Cork,
                you will be happy for having placed your order with us.
              </h4>
              <h3>Get your free No obligation quote</h3>
              <span>Call 085 233 5120</span>
            </div>
          </Grid>
          <Grid xs={1} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              className={styles.hide_img_mobile}
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667560205/Site%20Images/Home_hero_i9xbec.png"
              width={530}
              height={545}
              alt="skyline chadding roofing"
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
