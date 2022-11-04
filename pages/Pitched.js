import { Grid, Image } from "@nextui-org/react";
import styles from "@/styles/Pitched.module.css";
import PitchedHeader from "@/components/Pitched-Roof/Pitched-Header";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import PitchedProjects from "@/components/Pitched-Roof/Pitched-Projects";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";
export default function PitchedRoof() {
  return (
    <div>
      <div>
        <PitchedHeader />
      </div>
      <div>
        <USPBanner />
      </div>
      <div>
        <div className={styles.pitched_roof_container}>
          <Grid.Container>
            <Grid xs={12} sm={6} md={6}>
              <div>
                <h3>Pitched Roof</h3>
                <p>
                  When householders want a more traditional type of roof, they
                  will often choose pitched tile roofing. A pitched roof has
                  incredible longevity and can remain intact for more than a
                  century after its installation. Like any other type of roof, a
                  pitched roof will also protect the property’s occupants from
                  adverse weather conditions.
                </p>
                <p>
                  You might fear that your roof is damaged, perhaps because the
                  ceiling appears to leak after a spell of rain. However, damage
                  can still sometimes occur. If you fear your roof is damaged
                  particularly if your ceiling starts to leak after rain it’s
                  time to call in the experts at Skyline Roofing.
                </p>
              </div>
            </Grid>
            <Grid xs={1} sm={1} md={1}></Grid>
            <Grid xs={12} sm={5} md={5}>
              <Image
                showSkeleton
                src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667305575/Site%20Images/Pitched_roof_gbhen4.png"
                height={450}
                width={530}
                alt="Skyline Roofing, Pitched Roofing, Cork, Ireland"
              />
            </Grid>
          </Grid.Container>
        </div>
      </div>
      <div className={styles.container}>
        <h4>
          We will carry out a free inspection of your pitched roof, assess any
          damage and let you know whether a cost-effective repair will do the
          trick, or whether you’ll need a replacement roof. Call us today for a
          free quote
        </h4>
      </div>
      <div>
        <CTAbanner />
      </div>
      <div>
        <PitchedProjects />
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
