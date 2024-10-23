//swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../mySwiper.css';

// import required modules
import { Pagination } from 'swiper/modules';


//img
import Market from '../img/Market.jpg';
import Food from '../img/Food.jpg';
import Driver from '../img/Driver.jpg';


const Slider =()=>{
    return(
        <div className="w-9/12 mx-auto mt-20 max-md:w-11/12">
            <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='myswiper rounded-lg'
            >
                <SwiperSlide>
                    <img src={Market} alt="" className='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Food} alt="" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Driver} alt="" className="" />
                </SwiperSlide>
            </Swiper>    
        </div>
    )
}

export default Slider