import React from 'react'

const Navbar = () => {
    return (
        <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
            <div className="relative z-10 text-center py-24 md:py-48">
                <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">{'{'}{'{'} home.title {'}'}{'}'}</h1>
                <a href="{{ home.button_link }}" className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">{'{'}{'{'} home.button_text {'}'}{'}'}</a>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
                <a href="{{ home.link_one }}" className="border-b border-white">{'{'}{'{'} home.link_one_text {'}'}{'}'}</a>
                <a href="{{ home.link_two }}" className="border-b border-white">{'{'}{'{'} home.link_two_text {'}'}{'}'}</a>
            </div>
            <img src="{{ home.image }}" className="w-full h-full absolute inset-0 object-cover opacity-70" />
        </div>

    )
}

export default Navbar