//usestate
import { useState } from "react";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faChevronDown, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";

//img
import Android from '../img/directdownload-icon.png';
import Bazar from '../img/cafebazaar.png';
import Myket from '../img/myketmarketicon.png';
import Ios from '../img/snapp-pwa.svg';
import AppStore from '../img/apple.png';


const Sidebar =()=>{
    //state
    const [isOpen , setIsOpen] = useState<boolean>(false);
    const [souper , setSouper] = useState<boolean>(false);
    const [about , setAbout] = useState<boolean>(false);
    const [app , setApp] = useState<boolean>(false);

    const handleSidebar =()=>{
        setIsOpen(!isOpen);
    }

    const handleSouper =()=>{
        setSouper(!souper);
    }

    const handleAbout =()=>{
        setAbout(!about);
    }

    const handleApp =()=>{
        setApp(!app)
    }

    return(
        <div dir="rtl" className="relative lg:hidden">
            <button 
                className="text-2xl top-5 fixed z-40 text-gray-800 lg:hidden"
                onClick={handleSidebar}
            >
                {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
            <div className={`fixed pb-14 top-16 right-0 h-full w-2/3 overflow-auto max-sm:w-full bg-white transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-30`}>
                    <nav className="flex flex-col">
                        <div className="w-full relative px-4 py-5">
                            <a href="#" onClick={handleSouper} className="w-full flex justify-between">
                                <span className="text-neutral-800">سوپراپ اسنپ</span>
                                {souper ? <FontAwesomeIcon className="text-xl text-neutral-800" icon={faChevronUp} /> : <FontAwesomeIcon className="text-xl text-neutral-700" icon={faChevronDown} />}
                            </a>
                            {souper && (
                                <div className="flex flex-col right-0 mt-2 bg-white transition-all duration-500 ease-in-out">
                                    <a href="#" className="py-3 text-neutral-600 text-sm">درخواست تاکسی</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">پیک موتوری</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">سفارش آنلاین غذا</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">سوپرمارکت</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">رزرو بلیط هواپیما</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">رزرو بلیط قطار</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">رزرو بلیط اتوبوس</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">رزرو هتل</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">درخواست وانت بار</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">خدمات اسباب کشی</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">پزشک و مشاور</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">اسنپ پرو</a>
                                </div>
                            )}
                        </div>
                        <div className="w-full px-3 py-5">
                            <a href="#" className="">
                                <span className="text-neutral-600">ثبت نام راننده اسنپ <span className="text-green-500 text-sm">(سواری، موتور و وانت)</span></span>
                            </a>
                        </div>
                        <div className="w-full px-3 py-5">
                            <a href="#" className="w-full">
                                <span className="text-neutral-600">باشگاه رانندگان</span>
                            </a>
                        </div>
                        <div className="w-full px-3 py-5">
                            <a href="#" className="w-full">
                                <span className="text-neutral-600">پنل سازمانی</span>
                            </a>
                        </div>
                        <div className="w-full px-3 py-5">
                            <a href="#" className="w-full">
                                <span className="text-neutral-600">بلاگ</span>
                            </a>
                        </div>
                        <div className="w-full px-4 py-5 border-b relative">
                            <a href="#" onClick={handleAbout} className="w-full flex justify-between">
                                <span className="text-neutral-800">درباره اسنپ</span>
                                {about ? <FontAwesomeIcon className="text-xl text-neutral-800" icon={faChevronUp} /> : <FontAwesomeIcon className="text-xl text-neutral-800" icon={faChevronDown} />}
                            </a>
                            {about && (
                                <div className="flex flex-col right-0 mt-2 bg-white transition-all duration-500 ease-in-out">
                                    <a href="#" className="py-3 text-neutral-600 text-sm">فرصت های شغلی</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">درباره ما</a>
                                    <a href="#" className="py-3 text-neutral-600 text-sm">تماس با ما</a>
                                </div>
                            )}
                        </div>
                        <div className="w-full px-4 py-5 relative">
                            <a href="#" onClick={handleApp} className="w-full flex justify-between">
                                <span className="text-green-500">اپلیکیشن اسنپ</span>
                                {app ? <FontAwesomeIcon className="text-xl text-green-500" icon={faChevronUp} /> : <FontAwesomeIcon className="text-xl text-green-500" icon={faChevronDown} />}
                            </a>
                            {app && (
                                <div className="flex flex-col right-0 mt-2 bg-white transition-all duration-500 ease-in-out">
                                    <a href="#" className="flex py-3">
                                        <img src={Android} alt="" className="" />
                                        <span className="text-neutral-600 ms-2">دانلود مستقیم</span>
                                    </a>
                                    <a href="#" className="flex py-3">
                                        <img src={Bazar} alt="" className="" />
                                        <span className="text-neutral-600 ms-2">دانلود از کافه بازار</span>
                                    </a>
                                    <a href="#" className="flex py-3">
                                        <img src={Myket} alt="" className="" />
                                        <span className="text-neutral-600 ms-2">دانلود از مایکت</span>
                                    </a>
                                    <a href="#" className="flex py-3">
                                        <img src={Ios} alt="" className="w-5" />
                                        <span className="text-neutral-600 ms-2">وب اپلیکیشن اسنپ (iOS)</span>
                                    </a>
                                    <a href="#" className="flex py-3">
                                        <img src={AppStore} alt="" className="" />
                                        <span className="text-neutral-600 ms-2">دانلود از اپ استور</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
                {isOpen && (
                <div
                    onClick={handleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 top-16 lg:hidden"
                ></div>
            )}
        </div>
    )
}

export default Sidebar;