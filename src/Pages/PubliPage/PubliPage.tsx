import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { publiesDataInterface, userName } from "../../types/Types";
import { getPublies } from "../../HttpRequests/getPublies";
import getComments from "../../HttpRequests/getComments";
import PostComponent from "../../components/postComponent/postComponent";
import Lupa from "../../assets/Lupa.png";
import "./PubliPage.css";

function App() {
  const [publiesData, setPubliesData] = useState<publiesDataInterface[]>();
  const [commentsCounter, setCommentsCounter] = useState<any>([]);
  const [search, setSearch] = useState("");

  const dataUrl = useLoaderData() as userName;

  const settingCommentsList = () => {
    if (publiesData != undefined) {
      for (let i = 1; i <= publiesData.length; i++) {
        getComments(i.toString()).then((value) =>
          setCommentsCounter((oldValue: any) => [...oldValue, value.data])
        );
      }
    }
  };

  useEffect(() => {
    getPublies().then((response) => setPubliesData(response.data));
  }, []);

  useEffect(() => {
    settingCommentsList();
  }, [publiesData]);

  return (
    <main className="main">
      <header className="header">
        <div className="containerHeaderText">
          <ul className="containerTextSpace">
            <li>Blog</li>
            <li>Alkabot</li>
          </ul>
          <form className="formHeader" action="">
            <span className="Icon">
              <img src={Lupa} height="18px" width={"18px"} />
            </span>
            <input
              type="text"
              placeholder="Search in the blog"
              className="inputHeader"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </header>
      <main className="mainContainer">
        {publiesData &&
          publiesData
            .filter((item: any) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((element: publiesDataInterface) => {
              return (
                <PostComponent
                  postTitle={element.title}
                  postMadeBy={dataUrl.data[element.userId - 1].name}
                  postContent={element.body}
                  postCommentCount={commentsCounter[element.id]?.length}
                  key={element.id}
                  postId={element.id}
                />
              );
            })}
      </main>
    </main>
  );
}

export default App;
