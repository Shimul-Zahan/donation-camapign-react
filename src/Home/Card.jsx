import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { id, image, title, category, category_bg, card_bg, text_button_bg } = card;

    return (
        <Link to={`card/${id}`}>
            <div className="card card-compact w-80 space-y-4 pb-5" style={{ background: `${card_bg}` }}>
                <figure>
                    <img src={image} alt="image" className='h-[250px] w-full' />
                </figure>
                <div className="card-body">
                    <p className='btn w-[35%]' style={{ background: `${category_bg}` }}>{category}</p>
                    <h1 className="text-xl font-bold" style={{ color: `${text_button_bg}` }}>{title}</h1>
                </div>
            </div>
        </Link>
    )
}

export default Card