import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../../hooks/infiniteScrollHook";
import Cards from "../../components/cards";
import styles from './styles.module.scss';

/*
Note:: if we use react query library we get a inbuild 
method as useInfiniteQuery which will act as same
to show how under the hood it works i have created
this custom logic.
*/

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchProducts = async (skip = 0, limit = 10) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const response = await res?.json();
    if (response.total <= skip + limit) setHasNextPage(false);
    setLoading(false);
    return response?.products;
  };

  useEffect(() => {
    fetchProducts().then(setData);
  }, [hasNextPage]);

  const lastProduct = useIntersectionObserver(() => {
    fetchProducts(data?.length).then((res) =>
      setData((respoonse) => [...respoonse, ...res])
    );
  });

  return (
    <div className={styles.cardsContainer}>
      {data?.map((items, index, products) => (
        <Cards
          ref={products.length - 1 === index ? lastProduct : null}
          key={index}
          image={items.thumbnail}
          brand={items.brand}
          description={items.description}
          price={items.price}
        />
      ))}
      {loading && "loading....."}
    </div>
  );
};

export default InfiniteScroll;
