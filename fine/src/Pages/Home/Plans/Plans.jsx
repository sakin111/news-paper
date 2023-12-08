

const Plans = () => {
    return (

        <div className=" grid grid-cols-3 gap-2 mx-auto my-20">
            {/* Free Plan */}
            <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white p-6 border-4 border-blue-400">
                <h3 className="text-xl mb-4 bg-blue-200 w-44 text-center rounded-sm font-semibold font-custom font-Noticia">Free For 1 Month</h3>
                <div className="flex justify-around items-center">
                    <h2 className="text-xl font-semibold mb-4 text-blue-600">premium individual</h2>
                    <div className=" flex-col justify-end">
                        <h2 className="uppercase font-semibold">free</h2>
                        <p className="text-sm text-slate-400 uppercase">for 1 month</p>
                    </div>
                </div>
                <ul className="text-gray-700 ml-6">
                    <li className="mb-2 text-xs list-disc">Basic Features</li>
                    <li className="mb-2 text-xs list-disc">Limited Access</li>
                    <li className="mb-2 text-xs list-disc">No Time Limit</li>
                </ul>
                <button className="mt-6 bg-blue-500 text-black font-bold px-12 mx-8 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"> 
                    Try free for 1 month
                </button>
            </div>

            {/* Monthly Plan */}
            <div className="w-96  rounded-lg overflow-hidden shadow-lg bg-white p-6 border-4 border-green-400">
            <h3 className="text-xl mb-4 bg-green-200 w-44 text-center rounded-sm font-semibold font-custom font-Noticia">Premium Duo</h3>
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-green-600">Monthly Plan</h2>
            <p className=" text-purple-600 text-lg font-semibold">$2.99/month</p> 
            </div>
               
                <ul className="text-gray-700 ml-6">
                    <li className="mb-2 list-disc text-xs">All Basic Features</li>
                    <li className="mb-2 list-disc text-xs">Full Access</li>
                    <li className="mb-2 list-disc text-xs">Renews Monthly</li>
                </ul>
                <button className="mt-6 bg-green-500 text-black font-bold px-12 mx-8 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"> 
                    Get Premium Duo
                </button>
            </div>

            {/* Yearly Plan */}
            <div className="w-96  rounded-lg overflow-hidden shadow-lg bg-white p-6 border-4 border-purple-400">
            <h3 className="text-xl mb-4 bg-purple-200 w-44 text-center rounded-sm font-semibold font-custom font-Noticia">Premium Family</h3>
               <div className="flex justify-between items-center mb-4">
               <h2 className="text-xl font-semibold  text-purple-600">Yearly Plan</h2>
                <p className=" text-purple-600 text-lg font-semibold">$20/year</p> 
               </div>
                <ul className="text-gray-700 ml-6">
                    <li className="mb-2 list-disc text-xs">All Monthly Features</li>
                    <li className="mb-2 list-disc text-xs">Discounted Price</li>
                    <li className="mb-2 list-disc text-xs">Renews Yearly</li>
                </ul>
                <button className="mt-6 bg-purple-500 text-black font-bold px-12 mx-8 py-2 rounded-full hover:bg-purple-600 transition duration-300 ease-in-out"> 
                    Get Premium family
                </button>
                
            </div>
        </div>

    );
};

export default Plans;
