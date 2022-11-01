import styles from "./pitchedheader.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function HeroPitched() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h5>Skyline Roofing</h5>
              <h2>Pitched Roofs</h2>
              <h6>
                We offer Fiber cement slate concrete roofs tiles natural Blue
                Bangor slate
              </h6>
              <p>
                The choice to repair or replace a roof can only be made after a
                full roof MOT inspection. Your estimator will be able to advise
                on the cost of carrying out repairs or replacement of a pitched
                or flat roof.
              </p>
              <p>
                All roofs should be inspected at least twice a year, ideally,
                before and after winter. Conducting tiling repairs, cleaning out
                gutters, repointing ridge tiles and fixing rainwater goods are
                all common maintenance items on older roofs.
              </p>
            </div>
          </Grid>
          <Grid xs={12} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667237249/Site%20Images/Pitched_hero_img_qz6wlv.png"
              width={530}
              height={450}
              alt="Pitched Roofing Skyline roofing, roofing contractors Cork, Ireland"
              className={styles.hero_img}
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
