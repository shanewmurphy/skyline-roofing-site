import styles from "./hero.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function HeroFibreglass() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h5>Skyline Roofing</h5>
                <h2>Fibreglass Roofs</h2>
                <p>
                  Glass fibre roofing (GRP) is a common roofing system used
                  throughout Ireland Flat Roofing have been providing GRP
                  roofing services to residential and commercial properties
                  throughout Ireland for over 2 decades.
                </p>
                <p>
                  Fibreglass is much more durable than felt and stronger too. It
                  has no seams, so it's less likely to fail and let water in,
                  and it's relatively easy for a professional to repair if
                  damaged. The benefits of fibreglass roofing for the consumer
                  are its durability, longevity and high performance.
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667497914/Site%20Images/Fibre_hero_vyb5ag.png"
                width={530}
                height={454}
                alt="Skyline Roofing, Fibreglass roofing, Cork Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
