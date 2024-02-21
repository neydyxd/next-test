import Link from "next/link";
import styles from "../styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  serverInfo: string;
}

export default function Signin({ serverInfo }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        router.push('/profile')
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Link href="/" className={styles.about__link}>
        Главная
      </Link>
      <div className={styles.form__container}>
        <form onSubmit={handleLogin} className={styles.form}>
          <h2>Авторизация</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className={styles.form__button} type="submit">
            Войти
          </button>
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
