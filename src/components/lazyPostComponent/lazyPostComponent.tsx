import "./lazyPostComponent.css";

const LazyPostComponent = () => {
  return (
    <div className="LazyPostComponent">
      <h6 className="LazyPostMadeBy"></h6>
      <h3 className="LazyPostTitle"></h3>
      <p className="LazyPostContent"></p>
      <div className="LazyCommentSection">
        <div className="LazyPostCommentCounter">
          <span className="LazyPostCommentCounterNumber"></span>
        </div>
      </div>
    </div>
  );
};

export default LazyPostComponent;
