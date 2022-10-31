import styles from "./keypoints.module.css";
import { Grid } from "@nextui-org/react";

export default function KeyPoints() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_key_points_container}>
          <Grid.Container gap={3} justify="center">
            <Grid xs={12} sm={4}>
              <div className={styles.key_col_A_container}>
                <h3>800</h3>
                <span>projects completed</span>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className={styles.key_col_B_container}>
                <h3>35</h3>
                <span>in business</span>
              </div>
            </Grid>
            <Grid xs={12} sm={4}>
              <div className={styles.logo_trustpolit_container}>
                <img src="/trustpilot_logo.svg" alt="trustpilot logo image" />
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
