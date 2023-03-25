import "../../Pages/PubliPage/PubliPage.css";
import LazyPostComponent from "../lazyPostComponent/lazyPostComponent";
import search from "../../assets/Lupa.png";

const LazyLoadingPubliPage = () => {
  return (
    <main className="main">
      <header className="header">
        <div className="containerHeaderText">
          <ul className="containerTextSpace">
            <li>Blog</li>
            <li>Alkabot</li>
          </ul>
          <form action="" className="formHeader">
            <span className="Icon">
              <img src={search} height="18px" width={"18px"} />
            </span>
            <input
              type="text"
              placeholder="Search in the blog"
              className="inputHeader"
            />
          </form>
        </div>
      </header>
      <main className="mainContainer">
        <LazyPostComponent />
        <LazyPostComponent />
        <LazyPostComponent />
        <LazyPostComponent />
        <LazyPostComponent />
      </main>
    </main>
  );
};

export default LazyLoadingPubliPage;
