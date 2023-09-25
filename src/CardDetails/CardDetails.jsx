import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { saveToLocalStorage } from '../Utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    const { id } = useParams();
    const allData = useLoaderData();

    const detailsShowItem = allData.find(data => data.id == id);
    
    const donation = () => {
        saveToLocalStorage(detailsShowItem);
        toast(`Donate ${detailsShowItem.price}$ SuccessFull`, {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
        });
    }

  return (
      <div className='container mx-auto'>
          <div className='relative'>
              <img src={detailsShowItem.image} alt="" className='w-full lg:h-[755px] rounded-[20px]'/>
              <div className='lg:bg-[#0b0b0b7f] p-6 absolute lg:w-[1540px] rounded-br-[20px] rounded-bl-[20px] bottom-0'>
                  <button onClick={donation} className='btn text-base font-semibold capitalize text-white' style={{ background: `${detailsShowItem.text_button_bg}` }}>Donate ${ detailsShowItem.price }</button>
              </div>
          </div>
          <div className='mt-10 mb-10 space-y-8'>
              <h1 className='text-4xl text-black font-bold'>{detailsShowItem.title}</h1>
              <p className='text-lg text-black font-medium'>{detailsShowItem.description }</p>
          </div>
          <ToastContainer />
      </div>
  )
}

export default CardDetails