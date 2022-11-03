import styles from "@/styles/repair.module.css";
import { Grid, Image, Row, Col, Card, Text } from "@nextui-org/react";
import Hero from "@/components/Repair/Hero";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";
export default function RoofRepairs() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <USPBanner />
      </div>
      <div className={styles.three_card_container}>
        <Grid.Container justify="center" gap={2} className={styles.card_styles}>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Moss Removal</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667478301/Site%20Images/Moss_add1tl.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Large patches of moss can hold water against the roof
                    surface, causing it to rot. Additionally, the water can pool
                    in small gaps between roof tiles, which can cause damage
                    when it freezes. Removing moss yourself can be dangerous,
                    and cause further damage so its best left to the experts.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Tile Repointing</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667479407/Site%20Images/tile_repointing_i73czb.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Repointing is used when the mortar between tile roof
                    components cracks or breaks apart. This sometimes leaves a
                    gap where water can get under the tiles. Birds and rodents
                    can also borrow in and make their nest under the tiles. Our
                    repointing services will prevent this damage.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Chimney Repointing</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667479474/Site%20Images/chimmey_repoint_m60d50.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Repointing is the process of renewing the ‘pointing’, which
                    is the external part of mortar joints, in masonry
                    construction. Over time, weathering and decay cause gaps in
                    the joints between masonry units. This usually happens in
                    bricks, allowing the undesirable entrance of water.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center" gap={2} className={styles.card_styles}>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Replacement of Lead</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667482648/Site%20Images/lead_replace_isf5hx.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Lead is extremely durable, meaning poor installation causes
                    most issues. The most common problem is leadwork simply
                    coming loose from the wall and leaving a gap for rainwater.
                    Over longer periods, leadwork can eventually split due to
                    the exposure to British weather.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Tile Replacement</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667482659/Site%20Images/Tile_replacement_crdhy0.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Lead is extremely durable, meaning poor installation causes
                    most issues. The most common problem is leadwork simply
                    coming loose from the wall and leaving a gap for rainwater.
                    Over longer periods, leadwork can eventually split due to
                    the exposure to British weather.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Re-cementing Ridge</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667483183/Site%20Images/ridge_vq7vba.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Over time the cement on the roof can fail due to constant
                    exposure to high winds and bad weather. They should last a
                    few decades before needing to be replaced if fitted properly
                    in the first place! Our professionals will remove the old
                    mortar, then re-cement the ridge tiles.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <CTAbanner />
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
