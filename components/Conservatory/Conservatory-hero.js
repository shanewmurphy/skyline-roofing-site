import styles from "./conservatory-hero.module.css";
import { Grid, Image, Spacer } from "@nextui-org/react";

export default function HeroConservatory() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h5>Skyline Roofing</h5>
                <h2>Conservatory</h2>
                <p>
                  Skyline Roofing and Building build conservatory to the highest
                  quality and our roof system is a revolutionary step forward in
                  home improvement. It is a high-performance, lightweight roof
                  replacement system that dramatically transforms your
                  conservatory into an ambient living space that you can enjoy
                  all year round.
                </p>
                <p>
                  Designed to replace your existing conservatory’s glass or
                  polycarbonate roof, this system can be used with your original
                  windows, doors, door frames and walls – and is fully tested
                  and approved to all thermal and structural standards.
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667414987/Site%20Images/Conser_hero_img_hbsybo.png"
                height={459}
                width={530}
                alt="Conservatory Roofing, Skyline Roofing, Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
