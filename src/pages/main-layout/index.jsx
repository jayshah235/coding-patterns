import { menuData } from "./data";
import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <aside className={styles.sideBarContainer}>
        <ul className={styles.menuList}>
          {menuData?.map((items, index) => (
            <li key={index}>
              <Link to={`${items.navigate}`}>{items?.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <article className={styles.outlet}>
      <Outlet />
      </article>
    </main>
  );
};

export default MainLayout;
