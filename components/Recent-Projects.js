import styles from "./recentprojects.module.css";
import PhotoAlbum from "react-photo-album";
import { Grid, Image } from "@nextui-org/react";
const photos = [
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666812770/Site%20Images/recent_img_01_hlnws3.jpg",
    width: 748,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666812811/Site%20Images/recent_img_02_qiuiwu.jpg",
    width: 527,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666813220/Site%20Images/recent_img_03_wikkxw.jpg",
    width: 530,
    height: 325,
  },
  {
    src: "https://res.cloudinary.com/dhdrlpifx/image/upload/v1666813228/Site%20Images/recent_img_04_ngwdam.jpg",
    width: 748,
    height: 325,
  },
];
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
export default function RecentProjects() {
  return (
    <div>
      <div className={styles.title}>
        <h3>Our Latest Projects</h3>
      </div>
      <div className={styles.photo_container}>
        <PhotoAlbum layout="masonry" columns={2} photos={photos} />
      </div>
    </div>
  );
}
