import Collections from "../Collections/Collections";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import Allproducts from "../Allproducts/Allproducts"
import "./Home.css";
import { GiCycle } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFactCheck } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      <Allproducts/>
      <Collections />
      <div className="container-fluid graybox text-center p-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <IoLocationOutline className="icons" />
            <h4>ارسال رایگان</h4>
          </div>
          <div className="col-12 col-md-4">
            <GiCycle className="icons" />
            <h4>تعویض کالا تا 7 روز</h4>
          </div>
          <div className="col-12 col-md-4">
            <MdOutlineFactCheck className="icons" />
            <h4>گارانتی محصولات</h4>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center ">
            <img
              className="w-100"
              src="/src/Component/Home/Homeimage/5049.jpg"
              alt="h"
            />
          </div>
          <div className="col-12 col-md-6 align-content-center">
            <h5 className="mt-4">گالری طلا روما</h5>
            <p className="text-secondary justify-content-between">
              گالری طلا روما در سال ۱۳۹۳ با تمرکز بر طراحی‌های اختصاصی و در نظر
              گرفتن سلیقه‌های مینیمال مخاطبان، تاسیس شد. طراحی وساخت محصولات
              دست‌ساز توسط استادکارانی برجسته و ارائه کالکشن‌های اختصاصی
              پرطرفدار، منجر به رشد پیوسته روما و گشایش بیش از ۲۰ نمایندگی در
              سراسر کشور شد تا امروز همراه با شما به درخشیدن ادامه دهیم.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5  graybox pe-5">
        <div className="row">
          <div className="col-12 col-md-6 align-content-center p-5">
            <h3 className="mt-4">
              از مزایایی همچون تخفیف <br />
              روز تولد و مناسبت‌های گوناگون، بهره
              مند شوید
            </h3>
            <p className="text-secondary justify-content-between textstyle ">
              تـداوم لـذت خــرید بـرای هــمراهـان همیشـگی روما از اصلی تـرین
              اهداف بـاشگاه مـشتریـان روما است. مـشتریـان مــیتواننــد بـا
              عــضویت ، خـرید و دعــوت از دوســتان، امــتیاز جـــمع کنند و از
              پیشــنهادات و جـوایز ویـــژه ما بـهره مند شـــوند. در این باشـگاه
              میتوانید با انجـــام هر خـرید، امـتیـاز خود را افزایش دهید و
              باشـگاه مـشتریـان روما شامل پنج سـطح یک سـتاره تا پنج سـتاره است
            </p>
            <button className="btn btn-success mt-3">باشگاه مشتریان روما</button>
          </div>

          <div className="col-12 col-md-6 text-center p-5">
            <img
              className="w-100"
              src="/src/Component/Home/Homeimage/roma.jpg"
              alt="romajwellary"
            />
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
