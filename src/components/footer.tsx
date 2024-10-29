//img
import Enamad from '../img/enamad.png';
import Samandehi from '../img/samandehi.png';
import Etehadie from '../img/etehadie.png';

const Footer =()=>{
    return(
        <div className="bg-white py-16">
            <div className="text-center flex flex-wrap items-center justify-center">
                <a href="#" className="p-3 text-sm text-neutral-600">فرصت های شغلی</a>
                <a href="#" className="p-3 text-sm text-neutral-600">بلاگ</a>
                <a href="#" className="p-3 text-sm text-neutral-600"> شرایط و قوانین</a>
                <a href="#" className="p-3 text-sm text-neutral-600">پنل سازمانی</a>
                <a href="#" className="p-3 text-sm text-neutral-600">سوالات متداول</a>
                <a href="#" className="p-3 text-sm text-neutral-600">باشگاه رانندگان</a>
                <a href="#" className="p-3 text-sm text-neutral-600">ثبت نام راننده اسنپ</a>
                <a href="#" className="p-3 text-sm text-neutral-600">درباره ما</a>
                <a href="#" className="p-3 text-sm text-neutral-600">تماس با ما</a>
            </div>
            <div className="flex flex-wrap mt-4 items-center justify-center">
                <img src={Enamad} alt="" className="" />
                <img src={Samandehi} alt="" className='' />
                <img src={Etehadie} alt="" className="" />
            </div>
        </div>
    )
}

export default Footer;