'use client';
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';

const DogsAPI = () => {
    const [dogs, setDogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [minWeight, setMinWeight] = useState('');
    const [minHeight, setMinHeight] = useState('');

    const getDogs = () => {
        if (name.length > 0 || minHeight.length > 0 || minWeight.length > 0) {
            
            const apiUrl = `https://api.api-ninjas.com/v1/dogs?name=${name}&min_weight=${minWeight}&min_height=${minHeight}`;
            setLoading(true);
            fetch(apiUrl, {
                method: 'GET',
                headers: { 'X-Api-Key': 'ECbf9vbOzSn9XI6pB3Y9LA==U2mxqMt1LWIrbiTc' },
            })
                .then(response => response.json())
                .then(data => { setDogs(data); setLoading(false) })
                .catch(error => setLoading(false));
        } else {
            alert('Enter atleast One Option')
        }
    }

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-screen-lg mx-auto w-full flex items-center space-x-4">
                <input type="text" className="border rounded-lg px-4 py-2 w-[25%] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="text" className="border rounded-lg px-4 py-2 w-[25%] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Minimum Weight"
                    value={minWeight}
                    onChange={(e) => setMinWeight(e.target.value)} />
                <input type="text" className="border rounded-lg px-4 py-2 w-[25%] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Minimum Height"
                    value={minHeight}
                    onChange={(e) => setMinHeight(e.target.value)} />
                <button type='button' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => getDogs()}>Search</button>
            </div>

            {loading ? <div className='flex items-center justify-center h-screen'><RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            /> </div> : dogs.length > 0 ? dogs.map(dog => {
                return <section key={dog.name} className="bg-white dark:bg-gray-800">
                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                    {dog.name}
                                </h1>
                                <div className="mt-8 space-y-5">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Male Max Weight: {dog.max_weight_male}, Female Max Weight: {dog.max_weight_female}</span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Male Min Weight: {dog.min_weight_male}, Female Min Weight: {dog.min_weight_female}</span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Male Max Height: {dog.max_height_male}, Female Max Height: {dog.max_height_female}</span>
                                    </p>
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2">Male Min Height: {dog.min_height_male}, Female Min Height: {dog.min_height_female}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                                src={dog.image_link} alt={dog.name + 'Image'} />
                        </div>
                    </div>
                </section>
            }) : <div className="flex items-center justify-center h-screen">
                <p>Could Not find data for above query!</p>
            </div>}

        </>
    )
}

export default DogsAPI