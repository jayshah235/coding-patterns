import { useState } from "react";
import { UseFetch } from "../../services/fetchService";
import Cards from "../../components/cards";
import styles from "./styles.module.scss";

/*
Note:: I was trying to get data as per page
and pagesize but cannot find such parameters
in this api. So fetching the limit of 40 and
then i'm using slice method to get data per
page. If there would be option of page and
 pagesize in api i would send page as 1 and
 pagesize as 10 in payload and request data as 
 we click on pagination and would create custom component 
 for the same. 
*/

const ProductPage = () => {
  const { data, loading } = UseFetch("https://dummyjson.com/products?limit=40");
  const [page, setPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= data?.products?.length / 10 &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  return (
    <>
      {loading && <p>loading....</p>}
      <section className={styles.cardContainer}>
        {data?.products
          ?.slice(page * 9 - 9, page * 9)
          ?.map((items, index) => (
            <Cards
              key={index}
              image={items.thumbnail}
              brand={items.brand}
              description={items.description}
              price={items.price}
            />
          ))}
      </section>

      {data?.products?.length > 0 && (
        <ul className={styles.pagination}>
          {[...Array(Math.floor(data?.products?.length / 9))].map((_, i) => (
            <li key={i + 1} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductPage;
