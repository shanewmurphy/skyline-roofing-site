import styles from "@/styles/conservatory.module.css";
import { Grid, Image, Row, Col, Container, Spacer } from "@nextui-org/react";
import HeroConservatory from "@/components/Conservatory/Conservatory-hero";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import ConservatoryProjects from "@/components/Conservatory/Conservatory-Projects";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";
export default function ConservatoryPage() {
  return (
    <div>
      <div>
        <HeroConservatory />
      </div>
      <div>
        <USPBanner />
      </div>
      <div className={styles.conservatory_container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h3>Convert your conservatory to the perfect living space</h3>
              <h4>
                Is your conservatory too cold in the winter and too warm in the
                summer? Dont wait any longer. Contact us today to request a free
                quote and feel alot more comfortable in your own space.
              </h4>
              <div className={styles.key_points_container}>
                <Container justify="center" align="center">
                  <Row>
                    <Col>
                      <div className={styles.icon_circle}>
                        <Image src="/Temp_icon.svg" alt="temperature icon" />
                      </div>
                      <div>
                        <p>
                          Our insulated roofing system will maintain a pleasant
                          climate in your conservatory all year round.
                        </p>
                      </div>
                    </Col>
                    <Spacer x={2} />
                    <Col>
                      <div className={styles.icon_circle}>
                        <Image src="/Calender_icon.svg" alt="calender icon" />
                      </div>
                      <div>
                        <p>
                          Conversions are completed within 5-8 days by
                          conservatory roof replacement specialists
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className={styles.key_points_sec_row}>
                <Container justify="center" align="center">
                  <Row>
                    <Col>
                      <div className={styles.icon_circle}>
                        <Image src="/guarantee_icon.svg" alt="icon" />
                      </div>
                      <div>
                        <p>
                          Enjoy peace of mind with our 10-year work guarantee
                          and 40-year roof tile guarantee
                        </p>
                      </div>
                    </Col>
                    <Spacer x={2} />
                    <Col>
                      <div className={styles.icon_circle}>
                        <Image src="Energy_icon.svg" alt="Energy icon" />
                      </div>
                      <div>
                        <p>
                          Save energy and money thanks to reduced heating costs.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Grid>
          <Spacer x={3} />
          <Grid xs={12} sm={5} md={5}>
            <Image
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667425620/Site%20Images/Conservatory_img_01_yxxk0n.png"
              height={589}
              width={530}
              alt="Skyline Roofing, Cork, Ireland"
            />
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <CTAbanner />
      </div>
      <div>
        <ConservatoryProjects />
      </div>
      <div>
        <RoofNav />
      </div>
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
}
