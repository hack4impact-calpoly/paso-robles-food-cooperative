import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.parent}>
      <Image 
        src='' 
        alt='image' 
        className={styles['landing-image']}
      />
      <h2 className={styles.title}>
        What is Paso Food Co-op?
      </h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed vestibulum, velit vitae sagittis ullamcorper, dui metus tristique neque, id ultricies risus est vitae velit. 
        Integer euismod venenatis malesuada. 
      </p>
      <div className={styles['actions-container']}>
        <button>JOIN NOW</button>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
}
