import React, { useEffect, useState } from 'react'
import { searchItemInLCS } from '../Utils/LocalStorage';
import Donation from './Donation';

const Donations = () => {

  const [donations, setDonations] = useState([]);
  const [initial, setInitial] = useState(4);

  useEffect(() => {
    const allDonations = searchItemInLCS();
    setDonations(allDonations);
  }, [])
  

  return (
    <div className='container mx-auto'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 pt-10'>
        {
          donations.slice(0, initial).map(donation => <Donation donation={donation} />)
        }
      </div>
      <div className={'text-center mt-10 block'}>
        <div className={donations.length == initial && 'hidden'}>
          {
            donations.length >= 4 && <button onClick={() => setInitial(donations.length)} className='btn btn-success'>Show all</button>
          }
        </div>
      </div>

    </div>
  )
}

export default Donations