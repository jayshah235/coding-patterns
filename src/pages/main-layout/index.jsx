import { menuData } from "./data";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const MainLayout = () => {
  const location = useLocation()?.pathname;
  return (
    <main className={styles.container}>
      <aside className={styles.sideBarContainer}>
        <div className={styles.menuList}>
          {menuData?.map((items, index) => (
            <Link
              to={`${items.navigate}`}
              className={[
                styles.tabs,
                location === `/${items.navigate}` && styles.active,
              ]?.join(" ")}
              key={index}
            >
              {items?.title}
            </Link>
          ))}
        </div>
      </aside>
      <article className={styles.outlet}>
        <Outlet />
      </article>
    </main>
  );
};

export default MainLayout;
