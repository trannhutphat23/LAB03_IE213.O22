import './bai7.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Data from './bai7_data';
const Bai7 = () => {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
    };
    useEffect(() => {
        let slideEffect = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Data.length)
        }, 3000)
        return () => {
            clearInterval(slideEffect)
        }
    }, [index])
    return (
        <div className="wrapper-bai7">
            <button className='slideIcon' onClick={prevSlide} >
                <FiChevronLeft />
            </button>

            {Data
                .filter(person => person.id === index + 1)
                .map((person, pIndex) => {
                    return (
                        <div key={pIndex} className='sectionInfo'>
                            <img src={`${person.image}`} alt={`${person.name}`} className='ava_bai7'/>
                            <h5 className='name_bai7'>{person.name}</h5>
                            <p className='title_bai7'>{person.title}</p>
                            <p className='text_bai7'>{person.quote}</p>
                            <FaQuoteRight className='quoteIcon'/>
                        </div>
                    )   
            })}
 
            <button className='slideIcon' onClick={nextSlide} >
                    <FiChevronRight />
            </button>
        </div>
    )
}

export default Bai7;