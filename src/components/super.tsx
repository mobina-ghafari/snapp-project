//img
import Easy from '../img/210x190-easy.png';
import Fast from '../img/210x190-fast.png';
import Eco from '../img/210x190-eco.png';


const Super =()=>{
    return(
        <>
            <div dir="rtl" className="w-auto mt-20 grid grid-cols-2 max-lg:grid-cols-1">
                <div className="super-img bg-cover bg-center h-[65vh] max-2xl:h-[50vh] max-lg:h-[30vh]"></div>
                <div className="">
                    <div className="w-4/6 m-10 flex flex-col max-lg:w-full max-lg:m-0 max-lg:p-8">
                        <h1 className="text-2xl text-neutral-700">سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h1>
                        <p className="text-sm text-neutral-500 mt-5 leading-6">اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه تردد شهری، به یک سوپراپ با خدمات متنوع تبدیل شد. سوپراپ اسن راه حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاورآنلاین، خرید از سوپرمارکت ها و فروشگاه ها، اسباب کشی، خرید بلیط(هواپیما، اتوبوس، قطار)، رزرو هتل پرداخت قبض و خرید شارژ استفاده کنید</p>
                    </div>
                </div>
            </div>
            <div dir='rtl' className="w-2/3 grid grid-cols-3 mx-auto lg:-mt-24 max-lg:w-4/5 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="mx-7 mt-7">
                    <div className="bg-slate-100 flex items-center justify-center rounded-2xl">
                        <img src={Easy} alt="" className="" />
                    </div>
                    <div className="">
                        <h1 className="mt-5 text-neutral-700">آسان</h1>
                        <p className="text-neutral-500 text-xs mt-5 leading-5">برای استفاده از هر کذدام از خدمات سوپراپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
                    </div>
                </div>
                <div className="mx-7 mt-7">
                    <div className="bg-slate-100 flex items-center justify-center rounded-2xl">
                        <img src={Fast} alt="" className="" />
                    </div>
                    <div className="">
                        <h1 className="mt-5 text-neutral-700">سریع</h1>
                        <p className="text-neutral-500 text-xs mt-5 leading-5">قرار گرفتن خدمات مختلف در یک پلت فرم به صرفه جویی در زمان کمک می کند. سوپراپ پاسخی سریع به نیازهای روزمره ی شماست.</p>
                    </div>
                </div>
                <div className="mx-7 mt-7">
                    <div className="bg-slate-100 flex items-center justify-center rounded-2xl">
                        <img src={Eco} alt="" className="" />
                    </div>
                    <div className="">
                        <h1 className="mt-5 text-neutral-700">به صرفه</h1>
                        <p className="text-neutral-500 text-xs mt-5 leading-5">سوپراپ علاوه بر زمان در هزینه های شما نیز صرفه جویی می کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Super;