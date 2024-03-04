import Link from "next/link";
import styles from "../../styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedValue = sessionStorage.getItem("menuOpen");
      return savedValue ? JSON.parse(savedValue) : false;
    }
    return false;
  });

  const [selectedMenuItem, setSelectedMenuItem] = useState("/");
  const router = useRouter();
  const currentRout = router.asPath;
  const [isComponentVisible, setComponentVisible] = useState(false);

  useEffect(() => {
    if (currentRout === "/about") {
      setSelectedMenuItem("/about");
    } else {
      setSelectedMenuItem("/");
    }
  }, [currentRout]);

  const toggleSubMenu = () => {
    setMenuOpen((prevState) => {
      const newState = !prevState;
      sessionStorage.setItem("menuOpen", JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    setComponentVisible(true);
  }, [isMenuOpen]);

  return (
    <div className={styles.menu__container}>
      {isComponentVisible && (
        <button
          className={isMenuOpen ? styles.menu__button_open : styles.menu__button}
          onClick={toggleSubMenu}
        >
          <span className={styles.menu__arrow}>&#62;</span>
        </button>
      )}
      {isComponentVisible && isMenuOpen && (
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
