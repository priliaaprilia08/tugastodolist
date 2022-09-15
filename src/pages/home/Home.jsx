import Header from "../component/Header";
import Main from "./Main";
import { listActivities } from "../data";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/StyleHome.module.css";


function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid row align-items-center">
        <div className="col-sm-6 col-lg-5 p-5">
          <Main listActivities={listActivities} />
        </div>
      </div>
    </>
  );
}

export default Home;
