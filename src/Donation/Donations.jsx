import React, { useEffect, useState } from 'react'
import { searchItemInLCS } from '../Utils/LocalStorage';
import Donation from './Donation';

const Donations = () => {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const allDonations = searchItemInLCS();
    setDonations(allDonations);
  }, [])
  

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
      {
        donations.map(donation=> <Donation donation={donation} /> )
      }
    </div>
  )
}

export default Donations