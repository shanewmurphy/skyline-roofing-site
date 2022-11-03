import { Grid, Image } from "@nextui-org/react";
import styles from "./herorepair.module.css";
export default function Hero() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h5>Skyline Roofing</h5>
                <h2>Roof Repairs</h2>
                <p>
                  Putting off small roof repairs can end up causing a lot more
                  damage, resulting in a greater repair cost later on. Whatever
                  the issue, what seems like a small problem can soon escalate
                  into a large one if not repaired promptly.
                </p>
                <p>
                  All the effort creating a beautiful home for you and your
                  family can quickly be ruined by a damaged roof. Water that
                  enters through even the smallest leak can ruin ceilings and
                  walls in your house. Mould can also grow on damp areas in your
                  house, which can cause health problems for you and your family
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667484751/Site%20Images/Repairs_hero_qbmw6o.png"
                height={450}
                width={530}
                alt="Skyline Roofing, Roofing repairs, roofing contractors Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
