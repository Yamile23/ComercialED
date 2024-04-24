'use client'

import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

async function loadCategory() {

  const res = await fetch('http://localhost:3000/api/tasks', { cache: 'no-store' })
  const data = await res.json()
  //console.log(data)
  return data
}
async function galeryCatag() {


  const tasks = await loadCategory();

  return (

    <div className="categoria m-4">
      <Swiper className='Swiper'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          700:{
            slidesPerView:5
          }
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

      >
        {tasks.map((tasks) => (
          <SwiperSlide className='SwiperSlide' key={tasks.id}>
            <div className="categoria-item ">
              <Image src={tasks.arte} alt="img" width={250} height={250} />
              <p ><a href={"/Comercial/new/" + tasks.id} >{tasks.nombre}</a></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default galeryCatag;