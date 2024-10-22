//img
import Android from '../img/direct-download-badge.png';
import  Myket from '../img/myketmarket.png';
import WebAp from '../img/snapp-pwa.png';
import Bazar from '../img/bazaar.png';
import AppStore from '../img/app_store.svg'


const Header =()=>{
    return(
        <>
            <div dir="rtl" className="w-auto grid grid-cols-2 max-lg:grid-cols-1">
                <div className="bg-green-600 flex justify-end ">
                    <div className="flex flex-col justify-start items-start w-4/6 mt-5 me-10 max-lg:w-full max-lg:justify-center max-lg:mx-5">
                    <h1 className='text-4xl text-white font-extrabold leading-normal leading tracking-tighter max-lg:text-2xl'>تجربه ی زندگی راحت تر، سریع تر و به صرفه تر با سوپراپلیکیشن اسنپ!</h1>
                    <span className="text-white text-base leading-8 mt-10 max-lg:text-base ">از درخواست خودرو گرفته تا سفارش غذا، خریدسوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.</span>
                    <div className="flex justify-start items-center mt-8 w-full max-lg:hidden">
                        <input type="text" placeholder="۰۹xxxxx۶۷۸۹" className="w-2/4 bg-transparent border-b focus:outline-none h-12 text-white placeholder:text-gray-300 text-sm" />
                        <button className="bg-white text-green-600 font-semibold text-sm py-3 px-6 ms-3 rounded-md">ارسال لینک</button>
                    </div>
                    <button className="text-white font-bold border rounded-md py-3 px-7 mt-10 bg-transparent hover:bg-[rgba(255,255,255,0.1)] max-lg:hidden">ورود به وب اپلیکیشن اسنپ</button>
                    <button className="bg-white text-sm font-bold w-full rounded-md py-3 text-neutral-800 mb-4 mt-5 lg:hidden">دانلود اپلیکیشن اسنپ</button>
                    </div>
                </div>
                <div className="header-img -scale-x-100 bg-cover bg-center max-lg:hidden"></div>
            </div>
            <div dir="rtl" className="flex justify-center mt-20 max-lg:hidden">
                <a href="/" className="">
                    <img src={Android} alt="" className="w-40 mx-7" />
                </a>
                <a href="/" className="">
                    <img src={Myket} alt="" className="w-40 mx-7" />
                </a>
                <a href="/" className="">
                    <img src={AppStore} alt="" className="w-40 mx-7" />
                </a>
                <a href="/" className="">
                    <img src={WebAp} alt="" className="w-40 mx-7" />
                </a>
                <a href="/" className="">
                    <img src={Bazar} alt="" className="w-40 mx-7" />
                </a>
            </div>
        </>
    )
}

export default Header;