const Pagination = ({
  currentPage,
  prevPage,
  noOfPage,
  currPage,
  nextPage,
}) => {
  return (
    <div className="buttons">
      <button className="btn" disabled={currentPage === 0} onClick={prevPage}>
        ◀
      </button>
      {[
        ...Array(noOfPage)
          .keys()
          .map((n) => (
            <button
              className={n === currentPage ? "active" : "btn"}
              key={n}
              onClick={() => currPage(n)}
            >
              {n + 1}
            </button>
          )),
      ]}
      <button
        className="btn"
        disabled={currentPage == noOfPage - 1}
        onClick={nextPage}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
