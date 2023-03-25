import goBack from "../../assets/chevron_left.svg";
import LazyCommentComponent from "../LazyCommentComponent/LazyCommentComponent";
import "./LazyPostsPage.css";

const LazyPostsPage = () => {
  return (
    <main className="main">
      <article className="LazyContainerPosts">
        <div className="LazyMainContainerPost">
          <div className="comeBack">
            <img src={goBack} alt="go back icon" height={30} />
          </div>
          <h4 className="LazyMadePost"></h4>

          <h1 className="LazyTitlePost"></h1>

          <p className="LazyPostsContent"></p>
        </div>
      </article>
      <div className="LazyCommentsParentContainer">
        <div className="LazyCommentsContainer">
          <span className="LazyCommentsIndexName">Comments</span>
          <LazyCommentComponent />
          <LazyCommentComponent />
          <LazyCommentComponent />
        </div>
      </div>
    </main>
  );
};

export default LazyPostsPage;
