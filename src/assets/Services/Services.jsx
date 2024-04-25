import { useEffect, useState } from "react"
import ShowServices from "../ShowServices/ShowServices";
import { useNavigate } from "react-router-dom";

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://sain-courier-service-server.onrender.com/services`)
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    // Handle the Book SErvice Button
    const navigate = useNavigate();
    const handleBookServiceButton = id => {
        navigate(`/book-service/${id}`)
    }

    // Handle the Become A Merchant Button of Banner
    const handleBecomeAmerchantButton = () => { }

    //Handle the Track Order Search Button of Banner
    const handleTrackOrderButton = () => { }

    return (
        <div>
            {/* banner */}
            <div className="py-20 px-20 bg-[#008dda] mb-32">
                <div className="flex justify-around items-center">
                    <div className="text-black">
                        <h2 className="text-5xl font-bold mb-3 tracking-tight">Parcel Delivered</h2>
                        <h2 className="text-5xl font-bold mb-5 tracking-tight">On Time with no Hassle</h2>
                        <p className="tracking-wide">Easily track your courier, Get courier within hours. Efficient & safe delivery.</p>
                        <button onClick={handleBecomeAmerchantButton} className="px-8 py-3 mt-10 rounded-lg font-semibold text-[17px] text-[#008dda] bg-white hover:text-black tracking-tight">BECOME A MERCHANT</button>
                    </div>
                    <div>
                        <img className="w-72 hover:scale-125 transition-transform" src="/logo.png" />
                    </div>
                </div>

                {/* track package */}
                <div className="flex justify-center mt-24">
                    <div className="shadow-lg bg-white px-5 py-7 rounded-lg w-1/2 text-center">
                        <input
                            type="text"
                            className="px-10 py-3 rounded-lg border-2 border-[#008dda] me-3 w-3/4"
                            placeholder="Enter your tracking code here"
                        />
                        <button onClick={handleTrackOrderButton} className="px-12 py-3 rounded-lg bg-[#008dda] text-white hover:bg-[#00a3fd]"><i className="fa-solid fa-magnifying-glass"></i></button>

                    </div>
                </div>
            </div>

            {/* Show Some Details/Information About Courier */}
            <div className="flex justify-center mb-10">
                <div className="w-3/4 grid grid-cols-2">
                    <div className="">
                        {/* 1 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3  fa-solid fa-truck-fast"></i>
                                Daily Pick up, No limitations
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">SAIN Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.</p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3 fa-solid fa-money-check-dollar"></i>
                                Faster Payment Service
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">At SAIN Courier you can request for your payment every six days of the week. We Courier provides multiple payment methods such as cash, Bkash or Rocket payment. Also you can collect the money simply by transferring your current balance to your preferred Bank. Our faster and secure payment service will provide the ultimate solution to your payment problem which can occur using a logistics service.</p>
                            </div>
                        </div>

                        {/* 3 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3 fa-solid fa-clock"></i>
                                Real-Time Tracking
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">SAIN Courier provides an unique tracking code for your every consignments. Through our website you can learn the current status of the products and stay up to date.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {/* 4 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3 fa-solid fa-truck-ramp-box"></i>
                                Cash on Delivery
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">At SAIN Courier we will collect the cash on behalf of you. Our trusted delivery man will deliver your parcel to your customer and collect the money. And then with our various payment methods we will give your money back to you. Also we are giving you the opportunity of sending a non-conditioned parcel to delivery as well.</p>
                            </div>
                        </div>

                        {/* 5 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3 fa-solid fa-desktop"></i>
                                Online Management
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">With our simple and easy to use user interface you can get all the information you need in your own user dashboard. You can view your user dashboard to stay updated. Whether it’s about a parcel or payment, you can get all of your information with just simple clicks.</p>
                            </div>
                        </div>

                        {/* 6 */}
                        <div
                            style={{ boxShadow: "0px 0px 5px 4px #dddddd", borderRadius: "0px" }}
                            className="collapse w-11/12 px-8 mb-5">
                            <input type="checkbox" />

                            <div
                                className="collapse-title  font-semibold">
                                <i className="text-[#008dda] me-3 fa-solid fa-headset"></i>
                                Advanced Customer Service
                            </div>

                            <div className="collapse-content">
                                <p className="pt-3 mb-3 border border-t-2 border-b-0 border-l-0 border-r-0 border-gray-400">Our Call Center Executives are always ready 24/7 to help you with your problems. They are fast, well trained, reliable and always ready to solve your problems. Also you can contact us on our Facebook page as well. Our Facebook page admins are always active to give you feedbacks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* show services */}
            <div>
                {/* "Our Service" text with SVG from softr */}
                <div className="flex justify-center">
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
                        <defs>
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                <stop id="stop1" stopColor="rgba(0, 141, 218, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(0, 141, 218, 1)" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#sw-gradient)" d="M20.6,-28.5C25.8,-24.6,28.4,-17.3,31.8,-9.7C35.2,-2,39.4,6.1,36,10.2C32.6,14.3,21.5,14.4,14.3,14.5C7,14.7,3.5,15,-0.6,15.8C-4.8,16.7,-9.6,18.2,-15.2,17.5C-20.9,16.8,-27.5,14,-32.9,8.1C-38.3,2.3,-42.5,-6.4,-39,-11.3C-35.6,-16.2,-24.4,-17.3,-16.6,-20.3C-8.9,-23.3,-4.4,-28.2,1.6,-30.5C7.7,-32.8,15.4,-32.3,20.6,-28.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="12" className="font-semibold" fill="black">Our Services</text>
                    </svg>
                </div>

                {/* services */}
                {
                    services.length > 0 ?
                        <div className="flex justify-center" id="allServices">
                            <div className="w-9/12">
                                <div className="grid grid-cols-2 gap-5">
                                    {
                                        services.map(service => <ShowServices key={service._id} handleBookServiceButton={handleBookServiceButton} service={service} />)
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-center">
                            <span className="loading loading-spinner loading-lg text-info"></span>
                        </div>
                }
            </div>
        </div>
    )
}

export default Services
