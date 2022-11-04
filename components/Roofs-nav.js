import styles from "./roofnav.module.css";
import { Grid } from "@nextui-org/react";
import Link from "next/link";
export default function RoofNav() {
  return (
    <div className={styles.show_hide}>
      <div className={styles.title}>
        <h3>We’re providing quality roofing services</h3>
      </div>
      <div className={styles.roof_nav_container}>
        <Grid.Container justify="center">
          <Grid xs={12} sm={4} md={4}>
            <div className={styles.border}>
              <Link href="/Flat">
                <a className={styles.tab_nav_link}>
                  <span className={styles.icon}></span>Flat Roofs
                </a>
              </Link>
            </div>
          </Grid>
          <Grid xs={12} sm={4}>
            <div className={styles.border}>
              <Link href="/Pitched">
                <a className={styles.tab_nav_link}>
                  <span className={styles.icon_pitched_roof}></span>Pitched
                  Roofs
                </a>
              </Link>
            </div>
          </Grid>
          <Grid xs={12} sm={4}>
            <div>
              <Link href="/Slate">
                <a className={styles.tab_nav_link}>
                  <span className={styles.icon_slate_roof}></span>Slate Roofs
                </a>
              </Link>
            </div>
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <div className={styles.sec_row_tabs}>
          <Grid.Container>
            <Grid xs={12} sm={4}>
              <div>
                <Link href="/Conservatory">
                  <a className={styles.tab_nav_link}>
                    <span className={styles.icon_conservatory}></span>
                    Conservatory Roofs
                  </a>
                </Link>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div>
                <Link href="/Repair">
                  <a className={styles.tab_nav_link}>
                    <span className={styles.icon_repair}></span>Repair Roof
                  </a>
                </Link>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div>
                <Link href="/Fibreglass">
                  <a className={styles.tab_nav_link}>
                    <span className={styles.icon_fibre}></span>Fibreglass Roofs
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
