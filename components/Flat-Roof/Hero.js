import styles from "./hero.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function HeroFlatroof() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h5>Skyline Roofing</h5>
                <h2>Flat Roofs</h2>
                <h6>
                  Skyline Roofing & Building specialises in the installation and
                  repair of a vast range of types of flat roofs.{" "}
                </h6>
                <p>
                  If you’re seeking the best roofing contractor in Dublin or
                  Cork for the installation or repair of a flat roof, rest
                  assured that Skyline Roofing & Building employs genuinely
                  multi-skilled employees with expertise in all aspects of
                  roofing and building.
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667387416/Site%20Images/Flat_hero_img_zbg3vp.png"
                height={450}
                width={530}
                alt="Skyline Roofing, Flat roofing, roofing contractors Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
