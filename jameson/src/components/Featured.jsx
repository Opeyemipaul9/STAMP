import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from 'react-icons/rx';

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'

        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
        }

    ]
    const [index, setIndex] = useState(0);

    const prevSlider = () => {
        const isFirstSlide = index === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : index - 1
        setIndex(newIndex)
    }
    const nextSlider = () => {
        const isLastSlide = index === sliders.length - 1
        const newIndex = isLastSlide ? 0 : index + 1
        setIndex(newIndex)
    }
    const moveToSlide = (slideIndex) => {
        setIndex(slideIndex)
    }


    return (
        <div className="max-w-[1520px] h-[500px] w-full py-4 relative">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{ backgroundImage: `url(${sliders[index].url})` }}>

            </div>
            <div className=" absolute top-[50%] -translate-x-9 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className=" absolute top-[50%] translate-x-9 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer ">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            <div className="flex top-4 justify-center items-center py-2">
                {
                    sliders.map((sliderItems, slideIndex) => {
                        <div
                            key={slideIndex}
                            onClick={() => moveToSlide(slideIndex)}
                            className="text-2xl cursor-pointer ">

                            <RxDotFilled />
                        </div>

                    })
                }

            </div>

        </div>
    )

}


export default Featured;