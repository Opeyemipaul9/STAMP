import React from "react";
import { categories } from "../Data/data";

const Categories = () => {

    return (
        <div className="max-w-[1520px] m-auto px-4 py-12" >
            <h1 className="text-orange-500 font-bold text-2xl text-center" >
                Trending Categories
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2" >
                {
                    categories.map((item) => {
                        return (
                            <div key={item.id} className="px-4 justify-center items-center hover:scale-105 duration-300">
                                <img
                                    className="object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl"
                                    src={item.img}
                                    alt={item.name}
                                />
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}


export default Categories;