import Link from "next/link";
import styles from "../../styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("/");
  const router = useRouter();
  const currentRout = router.asPath;

  useEffect(() => {
    const storedValue = sessionStorage.getItem("menuOpen");
    if (storedValue) {
      setMenuOpen(JSON.parse(storedValue));
    }

    if (currentRout === "/about") {
      setSelectedMenuItem("/about");
    } else {
      setSelectedMenuItem("/");
    }
  }, [currentRout]);

  const toggleSubMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    sessionStorage.setItem("menuOpen", JSON.stringify(isMenuOpen));
  }, [isMenuOpen]);

  return (
    <div className={styles.menu__container}>
      <button
        className={!isMenuOpen ? styles.menu__button : styles.menu__button_open}
        onClick={toggleSubMenu}
      >
        <span className={styles.menu__arrow}>&#62;</span>
      </button>
      {isMenuOpen && (
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link
              className={selectedMenuItem === "/" ? styles.menu__item_active : styles.menu__item}
              href="/"
            >
              Главная
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              className={selectedMenuItem === "/about" ? styles.menu__item_active : styles.menu__item}
              href="/about"
            >
              О нас
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
