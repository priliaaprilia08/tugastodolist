import "../../assets/css/bootstrap.min.css";
import styles from "../../assets/css/StyleHome.module.css";
import img from "../../assets/img/logo-ALTA.png";

function Header() {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-dark bg-success mb-3 ${styles.navbarEdit}`}>
        <div class="container-fluid justify-content-center">
          <div class="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="alterra">
                 <a href="index.html"><img class="logo-atas" src={img} /></a>
              </div>
          </div>
          <a class={`${styles.navEdit} navbar-brand`} success href="#">
            TODO APP
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
