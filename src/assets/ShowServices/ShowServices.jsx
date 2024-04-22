
function ShowServices(props) {
    const { _id, name, details, image, charge, deliverySpeed } = props?.service;

    return (
        <div
            style={{ boxShadow: "0px 0px 5px 4px #dddddd" }}
            className="px-5 py-5 rounded-lg relative"
        >
            <img className="mb-2 rounded-lg border-2 border-[#008dda] hover:scale-110 transition-transform" style={{ width: "208px", height: "138px" }} src={image} alt="img" />
            <h2 className="text-3xl font-bold text-[#008dda] mb-4 underline underline-offset-8">{name}</h2>
            <p className="text-[17px] mb-20">{details}</p>
            <div className="absolute bottom-5 left-5 flex w-11/12">
                <div className="bg-[#008dda] rounded-lg px-8 py-1">
                    <h2 className="text-xl font-semibold text-[white]">Charge : {charge}</h2>
                    <h2 className="text-xl font-semibold text-[white]">Time : {deliverySpeed}</h2>
                </div>
                <div>
                    <button onClick={() => props.handleBookServiceButton(_id)} className="absolute bottom-0 right-0 px-10 py-3 rounded-lg font-semibold bg-[#008dda] text-white hover:text-black">Book Service</button>
                </div>
            </div>
        </div>
    )
}

export default ShowServices
