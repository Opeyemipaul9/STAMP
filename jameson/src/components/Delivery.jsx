import React from "react";


const Delivery = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <h3 className="text-orange-500 font-bold text-2xl text-center" > Quick Delivery App </h3>
            <div className="py-16 mx-auto grid md:grid-cols-1 lg:grid-cols-2">
                <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/Fc_two_phones.6ec9a842f905769677f9_m91off.webp" className="w-[550px] mx-auto my-4" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold"> Get the App  </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Limitless Convenience on-demand </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Qui molestiae reiciendis, maiores quaerat eveniet aliquid nulla
                        dolorem magni sapiente officia, aspernatur sint corrupti ratione recusandae
                        facere iste aperiam porro. Voluptatem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        , cumque nobis! Perspiciatis error et dolorem veniam provident
                        accusantium quas corrupti, pariatur placeat, facilis asperiores,
                        dolore modi quam ducimus maiores voluptates.
                    </p>
                    <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3" > Get Started </button>
                </div>
            </div>
        </div>
    )
}

export default Delivery;