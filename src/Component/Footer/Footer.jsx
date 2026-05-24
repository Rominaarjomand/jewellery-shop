import { useDispatch, useSelector } from "react-redux";
import "./Footer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  setloadingfooter,
  setfooter,
  seterrorfooter,
} from "../../Redux/Footer/FooterAction";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Menu = () => {
  let { footer, loading, error } = useSelector((state) => state.footer);
  let dispatch = useDispatch();

  const fetchfooter = async () => {
    try {
      const res = await axios("http://localhost:3005/Footer");
      dispatch(setloadingfooter(false));
      dispatch(setfooter(res.data));
    } catch (error) {
      console.log(error.message);
      dispatch(seterrorfooter(error.message));
      dispatch(setloadingfooter(true));
    }
  };

  useEffect(() => {
    fetchfooter();
  }, []);

  return (
    <>
      <div className="text-center">
        {loading && <div className="spinner-border spinner-border-sm"></div>}
      </div>
      {error && <p className="tetx-danger text-center">{error}</p>}
      <div className="container-fluid bg-dark p-3 text-light footerstyle">
        <div className="row p-3">
          <div className="col-6 col-md-3">
            <h4>دسترسی سریع</h4>
            {footer?.map((elem) => {
              return (
               <div key={elem.id}>
                 <ul className="navbar-nav">
                  <a href={elem.srcp}>
                    <li className="nav-item mt-3">{elem.pages}</li>
                  </a>
                </ul>
               </div>
              );
            })}
          </div>
          <div className="col-6 col-md-3">
            <h4>پشتیبانی مشتریان</h4>
            {footer?.map((elem) => {
              return (
              <div key={elem.id}>
                  <ul className="navbar-nav">
                  <a href={elem.srcs}>
                    <li className="nav-item mt-3">{elem.supports}</li>
                  </a>
                </ul>
              </div>
              );
            })}
          </div>
          <div className="col-6 col-md-3">
            <h4>دسترسی سریع</h4>
            {footer?.map((elem) => {
              return (
                <div key={elem.id}>
                  <ul className="navbar-nav">
                  <a href={elem.srca}>
                    <li className="nav-item mt-3">{elem.accessibility}</li>
                  </a>
                </ul>
                </div>
              );
            })}
          </div>
          <div className="col-6 col-md-3 text-center socialicon mt-5 mt-md-1">
            <img
              src="src/Component/Menu/menu-image/logo.png"
              className="logofooterstyle"
              alt="logo"
            />
            <br />
            <span className="nav-item m-2">
              <FaTelegram />
            </span>
            <span className="nav-item m-2">
              <FaInstagram />
            </span>
            <span className="nav-item m-2">
              <FaWhatsapp />
            </span>
            <span className="nav-item m-2">
              <FaPinterest />
            </span>
          </div>
        </div>

        <div className="row p-3">
          <hr />
          <span>© 2025 تمامی حقوق متعلق به گالری روما می باشد </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
