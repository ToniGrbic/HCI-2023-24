"use client";
import styles from "@/styles/NotFound.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import notFoundImage from "../assets/404-image.png.png";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.notFound__overlay}>
      <div className={styles.notFound__content}>
        <div>
          <Image width={300} height={300} alt="404-image" src={notFoundImage} />
        </div>
        <p className={styles.notFound__text}>Oops, page not found!</p>
        <button
          className={styles.notFound__button}
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
