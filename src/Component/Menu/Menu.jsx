import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import axios from "axios";
import { seterror, setloading, setmenu } from "../../Redux/Menu/MenuAction";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router";

const Menu = () => {

  let { menus, loading, error } = useSelector((state) => state.menu);
  let dispatch = useDispatch();
  let [gold18, setgold] = useState([]);

  const fetchmenu = async () => {
    try {
      const res = await axios("http://localhost:3005/Menu");
      dispatch(setloading(false));
      dispatch(setmenu(res.data));
    } catch (error) {
      console.log(error.message);
      dispatch(seterror(error.message));
      dispatch(setloading(true));
    }
  };

  const fetchgold = async () => {
    const golddata = await fetch(
      "http://brsapi.ir/FreeTsetmcBourseApi/Api_Free_Gold_Currency.json"
    );
    const res = await golddata.json();
    setgold(res);
  };

  useEffect(() => {
    fetchmenu();
    fetchgold();
  }, []);

  return (
    <>
      <div className="text-center ">
        {loading && <div className="spinner-border spinner-border-sm"></div>}
      </div>
      {error && <p className="tetx-danger text-center">{error}</p>}

      <div className="container-fluid menu-bg">
        <div className="row">
          <p className="mt-1 goldstyle">
            طلای 18 عیار:{" "}
            {gold18.gold ? (gold18?.gold[2]?.price) : (
              <span className="spinner-border spinner-border-sm"></span>
            )}{" "}
            تومان
          </p>
        </div>
      </div>

      <div className="container-fluid menu-bg menuposition">
        <div className="row menuposition">
          <div className="col-4 col-md-5 p-2  ">
            <nav className="navbar navbar-expand-sm">
              <div className="text-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <ul className="navbar-nav me-auto liststylemenu px-2 ">
                    {menus?.map((elem) => {
                      return (
                        <li className="nav-item" key={elem.id}>
                          <a className="nav-link" href={elem.href}>
                            {elem.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-1 col-md-2 p-2  text-center">
            <img
              className="navbar-brand logostyle "
              src="/src/Component/Menu/menu-image/logo.png"
              alt="logo"
            />
          </div>
          <div className="col-7 col-md-5  text-start iconsstyle p-0 px-md-2 mt-3">
            <Link to={"/ShopingCard"}>
              {" "}
              <span> 
                {" "}
                {/* <p className="numberstyle" id="cardicon"></p> */}
                <HiOutlineShoppingBag />
              </span>
            </Link>

            {" "}

            <Link to={"/Createuser"}>
              {" "}
              <span> 
              {" "}
                <LuUserRound />
              </span>
            </Link>

            <span>
              <FaRegHeart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
