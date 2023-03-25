import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import getUsers from "../../HttpRequests/getUsers";
import getComments from "../../HttpRequests/getComments";
import goBack from "../../assets/chevron_left.svg";
import "./Post.css";
import CommentComponent from "../../components/commentComponent/commentComponent";
import {
  usersData,
  postData,
  commentsData,
  urlParams,
} from "../../types/Types";

const Post = () => {
  const [usersData, setUsersData] = useState<usersData[]>();
  const [commentsData, setCommentsData] = useState<commentsData[]>();
  const urlParams = useParams<urlParams>();
  const navigator = useNavigate();
  const urlData = useLoaderData() as { data: postData };

  const goToHomePG = () => {
    navigator("/");
  };

  useEffect(() => {
    getUsers().then((response) => setUsersData(response.data));
    getComments(urlParams.id).then((response) =>
      setCommentsData(response.data)
    );
  }, []);

  return (
    <main className="main">
      <article className="containerPosts">
        <div className="mainContainerPost" onClick={() => goToHomePG()}>
          <div className="comeBack">
            <img src={goBack} alt="go back icon" height={30} />
          </div>
          <h4 className="madePost">
            Made by :{usersData && usersData[urlData.data.userId - 1].name}
          </h4>

          <h1 className="titlePost">{urlData.data.title}</h1>

          <p className="postContent">{urlData.data.body}</p>
        </div>
      </article>
      <div className="commentsParentContainer">
        <div className="commentsContainer">
          <span className="commentsIndexName">Comments</span>
          {commentsData?.map((element: commentsData) => {
            return <CommentComponent data={element} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Post;
