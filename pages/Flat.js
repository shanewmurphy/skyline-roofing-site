import { Grid, Image, Card, Text } from "@nextui-org/react";
import styles from "../styles/flat.module.css";
import HeroFlatroof from "@/components/Flat-Roof/Hero";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import FLatProjects from "@/components/Flat-Roof/Flat-projects";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";

export default function FlatRoofPage() {
  return (
    <div>
      <div>
        <HeroFlatroof />
      </div>
      <div>
        <USPBanner />
      </div>
      <div>
        <div className={styles.GRP_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h3>GRP roofing systems</h3>
                <p>
                  GRP Roof systems are suited to all flat or low-pitched areas
                  and can be abutted and joined to all types of new or
                  traditional material. We have installed our system at hundreds
                  of sites and these are proved to be fault-free. All parts and
                  components are manufactured in our own workshops and
                  installation is undertaken by our own staff, not by
                  subcontractors.
                </p>
                <p>
                  The system includes expansion and contraction joints, edge
                  trims, flashings and fixing by screws – no nails are used,
                  which can damage the GRP membrane. The work involves neither
                  heat nor naked flames.
                </p>
                <p>
                  The whole installation results in a totally one-piece seamless
                  covering with permanent bonding to intrusions such as pipes,
                  vents, lanterns and the like, and to abutments – typically
                  parapet walls and pitched areas.
                </p>
              </div>
            </Grid>
            <Grid xs={0} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667326816/Site%20Images/GRP_Roofing_system_kidhlq.png"
                height={330}
                width={674}
                alt="GRP Roofing system Skyline Roofing, Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <div className={styles.three_card_container}>
        <Grid.Container justify="center" gap={2} className={styles.card_styles}>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Flat Roofs</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667329828/Site%20Images/lead_card_01_ewcwyu.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Flat Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Lead work is a specialist craft, so therefore quality
                    workmanship and customer satisfaction are very important to
                    us. Over the years, many substitutes have tried to replace
                    lead, but lead still gives better value for money than any
                    other roofing material.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Asphalt roofing</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667382790/Site%20Images/Asphalt_card_ji9wfp.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Asphalt roofing,  Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Asphalting is one of the recognised specialist trades in the
                    building industry and the type of asphalt primarily applied
                    to buildings is known as mastic asphalt. It is used to
                    waterproof roofs, basements, front entrance steps, rooftop
                    car parks, domestic and industrial floors and even
                    ornamental fish ponds.
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} md={4} justify="center">
            <Card>
              <h3>Felt roofing</h3>
              <Card.Image
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667383215/Site%20Images/Felt_Card_wkbtvf.jpg"
                objectFit="cover"
                width="100%"
                height={220}
                alt="Felt Roofing, Skyline Roofing, Roofing contractors, Cork, Ireland"
              />
              <Card.Body>
                <div className={styles.card_body}>
                  <Text weight="medium" css={{ color: "#484B5A" }}>
                    Built-up roofing is formed onsite from two or more layers of
                    felt. Built-up felt is an ideal choice for application where
                    a good long-lasting cost-effective solution is required. It
                    can be used for most flat roof applications including
                    garages, sheds and main flat roofs
                  </Text>
                </div>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
      <div className={styles.contact_container}>
        <CTAbanner />
      </div>
      <div className={styles.gallery_container}>
        <FLatProjects />
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
