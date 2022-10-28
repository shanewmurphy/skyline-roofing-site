import styles from "./contactbanner.module.css";
import { Grid, Col, Spacer } from "@nextui-org/react";

export default function CTAbanner() {
  return (
    <div>
      <div className={styles.main_container}>
        <Grid.Container>
          <Grid xs={12} sm={6} justify="center">
            <Col className={styles.icon_call}></Col>
            <div>
              <h4>Call Us Today</h4>
              <h5>085 233 5120</h5>
            </div>
            <Spacer y={1} />
          </Grid>
          <Grid xs={12} sm={6} justify="center">
            <Col className={styles.icon_email}></Col>
            <div>
              <h6>Don’t hesitate drop us email</h6>
              <div>
                <a
                  className={styles.email_link}
                  href="mailto:skylineroofing.com"
                >
                  info@skylineroofing.com
                </a>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
