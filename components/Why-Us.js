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
                <Grid.Container>
                  <Grid xs={12} sm={6}>
                    <div className={styles.key_point_Quality}>
                      <h6>
                        <span>
                          <img
                            src="/Materials_icon.svg"
                            alt="quality materials icon"
                          />
                        </span>
                        Quality Materials
                      </h6>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <div className={styles.key_point_Insured}>
                      <h6>
                        <span>
                          <img src="/Cert_icon.svg" alt="Full Insured icon" />
                        </span>
                        Fully Insured
                      </h6>
                    </div>
                  </Grid>
                </Grid.Container>
                <Grid.Container>
                  <Grid xs={12} sm={6}>
                    <div className={styles.key_point_Skilled}>
                      <h6>
                        <span>
                          <img src="/Hat_icon.svg" />
                        </span>
                        Skilled Experts
                      </h6>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <div className={styles.key_point_projects}>
                      <h6>
                        <span>
                          <img src="/Projects_icon.svg" />
                        </span>
                        800 + Projects
                      </h6>
                    </div>
                  </Grid>
                </Grid.Container>
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
