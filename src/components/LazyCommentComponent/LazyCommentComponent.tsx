import "./lazyCommentComponent.css";
import UserIcon from "../../assets/userIcon.svg";

const LazyCommentComponent = () => {
  return (
    <div className="LazyCommentsComponentContainer">
      <div className="ComponentDataPerson">
        <h6 className="LazyCommentsComponentEmail">
          <img src={UserIcon} height={20} />
        </h6>
      </div>
      <h5 className="LazyCommentsComponentTitle"></h5>
      <p className="LazyCommentsComponentBody"></p>
    </div>
  );
};

export default LazyCommentComponent;
