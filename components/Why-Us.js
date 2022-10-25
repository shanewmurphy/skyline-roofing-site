import styles from "./whyus.module.css";
import { Grid, Image, Spacer } from "@nextui-org/react";

export default function WhyUs() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row_conatiner}>
          <Grid.Container gap={2}>
            <Grid xs={12} sm={6}>
              <div>
                <h6>Why Choose Us</h6>
                <h2>Few reasons to choose our company</h2>
                <p>
                  At Skyline Roofing and Building, our focus it’s really more of
                  an obsession is to deliver the very best experience and
                  results every single time. We use the latest building science
                  techniques and then use our own team of installation experts
                  to implement a lasting solution.
                </p>
                <div className={styles.list_row_icons}>
                  <div className={styles.list_item}>
                    <img src="./Qual_icon.svg" />
                    <h6>Quality Materials</h6>
                  </div>
                  <div className={styles.list_item}>
                    <img src="./Insured_icon.svg" />
                    <h6>Fully Insured</h6>
                  </div>
                </div>
                <div className={styles.list_row_icons}>
                  <div className={styles.list_item}>
                    <img src="./hard_hat_icon.svg" />
                    <h6>Skilled Experts</h6>
                  </div>
                  <div className={styles.list_item}>
                    <img src="./projects_icon.svg" />
                    <h6>800 + Projects </h6>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={1} sm={1}></Grid>
            <Grid xs={12} sm={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1666636493/Site%20Images/why_choose_qerzxq.png"
                width={538}
                height={475}
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
