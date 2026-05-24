import Createcomment from "../Comment/Createcomment"
import "./Contact.css"
const Contact = () => {
    return (  <>
    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-12 col-md-6 ">
                <h4 className="mb-3">با ما در ارتباط باشید</h4>
               
                <p className="text-secondary">شما میتوانید با راه‌های ارتباطی زیر با ما‌ در‌ ارتباط باشید، همچنین می توانید با مراجعه به <b className="text-dark">شعب گالری روما</b> در سراسر کشور از محصولات ما دیدن فرمایید.</p>
             <hr />
                <ul className="listt">
                <h6 className="mb-3">دفتر مرکزی</h6>
           
                <li className="text-secondary mb-3">تماس از واتس اپ: 09765379654</li>
                <li className="text-secondary mb-3">ایمل: Romagold@gmail.com </li>
            </ul>
            </div>
        
            <div className="col-12 col-md-6">
                <Createcomment/>
            </div>
        </div>
    </div>
    </>);
}
 
export default Contact;