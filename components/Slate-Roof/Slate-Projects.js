import PhotoAlbum from "react-photo-album";
import styles from "./slateprojects.module.css";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667400764/Site%20Images/Slate_gal_01_iaaetq.jpg",
    width: 750,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667400855/Site%20Images/Slate_gal_02_u9ykz5.jpg",
    width: 530,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667400911/Site%20Images/Slate_gal_03_fycbdt.jpg",
    width: 530,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667400971/Site%20Images/Slate_gal_04_nvbtrl.jpg",
    width: 750,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667401587/Site%20Images/Slate_gal_05_baujbn.jpg",
    width: 639,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667401632/Site%20Images/Slate_gal_06_bq1b7a.jpg",
    width: 637,
    height: 325,
  },
];
export default function SlateProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Slate Roof Projects</h3>
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
