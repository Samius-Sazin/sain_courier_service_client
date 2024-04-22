import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footerStyle text-[#ffffff] w-full bg-[#008dda] p-16 py-16 mt-28 grid gap-4 grid-cols-3'>
            <div className='pe-10'>
                <div className='flex items-center mb-7'>
                    <Link end='true' to='/' className="me-3"> <img src='/logo.png' alt="" style={{ width: "100px" }} /> </Link>
                    <Link end='true' to='/'>
                        <h2 className='font-bold text-3xl text-black'>SAIN Courier</h2>
                        <pre className='font-bold text-xl text-black'>         Service</pre>
                    </Link>
                </div>
                <p className='text-justify'>Sain Courier Service ensures swift, reliable deliveries with care. From parcels to documents, trust us for efficient transportation solutions tailored to your needs.</p>

                <h3 className='text-black font-bold text-2xl mt-7 mb-2'>Follow Us</h3>
                <div className='flex items-center'>
                    <a href='https://www.facebook.com/' target='_main'><i className="fa-brands fa-square-facebook"></i></a>
                    <a href='https://www.whatsapp.com/' target='_main'><i className="fa-brands fa-whatsapp px-7"></i></a>
                    <a href='https://www.linkedin.com/' target='_main'><i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://twitter.com/' target='_main'><i className="fa-brands fa-x-twitter px-7"></i></a>
                </div>
            </div>

            <div className='ps-10 grid gap-4 grid-cols-2'>
                <div>
                    <h3 className='text-black font-bold text-2xl mb-4'>About</h3>
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> About Company</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black my-5"></i> Our Goal</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> Contact Us</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black my-5"></i> Emergency</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> News</Link>
                </div>
                <div>
                    <h3 className='text-black font-bold text-2xl mb-4'>Services</h3>
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> Regular Shipment</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black my-5"></i> Fast Shipment</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> International Shipping</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black my-5"></i> Special Handling</Link> <br />
                    <Link end='true' to='/'><i className="fa-solid fa-angle-right text-black"></i> Bulk Deliverie</Link>
                </div>
            </div>

            <div className='ms-10 pe-10'>
                <h3 className='text-black font-bold text-2xl mb-4'>Newsletter</h3>
                <p>Don’t miss any updates of our Offer</p>
                <input className='mt-5 px-3 py-3 w-full rounded-lg text-black font-semibold' type='email' placeholder='Enter your email'/>
                <button className='bg-black px-8 py-3 mt-5 rounded-lg text-white font-semibold text-lg hover:text-[#008dda]'>Subscribe</button>
            </div>
        </div>
    )
}

export default Footer
