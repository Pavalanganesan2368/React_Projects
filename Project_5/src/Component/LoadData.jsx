import React, { useEffect, useState } from "react";

const LoadData = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20 }`,
      );
      const data = await response.json();
      setItems((prevProducts) => [...prevProducts,  ...data.products]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <>
      <main className="grid-container">
        {items.map((product) => (
          <section className="grid-items" key={product.id}>
            <img src={`${product.thumbnail}`} alt={product.category} />
            <h3>{product.brand}</h3>
            <p>{product.price}</p>
          </section>
        ))}
      </main>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Add More Data</button>
      </div>
    </>
  );
};

export default LoadData;
