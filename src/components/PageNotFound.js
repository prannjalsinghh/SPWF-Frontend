
import Header from "./header";
import error404 from "../images/404error.jpg";
import styles from './PageNotFOund.module.css'
function PageNotFound() {
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <div className={styles.main}>
        <img src={error404} />
        <div>
          <h1>Page Not Found</h1>
          <p>Sorry, we can't find the page you are looking for...</p>
        </div>
      </div>
    </div>
  );
}
export default PageNotFound;
