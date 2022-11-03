import styles from "./fibreglass-projects.module.css";
import PhotoAlbum from "react-photo-album";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667496815/Site%20Images/Fibre_04_fknzlg.jpg",
    width: 640,
    height: 450,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667496652/Site%20Images/Fibre_01_oorqao.jpg",
    width: 640,
    height: 450,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667496703/Site%20Images/Fibre_02_mvovcg.jpg",
    width: 640,
    height: 450,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1667496770/Site%20Images/Fibre_03_zl6ewg.jpg",
    width: 640,
    height: 450,
  },
];
export default function FibreglassProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Conservatory Roof Projects</h3>
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
