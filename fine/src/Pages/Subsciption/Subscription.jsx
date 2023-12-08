import { useState } from "react";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Subscription = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);





    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
    
        try {
          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          });
    
          if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
          } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            // Here you can send the paymentMethod.id to your backend for further processing
            console.log('Payment Method ID:', paymentMethod.id);
          }
        } catch (error) {
          setPaymentError(error.message);
          setPaymentSuccess(null);
        }
      };










    const [selectedDuration, setSelectedDuration] = useState(1);

    const handleSubscription = () => {
      let price;
      // Set price based on the selected duration
      switch (selectedDuration) {
        case 1:
          price = 10; // Example price for 1 minute subscription
          break;
        case 5:
          price = 50; // Example price for 5 days subscription
          break;
        case 10:
          price = 100; // Example price for 10 days subscription
          break;
        default:
          price = 0;
          break;
      }
      // You can perform further actions here, such as redirecting to a payment page with the calculated price
      console.log(`Selected duration: ${selectedDuration}, Price: $${price}`);
    };











    return (
        <div>

            <div className="bg-blue-500 text-white py-4 text-center">
                <h1 className="text-4xl font-bold">Subscribe Now for Premium Access!</h1>
                <p className="text-lg mt-2">Unlock exclusive content and features.</p>
            </div>



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



{/* subcribe  */}


<div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-md w-full space-y-8 bg-white shadow-lg rounded-lg p-6">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
            Subscribe for Premium Access
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Unlock exclusive content and features.
          </p>
        </div>
        <div className="flex justify-center">
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(Number(e.target.value))}
            className="block appearance-none w-full bg-white border border-gray-300 p-2 rounded-md shadow-md focus:outline-none"
          >
            <option value={1}>1 minute</option>
            <option value={5}>5 days</option>
            <option value={10}>10 days</option>
          </select>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubscription}
            className="w-full py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>





     {/* sub2 */}


     <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment successful!</div>}
    </form>



        </div>
    );
};

export default Subscription;