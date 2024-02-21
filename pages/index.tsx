import Link from "next/link";
import styles from "../styles.module.css";

interface IData {
  title: string;
  text: string;
}

interface Props {
  serverData: IData;
  serverMap: string[];
}

export default function Home({ serverData, serverMap }: Props) {
  return (
    <div className={styles.about__container}>
      <nav>
        <Link className={styles.about__link} href="/sign-in">
          Войти
        </Link>
      </nav>
      <h1>{serverData.title}</h1>
      <p>{serverData.text}</p>
      <h2>Список</h2>
      <ul>
        {serverMap.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const data = {
    title: "Главная публичная страница",
    text: "Наполнение странцы",
  };

  const map = ["Элемент 1", "Элемент 2", "Элемент 3"];

  return {
    props: {
      serverData: data,
      serverMap: map,
    },
  };
}
