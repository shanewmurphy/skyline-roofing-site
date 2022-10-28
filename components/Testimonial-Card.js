import Image from "next/image";
import styles from "./testimonialcard.module.css";
import Carousel from "react-grid-carousel";
const testimonals = [
  {
    id: "1",
    Name: "Yvonne Thompson",
    Title: "Skyline roofing & building carried out…",
    Body: "Skyline roofing & building carried out a major renovation contract for us including all new pavers in our backyard and along with a complete new roof I have to say i from start to finish communication was excellent. no increases in price everything stayed the same. quality of the work is absolutely fantastic highly recommend using Skyline thanks guys thanks Michael.",
    Date: "27 September 2022",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
  {
    id: "2",
    Name: "Barry H",
    Title: "Excellent Company, Reliable and Communicative",
    Body: "Michael was great, communication and response time really good. A lot of work was required on our large bungalow roof after significant storm damage, and the lads did a super job. I was very cautious when researching a reliable company, and contacted a couple of their previous clients, who confirmed their satisfaction with Skyline Roofing. So that gave me great comfort. Thank you, Michael and the lads for a job well done",
    Date: "05 April 2022",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
  {
    id: "3",
    Name: "Leonard Schmidt",
    Title: "I would like to thank Skyline Roofing…",
    Body: "I would like to thank Skyline Roofing for the excellent work they recently carried out on the replacement of gutters and fascia to my house. All the works were of the highest standard in a really quick turnaround. Skyline Roofing were extremely professional in any dealings I had with them and I would have no hesitation in recommending Anthony& team to anyone or for any further work.",
    Date: "05 April 2022",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
  {
    id: "4",
    Name: "Tony Harolds",
    Title: "After getting a few quotes on our new…",
    Body: "After getting a few quotes on our new roof we decided to go ahead with Skyline Roofing a Building. A competitive quotation and I must say the clean up was excellent when the work was finished great communication from start to finish I would highly recommend Skyline Roofing a Building. Many thanks to Michael and the team",
    Date: " 30 January 2022",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
  {
    id: "5",
    Name: "Noel Kinsella",
    Title: "Having spoken with 6 different Roof contractors",
    Body: "Having spoken with 6 Roof Installation/repair Companies without Success. It was clear from the outset that Skyline were the Company we would be using to replace two roofs. Their work and professionalism was Simply Outstanding! The results have very much enhanced the appearance of our property and certainly added substantially to its value. Thank You Michael, Derek Joe,Sean and Joe it was a Great Pleasure!",
    Date: "27 June 2021",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
  {
    id: "6",
    Name: "Craig Sullivan",
    Title: "Workman came within an hour to assess…",
    Body: "Workman came within an hour to assess the problem and the job was done that afternoon. He is very reliable and efficient and has done a great job repairing someone else’s very poor work. His service is highly recommended",
    Date: "08 June 2021",
    url: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666950728/Site%20Images/trustpilot_logo_zqrp4a.svg",
  },
];
[
  {
    breakpoint: 880,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 1000,
  },
];
export default function TestimonialCard() {
  return (
    <div>
      <div className={styles.title}>
        <h3>What they’re talking about our company</h3>
      </div>
      <div>
        <div className={styles.testimonials_container}>
          <Carousel cols={2} rows={1} gap={20} showDots loop>
            {testimonals.map((testimonals) => {
              return (
                <Carousel.Item key={testimonals.id}>
                  <div className={styles.card_container}>
                    <div className={styles.testimonal_content}>
                      <div>
                        <h4>{testimonals.Name}</h4>
                        <h5>{testimonals.Title}</h5>
                      </div>
                      <div>
                        <p>{testimonals.Body}</p>
                      </div>
                      <div>
                        <h6>{testimonals.Date}</h6>
                      </div>
                      <div className={styles.trustpilot_logo_container}>
                        <Image src={testimonals.url} width={114} height={28} />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
