import styles from "./conservatory-projects.module.css";
import PhotoAlbum from "react-photo-album";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471158/Site%20Images/Conser_01_m9cgcg.jpg",
    width: 420,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471410/Site%20Images/Conser_02_atvpx2.jpg",
    width: 420,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471400/Site%20Images/Conser_03_lc9rvr.jpg",
    width: 420,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471498/Site%20Images/Conser_04_tdkzas.jpg",
    width: 420,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471542/Site%20Images/Conser_05_xb6may.jpg",
    width: 420,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667471591/Site%20Images/Conser_06_ai626n.jpg",
    width: 420,
    height: 325,
  },
];
export default function ConservatoryProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Conservatory Roof Projects</h3>
      </div>
      <div className={styles.photo_container}>
        <PhotoAlbum layout="masonry" columns={3} photos={photos} />
      </div>
      <div className={styles.mobile_photo_container}>
        <PhotoAlbum layout="masonry" columns={1} photos={photos} />
      </div>
    </div>
  );
}
