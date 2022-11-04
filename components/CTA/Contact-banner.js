import styles from "./contactbanner.module.css";
import { Grid, Col, Row, Text, Container } from "@nextui-org/react";

export default function CTAbanner() {
  return (
    <div>
      <div className={styles.main_container}>
        <Grid.Container>
          <Grid xs={12} sm={4} justify="center">
            <Container>
              <Row justify="center" align="center">
                <h5>Call Us Today</h5>
              </Row>
              <Row justify="center" align="center">
                <h4>085 233 5120</h4>
              </Row>
            </Container>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Container>
              <Row justify="center" align="center">
                <h6>Based in Blarney</h6>
              </Row>
              <Row justify="center" align="center">
                <span>Serving all Cork City and County</span>
              </Row>
            </Container>
          </Grid>
          <Grid xs={12} sm={4} justify="center">
            <Container>
              <Row justify="center" align="center">
                <h6>Don’t hesitate drop us email</h6>
              </Row>
              <Row justify="center" align="center">
                <a className={styles.email_link}>info@skylineroofing.ie</a>
              </Row>
            </Container>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
