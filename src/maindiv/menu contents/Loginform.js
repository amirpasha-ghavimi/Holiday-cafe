import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Username } from "../../App";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cafelogo from '../images/holiday-cafe.svg'
import { faPhone } from "@fortawesome/free-solid-svg-icons";


const Loginform = () => {
    const formitem = yup.object().shape({
        name : yup.string().required("نام کوچک الزامیست"),
        lastname : yup.string().required("نام بزرگ الزامیست"),
        email : yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامیست"),
        password : yup.string().min(4, "رمز عبور باید حداقل 4 کاراکتر باشد").max(15, "رمز عبور باید حداکثر 15 کاراکتر باشد").matches(/[a-z]+/, "باید از حروف کوچک هم استفاده کنید").matches(/[A-Z]+/, "باید از حروف بزرگ هم استفاده کنید").matches(/\d+/, "باید از اعداد هم استفاده کنید").required("رمز عبور اجباریست"),
        confirmpassword : yup.string().oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد").required("تایید رمزعبور الزامیست")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver : yupResolver(formitem)});
    
    const {setLoginbutton} = useContext(Username)
    const navigate2 = useNavigate()

    const submitform = (data) => {
        navigate2 ("/")
        setLoginbutton(<div className="user"><FontAwesomeIcon icon={faUser} />{data.name}</div>)
    }

    return (
        <div className="form">
            {/* <img className="cafelogo" src={cafelogo} width={150} height={150}></img> */}
            
            <form onSubmit={handleSubmit(submitform)}>
                <h1>Holiday cafe</h1>
                <div className="formcomplite"><input type="text" placeholder="نام" {...register("name")} /><p>:نام</p></div>
                    <p>{errors.name?.message}</p>
                <div className="formcomplite"><input type="text" placeholder="نام خانوادگی" {...register("lastname")} /><p>:نام خانوادگی</p></div>
                    <p>{errors.lastname?.message}</p>
                <div className="formcomplite"><input type="text" placeholder="ایمیل" {...register("email")} /><p>:ایمیل</p></div>
                    <p>{errors.email?.message}</p>
                <div className="formcomplite"><input type="password" placeholder="رمزعبور" {...register("password")} /><p>:رمز عبور</p></div>
                    <p>{errors.password?.message}</p>
                <div className="formcomplite"><input type="password" placeholder="تکرار رمزعبور" {...register("confirmpassword")} /><p>:تایید رمز عبور</p></div>
                    <p>{errors.confirmpassword?.message}</p>
                <input className="formcomplite1" type="submit" />
            </form>
        </div>
    )
}

export default Loginform;