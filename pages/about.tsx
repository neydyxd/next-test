import Navigation from "../components/Navigation/Navigation";
import styles from "../styles.module.css";

export default function About() {
  return (
    <div className={styles.main__container}>
      <Navigation />
      <div className={styles.about__container}>
        <h2>Страница About</h2>
        <p>
          Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempore vero pariatur rem harum sapiente saepe, animi hic impedit.
          Iusto, provident natus corrupti iure ipsa consequatur aliquam
          recusandae tempore cumque voluptatibus.
        </p>
      </div>
    </div>
  );
}
