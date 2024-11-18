import "./App.css";
import { useEffect, useState } from "react";
import Job from "./components/job";

const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
const JOBS_PER_LOAD = 6;

function App() {
  const [itemIds, setItemIds] = useState([]);
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchItemIds = async () => {
    const itemIdsResponse = await fetch(`${API_ENDPOINT}/jobstories.json`);
    const itemIdsList = await itemIdsResponse.json();
    setItemIds(itemIdsList);
  };

  const fetchItems = async () => {
    setIsFetching(true);

    const startIdx = currentPage * JOBS_PER_LOAD;
    const endIdx = currentPage * JOBS_PER_LOAD + JOBS_PER_LOAD;

    const itemIdsPerPage = itemIds.slice(startIdx, endIdx);

    const itemsPerPage = await Promise.all(
      itemIdsPerPage.map(async (itemId) => {
        const response = await fetch(`${API_ENDPOINT}/item/${itemId}.json`);
        return response.json();
      })
    );

    setItems((prevItems) => {
      const newItems = [...prevItems, ...itemsPerPage];
      return newItems;
    });

    setIsFetching(false);
  };

  const handleLoadMore = () => {
    setCurrentPage((cur) => {
      return cur + 1;
    });
  };

  useEffect(() => {
    fetchItemIds();
  }, []);

  useEffect(() => {
    if (itemIds.length > 0) {
      fetchItems();
    }
  }, [currentPage, itemIds]);

  return (
    <div className="app">
      <h1 className="title">Hacker News Jobs Board!</h1>
      {itemIds.length < 1 || items.length < 1 ? (
        <p className="job-loading">Loading...</p>
      ) : (
        <div className="job-box">
          {items.map((item) => {
            return <Job key={item.id} title={item.title} />;
          })}
        </div>
      )}
      <button
        className="load-more"
        onClick={handleLoadMore}
        disabled={isFetching}
      >
        {isFetching ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}

export default App;
