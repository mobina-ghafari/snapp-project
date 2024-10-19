//img
import Logo from '../img/LOGO-png-Eng-1024x614.png'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Navbar =()=>{
    return(
        <div dir='rtl' className="py-2 border-b" style={{paddingLeft:"10%" , paddingRight:"10%"}}>
            <ul className="flex justify-start items-center">
                <li className="me-5">
                    <a href="/ " className="">
                        <img src={Logo} alt="" className="w-32" />
                    </a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">سوپراپ اسنپ 
                    <FontAwesomeIcon className='w-3 h-3 ms-2' icon={faChevronDown}/>
                    </a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">ثبت نام راننده اسنپ</a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">باشگاه رانندگان</a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">پنل سازمانی</a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">بلاگ</a>
                </li>
                <li className="me-7">
                    <a href="/" className="text-sm font-light text-stone-600">درباره اسنپ 
                    <FontAwesomeIcon className='w-3 h-3 ms-2' icon={faChevronDown}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;