import styles from "./aboutus.module.css";
import { Grid, Image } from "@nextui-org/react";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.container_about_us}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h6>About Us</h6>
              <h2>We’re committed to roofing exellence</h2>
              <h5>Put the best roof over your head</h5>
              <p>
                We repair and replace all types of roofs, so contact us today
                for a free quote and advice on your roofing needs. We will give
                you the lowdown on whether your roof requires a simple repair or
                a complete replacement, drawing upon our extensive knowledge as
                approved installers of all our roof products, including tiled,
                slate, flat GRP and EPDM roofing.
              </p>
            </div>
          </Grid>
          <Grid xs={0} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              className={styles.content_image}
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667570901/Site%20Images/About_Us_B_p98nu4.png"
              height={360}
              width={546}
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
