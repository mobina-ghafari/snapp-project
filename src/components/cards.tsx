//img
import Taxi from '../img/taxi.svg';
import Food from '../img/food.svg';
import Market from '../img/Market-Orange-Final.png'
import Bike from '../img/bike.svg';
import Vanet from '../img/pickup.svg';
import Credit from '../img/Credit.svg';
import Plane from '../img/fdom-t.png';
import Plane2 from '../img/intflight.svg';
import Hotel from '../img/hotel.svg';
import Bus from '../img/bus.svg';
import Train from '../img/train.svg';
import Shop from '../img/shop.svg';
import Doctor from '../img/doctor.svg';
import Pharmacy from '../img/pharmacy.svg';
import Bime from '../img/Insurance.png';
import Moving  from '../img/moving.svg';
import Driver from '../img/driver.svg';
import Club from '../img/club.svg';
import Wallet from '../img/wallet.png';
import Pro from '../img/Pro.png';


const Cards =()=>{
    return(
        <div dir="rtl" className="bg-slate-100 mt-24 py-10">
            <h1 className="text-center text-4xl font-extrabold text-neutral-700 mb-10">یک اپلیکیشن، برای تمام نیازها</h1>
            <div className="grid grid-cols-3 w-3/4 mx-auto max-lg:w-4/5 max-sm:w-full">
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Taxi} alt="" className='w-16' />
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">تاکسی اینترنتی</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Food} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">سفارش آنلاین غذا</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Market} alt="" className='w-16' />
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">سوپرمارکت آنلاین</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Bike} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">پیک موتوری</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Vanet} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">درخواست وانت</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Credit} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">سرویس اعتباری</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Plane} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">بلیط هواپیما داخلی</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Plane2} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">بلیط هواپیما خارجی</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Hotel} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">رزرو هتل</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Bus} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">بلیط اتوبوس</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Train} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">بلیط قطار</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Shop} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">فروشگاه</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Doctor} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">پزشک و مشاور</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Pharmacy} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">داروخانه</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Bime} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">بیمه</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Moving} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">اسباب کشی منزل</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Driver} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">ثبت نام راننده</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Club} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">اسنپ! کلاب</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Wallet} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">خرید شارژ</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Wallet} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">خرید بسته اینترنت</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
                <a href="/" className="bg-white rounded-2xl flex items-center py-4 px-3 m-4 max-lg:flex-col max-sm:m-3">
                    <img src={Pro} alt="" className='w-16'/>
                    <span className="flex flex-col ms-2">
                        <span className="mb-2 max-lg:text-center max-lg:mt-3 max-sm:text-xs">اسنپ پرو</span>
                        <span className="text-zinc-400 text-xs max-lg:hidden">درخواست آنلاین خودرو</span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Cards;