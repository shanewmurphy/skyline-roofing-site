import PhotoAlbum from "react-photo-album";
import styles from "./flatprojects.module.css";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386283/Site%20Images/Flat_img_01_adzmkv.jpg",
    width: 748,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386325/Site%20Images/Flat_img_02_fjok2y.jpg",
    width: 527,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386389/Site%20Images/Flat_img_03_x9qrrs.jpg",
    width: 640,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386502/Site%20Images/Flat_img_04_otmy5v.jpg",
    width: 640,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386539/Site%20Images/Flat_img_05_ztrunv.jpg",
    width: 640,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667386572/Site%20Images/Flat_img_06_m1hkd1.jpg",
    width: 640,
    height: 325,
  },
];
export default function FLatProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Flat Roof Projects</h3>
      </div>
      <div className={styles.photo_container}>
        <PhotoAlbum layout="masonry" columns={2} photos={photos} />
      </div>
      <div className={styles.mobile_photo_container}>
        <PhotoAlbum layout="masonry" columns={1} photos={photos} />
      </div>
    </div>
  );
}
