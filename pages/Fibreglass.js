import styles from "@/styles/fibreglass.module.css";
import { Grid, Image, Spacer } from "@nextui-org/react";
import Hero from "@/components/Fibreglass/Hero";
import USPBanner from "@/components/CTA/USP-Banner";
import CTAbanner from "@/components/CTA/Contact-banner";
import FibreglassProjects from "@/components/Fibreglass/Fibreglass-projects";
import RoofNav from "@/components/Roofs-nav";
import TestimonialCard from "@/components/Testimonial-Card";
export default function FibreglassPage() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <USPBanner />
      </div>
      <div className={styles.fibreglass_container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6}>
            <div>
              <h4>What are the Benefits of Glass Fibre Roofing?</h4>
              <p>GRP can be used to create any shape of roof</p>
              <p>
                Glass fibre roofing can be applied without the need for heat
              </p>
              <p>
                GRP is a cost effective roofing solution because it is easy to
                install and requires less labour than other roofing systems
              </p>
              <p>
                Glass fibre flat roofs are incredibly durable. When laid
                correctly they can be walked upon
              </p>
            </div>
          </Grid>
          <Grid xs={0} sm={1} md={1}></Grid>
          <Grid xs={12} sm={5} md={5}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dhdrlpifx/image/upload/v1667490204/Site%20Images/Fibre_img_qqgfmb.png"
              height={450}
              width={530}
              alt="Fibreglasss Roofing, Skyline Roofing, Cork, Ireland"
            />
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <CTAbanner />
      </div>
      <div>
        <FibreglassProjects />
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
