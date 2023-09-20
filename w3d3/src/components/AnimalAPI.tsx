import React from 'react';

const AnimalAPI = () => {
    const data = {
        "name": "Cheetah",
        "taxonomy": {
            "kingdom": "Animalia",
            "phylum": "Chordata",
            "className": "Mammalia",
            "order": "Carnivora",
            "family": "Felidae",
            "genus": "Acinonyx",
            "scientific_name": "Acinonyx jubatus"
        },
        "locations": [
            "Africa",
            "Asia",
            "Eurasia"
        ],
        "characteristics": {
            "prey": "Gazelle, Wildebeest, Hare",
            "name_of_young": "Cub",
            "group_behavior": "Solitary/Pairs",
            "estimated_population_size": "8,500",
            "biggest_threat": "Habitat loss",
            "most_distinctive_feature": "Yellowish fur covered in small black spots",
            "gestation_period": "90 days",
            "habitat": "Open grassland",
            "diet": "Carnivore",
            "average_litter_size": "3",
            "lifestyle": "Diurnal",
            "common_name": "Cheetah",
            "number_of_species": "5",
            "location": "Asia and Africa",
            "slogan": "The fastest land mammal in the world!",
            "group": "Mammal",
            "color": "BrownYellowBlackTan",
            "skin_type": "Fur",
            "top_speed": "70 mph",
            "lifespan": "10 - 12 years",
            "weight": "40kg - 65kg (88lbs - 140lbs)",
            "height": "115cm - 136cm (45in - 53in)",
            "age_of_sexual_maturity": "20 - 24 months",
            "age_of_weaning": "3 months"
        }
    }

    return (
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-4">Cheetah Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Taxonomy</h2>
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                            <h1 className="text-3xl font-bold mb-4 text-center">Eye-Catching List</h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                                <li>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Item 1
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Item 2
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Item 3
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Item 4
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Characteristics</h2>
                        <ul className="list-disc pl-4">
                            <li>Prey: {data.characteristics.prey}</li>
                            <li>Name of Young: {data.characteristics.name_of_young}</li>
                            <li>Group Behavior: {data.characteristics.group_behavior}</li>
                            <li>Estimated Population Size: {data.characteristics.estimated_population_size}</li>
                            {/* Include other characteristics details here */}
                        </ul>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                            
                                <li className="bg-gradient-to-r from-pink-300 to-purple-400 p-4 rounded-lg shadow-md">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {'hellow '}
                                    </div>
                                </li>
                                <li className="bg-gradient-to-r from-pink-300 to-purple-400 p-4 rounded-lg shadow-md">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {'hellow'}
                                    </div>
                                </li>
                                <li className="bg-gradient-to-r from-pink-300 to-purple-400 p-4 rounded-lg shadow-md">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {'hello'}
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Locations</h2>
                    <ul className="list-disc pl-4">
                        {data.locations.map((location, index) => (
                            <li key={index}>{location}</li>
                        ))}
                    </ul>
                </div>
                {/* Include other sections for locations, characteristics, etc. */}
            </div>
        </div>
    );
}

export default AnimalAPI;
