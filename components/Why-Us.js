import styles from "./whyus.module.css";
import { Grid, Image, Container, Row, Col } from "@nextui-org/react";

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
                <Container gap={0}>
                  <Row>
                    <Col>
                      <div className={styles.key_highlight}>
                        <h5>
                          <span className={styles.material_icon}></span>
                          Quality Materials
                        </h5>
                      </div>
                    </Col>
                    <Col>
                      <div className={styles.key_highlight}>
                        <h5>
                          <span className={styles.Insured_icon}></span>
                          Fully Insured
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <Container gap={0}>
                  <Row>
                    <Col>
                      <div className={styles.key_highlight}>
                        <h5>
                          <span className={styles.Skilled_icon}></span>
                          Skilled Experts
                        </h5>
                      </div>
                    </Col>
                    <Col>
                      <div className={styles.key_highlight}>
                        <h5>
                          <span className={styles.Projects_icon}></span>
                          800 + Projects
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Grid>
            <Grid xs={0} sm={1}></Grid>
            <Grid xs={12} sm={5}>
              <Image
                className={styles.image_container}
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1666636493/Site%20Images/why_choose_qerzxq.png"
                width={538}
                height={475}
                objectFit="scale-down"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
