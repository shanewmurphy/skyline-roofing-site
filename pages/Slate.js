import styles from "@/styles/slate.module.css";
import { Grid, Image } from "@nextui-org/react";
import SlateHero from "@/components/Slate-Roof/Slate-Hero";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import SlateProjects from "@/components/Slate-Roof/Slate-Projects";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";

export default function SlatePage() {
  return (
    <div>
      <div>
        <SlateHero />
      </div>
      <div>
        <USPBanner />
      </div>
      <div className={styles.slate_container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h4>Slate Roofs</h4>
              <p>
                Are you looking to refurbish and renovate an existing slate
                roof, have repairs undertaken on an emergency basis to slate
                roofing from which several tiles may have gone missing in a
                storm, or request the installation of the complete new-build
                slate roof? Whatever your circumstances and requirements, here
                at Skyline Roofing & Building, we can cater to them, working
                closely with you every step of the way.
              </p>
              <p>
                Turn to us for a new, repaired or maintained slate roof that
                will enhance the presentation of your home, withstand the worst
                to which the environment can expose it, and even make your
                property a more sellable proposition. It’s all possible with the
                knowhow of Skyline Roofing & Building.
              </p>
            </div>
          </Grid>
          <Grid xs={0} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667398964/Site%20Images/Slate_roofing_B_ddrox9.png"
              height={460}
              width={530}
              alt="Slate Roofing, Skyline Roofing, roofing contractors Cork, Ireland"
            />
          </Grid>
        </Grid.Container>
      </div>
      <div className={styles.Contact_banner}>
        <CTAbanner />
      </div>
      <div>
        <SlateProjects />
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
