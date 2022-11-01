import PhotoAlbum from "react-photo-album";
import styles from "./projects.module.css";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667311059/Site%20Images/Pitched_img_01_dy8l0e.jpg",
    width: 723,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667311138/Site%20Images/Pitched_img_02_upva0l.jpg",
    width: 527,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667312081/Site%20Images/Piched_img_02_quiw5u.jpg",
    width: 996,
    height: 659,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667310689/Site%20Images/Tiled2-Copy-300x225-1_yqzf4p.jpg",
    width: 300,
    height: 225,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667312394/Site%20Images/Pitched_img_03_aghlki.jpg",
    width: 996,
    height: 664,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667312617/Site%20Images/Pitched_img_04_p6hlge.jpg",
    width: 996,
    height: 664,
  },
];
export default function PitchedProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Pitched Roof Projects</h3>
      </div>
      <div className={styles.photo_container}>
        <PhotoAlbum layout="masonry" columns={2} photos={photos} />
      </div>
    </div>
  );
}
