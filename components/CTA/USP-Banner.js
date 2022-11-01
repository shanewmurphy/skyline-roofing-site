import styles from "./USP.module.css";
import { Grid, Image } from "@nextui-org/react";

export default function USPBanner() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <Grid.Container>
            <Grid xs={12} sm={4} md={4} justify="center">
              <div className={styles.icon_img_container}>
                <span>
                  <Image
                    src="Trustpilot_logo_B.svg"
                    width={225}
                    height={55}
                    alt="Trustpilot logo"
                  />
                </span>
                <h5>35 Years Industry Experience</h5>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} justify="center">
              <div className={styles.icon_img_container}>
                <span>
                  <Image
                    src="QA_icon_B.svg"
                    height={55}
                    width={55}
                    alt="QA icon"
                  />
                </span>
                <h5>Advice Given Free Of Charge</h5>
              </div>
            </Grid>
            <Grid xs={12} sm={4} md={4} justify="center">
              <div className={styles.icon_img_container}>
                <span>
                  <Image
                    src="./Hard_hat_B.svg"
                    height={57}
                    width={63}
                    alt="hard hat icon"
                  />
                </span>
                <h5>
                  No Job Too <br /> Big or Small
                </h5>
              </div>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
