import "./commentComponent.css";
import UserIcon from "../../assets/userIcon.svg";

interface data {
  data: {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  };
}

const CommentComponent = ({ data }: data) => {
  return (
    <div className="commentsComponentContainer">
      <div className="ComponentDataPerson">
        <h6 className="commentsComponentEmail">
          <img src={UserIcon} height={20} />
          {data.email}
        </h6>
      </div>
      <h5 className="commentsComponentTitle">{data.name}</h5>
      <p className="commentsComponentBody">{data.body}</p>
    </div>
  );
};

export default CommentComponent;
