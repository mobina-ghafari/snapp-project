//img
import Logo from '../img/LOGO-png-Eng-1024x614.png'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

//sidebar
import Sidebar from './sidebar';


const Navbar =()=>{
    return(
        <div dir='rtl' className="bg-white z-50 w-full px-40 sticky top-0 max-xl:px-16 max-lg:px-5 py-2 border-b max-lg:p-0 max-lg:h-16 ">
            <nav className="flex justify-start items-center max-lg:hidden">
                <div className="me-5">
                    <a href="/ " className="">
                        <img src={Logo} alt="" className="w-32" />
                    </a>
                </div>
                <div className="me-8 relative group">
                    <div className="text-sm font-light text-stone-600 cursor-default">سوپراپ اسنپ 
                    <FontAwesomeIcon className='w-3 h-3 ms-2' icon={faChevronDown}/>
                    </div>
                    <div className="hidden group-hover:block absolute top-4 w-44 z-10">
                        <div className=" bg-white flex flex-col justify-center border mt-3 rounded-xl px-6 py-4 w-full">
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold">درخواست تاکسی</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">پیک موتوری</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">سفارش آنلاین غذا</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">سوپرمارکت</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">رزرو بلیط هواپیما</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">رزرو بلیط قطار</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">رزرو بلیط اتوبوس</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">رزرو هتل</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">درخواست وانت بار</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">خدمات اسباب کشی</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">پزشک و مشاور</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">اسنپ پرو</a>
                        </div>
                    </div>
                </div>
                <div className="me-8">
                    <a href="/" className="text-sm font-light text-stone-600">ثبت نام راننده اسنپ</a>
                </div>
                <div className="me-8">
                    <a href="/" className="text-sm font-light text-stone-600">باشگاه رانندگان</a>
                </div>
                <div className="me-8">
                    <a href="/" className="text-sm font-light text-stone-600">پنل سازمانی</a>
                </div>
                <div className="me-8">
                    <a href="/" className="text-sm font-light text-stone-600">بلاگ</a>
                </div>
                <div className="me-8 relative group">
                    <div className="text-sm font-light text-stone-600 cursor-default">درباره اسنپ 
                    <FontAwesomeIcon className='w-3 h-3 ms-2' icon={faChevronDown}/>
                    </div>
                    <div className="hidden group-hover:block absolute top-4 w-44 z-10">
                        <div className=" bg-white flex flex-col justify-center border  rounded-xl px-6 py-4 mt-3 w-full">
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold">فرصت های شغلی</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">درباره ما</a>
                            <a href="/" className="text-sm font-light text-stone-600 hover:text-green-500 hover:font-bold mt-5">تماس باما</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* navbar in small size */}
            <nav className="flex justify-between items-center lg:hidden">
                <div className="">
                    <Sidebar/>
                </div>
                <div className="">
                    <img src={Logo} alt="" className='w-28' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;