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

  const res = await fetch('http://localhost:3000/api/tasks', {cache: 'no-store'})
  const data = await res.json()
  //console.log(data)
  return data
}
async function galeryCatag() {


  const tasks = await loadCategory();

  return (
    <div className="categoria">
      <Swiper
    modules={[Navigation, Pagination,Autoplay, A11y]}
    loop ={true}
    spaceBetween={100}
    slidesPerView={5}
    navigation
    pagination={{ clickable: true }}
    //onSwiper={(swiper) => console.log(swiper)}
    //onSlideChange={() => console.log('slide change')}
    
    >
      {tasks.map((tasks) => (
        <SwiperSlide key={tasks.id}>
            <div className="categoria-item">
            <Image src={tasks.arte} alt="img" width={200} height={200}/>
            <p><a href={"/Comercial/new/"+tasks.id} >{tasks.nombre}</a></p>
          </div>
          </SwiperSlide>
          ))}
    </Swiper>
    </div>
  )
}
export default galeryCatag;