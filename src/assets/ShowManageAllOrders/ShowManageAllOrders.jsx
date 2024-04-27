import { NavLink } from 'react-router-dom';
import './ShowManageAllOrders.css';

function ShowManageAllOrders(props) {
    const { bookedAt, userName, userEmail, parcelName, parcelWeight, serviceImage, serviceName, time, totalCost, from, destination, _id } = props.allOrder;

    return (
        <div className='myGrid mb-5 px-5 py-3 rounded-lg' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }}>
            <NavLink to='/services'>
                <img className='border-2 border-[#008dda] rounded-lg' style={{ width: "128px", height: "78px" }} src={serviceImage} alt="img" />
            </NavLink>

            <div>
                <NavLink to='/services'>
                    <h2 className='font-semibold text-[20px] text-[#008dda]'>{serviceName}</h2>
                </NavLink>
                <h2 className='font-semibold text-[18px]'>Item: {parcelName}</h2>
                <div className='font-semibold text-[14px] grid grid-cols-3'>
                    <h2>W. {parcelWeight} kg</h2>
                    <h2>Tk. {totalCost.toFixed(2)}</h2>
                    <h2></h2>
                </div>
            </div>

            <div className='flex flex-col justify-center item-center'>
                <h2 className='font-semibold text-lg text-[#008dda]'>{userName}</h2>
                <h2 className='font-semibold text-lg text-[#008dda]'>{userEmail}</h2>
                <h2 className='font-semibold text-sm'
                >{from.length > 0 ? from.charAt(0).toUpperCase() + from.slice(1) : from.toUpperCase()} to {destination.length > 0 ? destination.charAt(0).toUpperCase() + destination.slice(1) : destination.toUpperCase()}</h2>
            </div>

            <div className='flex flex-col justify-center item-center'>
                <h2 className='text-xs'>Status</h2>
                <h2 className='font-semibold text-lg text-[#008dda]'>In Progress</h2>
                <h2 className='text-xs'>Booking date</h2>
                <h2 className='font-semibold text-lg text-[#008dda]'>{bookedAt.slice(0, 10)}</h2>
            </div>

            <div className='flex items-center justify-center'>
                <button
                    onClick={() => props.handleCancelService(_id)}
                    className='px-8 py-3 bg-[#008dda] rounded-lg text-white font-semibold hover:text-black'
                >Cancel</button>
            </div>
        </div>
    )
}

export default ShowManageAllOrders
