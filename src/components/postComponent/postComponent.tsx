import { useNavigate } from "react-router-dom";
import commentIcon from "../../assets/Comentario.png";
import "./postComponent.css";

interface propsData {
  postTitle: String;
  postMadeBy: String;
  postContent: String;
  postCommentCount: number;
  postId: number | string;
}

const PostComponent = ({
  postTitle,
  postMadeBy,
  postContent,
  postCommentCount,
  postId,
}: propsData) => {
  const navigate = useNavigate();

  const goToPost = (postId: number | string) => {
    navigate(`/posts/${postId}`);
  };
  return (
    <div className="postComponent" onClick={() => goToPost(postId)}>
      <h6 className="postMadeBy">Made by: {postMadeBy}</h6>
      <h3 className="postTitle">{postTitle}</h3>
      <p className="postContent">{postContent}</p>
      <div className="commentSection">
        <div className="postCommentCounter">
          <span className="postCommentCounterNumber">{postCommentCount}</span>
        </div>
        <img src={commentIcon} alt="comment Icon" />
      </div>
    </div>
  );
};

export default PostComponent;
