import { Outlet, Link } from "react-router-dom";
// import "../../Models/
import "../CSS/Home.css"

const Home = () => {
  return (
    <> 
    {/*<></> to avoid the Unnecessary div element */}
      <nav>
        <ul>
          <li className="schedule-link">
            <Link to="/" className=" Active schedule text-decoration-none">SCHEDULE</Link>
          </li>
          <li className="category-link">
            <Link to="/category" className=" Active categogy text-decoration-none">CATEGORY</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Home;