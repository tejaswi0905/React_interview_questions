/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Items from "./Items";
import Pagination from "./Pagination";

const API_LINK = `https://dummyjson.com/products?limit=100`;

const Pages = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const getItems = async () => {
    const response = await fetch(API_LINK);
    const data = await response.json();
    if (data) {
      setItems(data.products);
    }
  };

  const handlePageSelection = (i) => {
    setPage(i);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="pages flow-content">
      <div className="split-flex-row">
        <Items items={items} page={page} />
      </div>
      <div className="split-flex-row">
        <Pagination
          total={items?.length}
          handlePageSelection={handlePageSelection}
          page={page}
        />
      </div>
    </div>
  );
};

export default Pages;
