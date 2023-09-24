import React, { useEffect, useState } from 'react'
import Banner from '../Header/Banner/Banner'
import Card from './Card';

const Home = () => {

  const [showData, setShowdata] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setShowdata(data))
  }, [])


  return (
    <div>
      <Banner />
      <div className='container mx-auto mt-20 mb-10 p-2'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-20'>
          {
            showData.map(card => <Card key={card.key} card={card} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home