import styles from "../../assets/css/StyleHome.module.css";
import done from "../../assets/img/done.png";
import listIcon from "../../assets/img/menuIcon.png";

function Main({ listActivities }) {
  const listItems = listActivities.map((activity) => {
    if (activity.complete === true) {
      return (
        <>
          <div className={styles.boxListDone}>
            <img src={done} alt="" srcset="" style={{ padding: "5px" }} />
            <div>
              <li>
                <s>{activity.title}</s>
              </li>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.boxList}>
            <img src={listIcon} alt="" srcset="" style={{ padding: "5px" }} />
            <div>
              <li>{activity.title}</li>
            </div>
          </div>
        </>
      );
    }
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default Main;
