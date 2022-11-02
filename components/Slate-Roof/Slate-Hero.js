import styles from "./slatehero.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function SlateHero() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h5>Skyline Roofing</h5>
                <h2>Slate Roofs</h2>
                <h6>
                  Slate roofing, after all, has served our homes for centuries
                  on account of its pleasing appearance and naturally formed
                  tile shape.
                </h6>
                <p>
                  The choice to repair or replace a roof can only be made after
                  a full roof MOT inspection. Your estimator will be able to
                  advise on the cost of carrying out repairs or replacement of a
                  pitched or flat roof.
                </p>
                <p>
                  All roofs should be inspected at least twice a year, ideally,
                  before and after winter. Conducting tiling repairs, cleaning
                  out gutters, repointing ridge tiles and fixing rainwater goods
                  are all common maintenance items on older roofs.
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667398091/Site%20Images/Slate_hero_img_r3sub3.png"
                height={450}
                width={530}
                alt="Slate Roofing, skyline Rorofing, roofing contractors Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
