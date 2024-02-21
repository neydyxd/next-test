import Link from "next/link";
import styles from "../styles.module.css";

interface Props {
  serverInfo: string;
}

export default function Signin({ serverInfo }: Props) {
  return (
    <>
      <Link href="/" className={styles.about__link}>
        Главная
      </Link>
      <div className={styles.form__container}>
        <form className={styles.form}>
          <h2>Авторизация</h2>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Пароль" />
          <Link className={styles.form__button} href="/profile">
            Войти
          </Link>
        </form>
        <p>{serverInfo}</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const info = "Здесь могла быть подсказка для авторизации";

  return {
    props: {
      serverInfo: info,
    },
  };
}
