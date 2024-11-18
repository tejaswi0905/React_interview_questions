/* eslint-disable react/prop-types */

const Pagination = ({ total, handlePageSelection, page }) => {
  console.log(page);
  return (
    <div className="pagination split-flex-row">
      {[
        ...Array.from({ length: Math.floor(total / 12) + 1 }, (_, i) => i + 1),
      ].map((i) => {
        return (
          <span
            key={i}
            className="pagination-page"
            style={{
              backgroundColor: page === i ? "pink" : "",
            }}
            onClick={() => {
              handlePageSelection(i);
            }}
          >
            {i}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
