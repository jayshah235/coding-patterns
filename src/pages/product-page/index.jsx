import { useState } from "react";
import { UseFetch } from "../../services/fetchService";
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
  console.log(data, "data");

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
          ?.slice(page * 10 - 10, page * 10)
          ?.map((items, index) => (
            <div key={index} className={styles.cards}>
              <h3>{items.title}</h3>
              <h3>{items?.brand}</h3>
              <h3>{items?.category}</h3>
              <figure>
                <img src={items?.thumbnail} alt={items.title} />
              </figure>
              <p>{items?.description}</p>
              <p>price: {items.price}</p>
              <p>Stcok: {items.stock}</p>
              <p>Discount: {items.discountPercentage}%</p>
            </div>
          ))}
      </section>

      {data?.products?.length > 0 && (
        <ul className={styles.pagination}>
          {[...Array(Math.floor(data?.products?.length / 10))].map((_, i) => (
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
