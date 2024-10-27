//video
import Video from '../video/jazbranandeh1.mp4'

//img
import Coin from '../img/180x100-income.png';
import Hour from '../img/180x100-hour.png';
import Benfit from '../img/180x100-benefits.png';
import Carfitx from '../img/180x100-carfix.png';
import Safety from '../img/safety.svg';
import Suport from '../img/support.svg';


const Registration =()=>{
    return(
        <div dir="rtl" className="bg-slate-100 mt-10 px-5 py-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-zinc-800 text-center">در کمتر از ۱۰ دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید.</h1>
                <span className="text-xl text-zinc-600 mt-7 text-center">بدون نیاز به مراجعه حضوری، از طریق این صفحه، تمام مراحل ثبت نام را اینترنتی انجام دهید</span>
                <button className="bg-green-500 rounded-md text-white py-3 px-7 mt-8 hover:bg-green-400">ثبت نام رانندگان</button>
            </div>
            <div className="flex justify-center mt-12">
                <video className='w-3/4 rounded-lg max-lg:w-full' controls poster=''>
                    <source src={Video} type='video/mp4' />
                </video>
            </div>
            <div className="w-3/4 mx-auto grid grid-cols-2 gap-x-6 gap-y-8 mt-20 max-lg:w-full max-lg:grid-cols-1 ">
                <div className="bg-white rounded-xl p-10 flex justify-center items-center max-lg:flex-col">
                    <img src={Coin} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">درآمد تضمینی + پاداش های ماهانه و هفتگی</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می توانید با شرکت در طرح های تشویقی مختلف، درآمد خود را افزایش دهید.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-10 flex justify-center items-center max-lg:flex-col">
                    <img src={Hour} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">ساعت کاری دلخواه</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">فعالیت در ناوگان اسنپ محدودیت زمانی  ندارد و می توانید فعالیت خود را در هر ساعت از شبانه روز و متناسب با برنامه زندگی تان شخصی سازی کنید.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-10 flex justify-centerer items-center max-lg:flex-col">
                    <img src={Benfit} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">مزایا و خدمات باشگاه رانندگان</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">در باشگاه رانندگان اسنپ می توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره مند شوید.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-10 flex justify-centerer items-center max-lg:flex-col">
                    <img src={Carfitx} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">کارفیکس</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">باشگاه رانندگان اسنپ به تازگی سرویس جدید اسنپ کارفیکس را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه اندازی کرده است.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-10 flex justify-centerer items-center max-lg:flex-col">
                    <img src={Safety} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">امنیت سفر کاربران راننده در اسنپ</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">اسنپ با ارائه سرویسامنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می کند تجربه سفر با اسنپ برای کاربران راننده امن و مطمئن باشد</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-10 flex justify-centerer items-center max-lg:flex-col">
                    <img src={Suport} alt="" className="w-28 h-16 max-lg:mb-8" />
                    <div className="">
                        <h1 className="text-neutral-700">پشتیبانی۲۴ ساعته و سریع</h1>
                        <p className="text-sm mt-3 text-neutral-500 leading-6">تیم پشتیبانی اسنپ در تمامی ساعت های شبانه روز پاسخگوی سوال ها و مشکلات کاربران راننده است. بخش پشتیبانی در اپلیکیشن رانندگان، سریع ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;