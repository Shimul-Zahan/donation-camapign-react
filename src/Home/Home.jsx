import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import Card from './Card';
import { data } from 'autoprefixer';

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

  // console.log(showItems);

  const [inputValue, setInputValue] = useState();


  const searchInput = inputText => {
    setInputValue(inputText);
  }
  const searchvalue = () => {
    // console.log(inputValue);
    const search = showData.filter(data => data.category.toLowerCase() == inputValue.toLowerCase());
    setShowItems(search);
    // console.log(search)
  }


  return (
    <div>
      <Banner searchInput={searchInput} searchvalue={searchvalue} />
      <div className='container mx-auto mt-20 mb-10 p-2'>
        <div className='flex justify-around items-center'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-20'>
            {
              showItems.map(card => <Card key={card.key} card={card} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
// searchInput = { searchInput }

export default Home