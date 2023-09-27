import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import Card from './Card';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const [showData, setShowdata] = useState([]);
  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setShowdata(data)
        setShowItems(data)
      })
  }, [])

  const [inputValue, setInputValue] = useState('');


  const searchInput = inputText => {
    setInputValue(inputText);
  }
  const searchvalue = () => {
    if (inputValue != '') {
      const search = showData.filter(data => data.category.toLowerCase() == inputValue.toLowerCase());
      if (search.length != 0) {
        setShowItems(search);
      } else {
        toast(`No items found!!!`, {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
      }
    }
  }


  return (
    <div>
      <Banner searchInput={searchInput} searchvalue={searchvalue} />
      <div className='container mx-auto mt-28 mb-10 p-2'>
        <div className='flex justify-around items-center'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-20'>
            {
              showItems.map(card => <Card key={card.key} card={card} />)
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}


export default Home