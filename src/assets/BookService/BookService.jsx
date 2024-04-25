import { useForm } from "react-hook-form";
import useAuth from "../Context/useAuth"; import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
;

function BookService() {

  const { user } = useAuth();
  const { displayName, email, photoURL } = user;
  const [service, setService] = useState(null);
  const id = location.pathname.slice("/book-service/".length);

  //for fetch data
  useEffect(() => {
    fetch(`https://sain-courier-service-server.onrender.com/services/${id}`)
      .then(response => response.json())
      .then(data => {
        setService(data);
      })
  }, [id])

  const [totalPrice, setTotalPrice] = useState('0');
  const [weight, setWeight] = useState('0');
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  //set Total Price
  useEffect(() => {
    const serviceCHarge = service?.charge.slice(0, service?.charge.indexOf(' '));
    const ttlPrice = serviceCHarge * weight;
    setTotalPrice(Math.round(ttlPrice));
    setValue("totalCost", serviceCHarge * weight)
  }, [service, weight])

  //submit
  const navigate = useNavigate();
  const onSubmit = data => {
    data.userName = displayName;
    data.userEmail = email;
    data.serviceCharge = service?.charge;
    data.serviceName = service?.name;
    data.serviceID = service?._id;
    data.time = service?.deliverySpeed;
    data.serviceImage = service?.image;

    fetch(`https://sain-courier-service-server.onrender.com/book-service`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          alert('Service booked successsfully.');
          navigate('/my-orders');
        }
      })
  }

  return (
    <div className='flex justify-center mt-40'>
      <div className='w-1/2 flex justify-center px-5 py-5 rounded-lg' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }} >
        <div className="w-2/3 py-10">
          <div className="flex justify-center">
            <img className="rounded-full w-32 mb-3" src={photoURL} alt="img" />
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

            {/* Name, Email, serviceName*/}
            <fieldset disabled>

              {/* user Name */}
              <input
                className="cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
                defaultValue={"Full Name: " + displayName}
                {...register("userName")}
              />

              {/* userEmail */}
              <input
                className="cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
                defaultValue={"Email: " + email}
                {...register("userEmail")}
              />

              {/* service name */}
              <input
                className="cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
                value={"Service name: " + service?.name}
                {...register("serviceName")}
              />

              {/* service charge */}
              <input
                className="cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
                value={"Service Charge : " + service?.charge}
                {...register("serviceCharge")}
              />

              {/* Delivery time */}
              <input
                className="cursor-not-allowed bg-gray-200 border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
                value={"Delivered within: " + service?.deliverySpeed}
                {...register("time")}
              />
            </fieldset>

            {/* parcel name */}
            <input
              className="border border-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight"
              type="text"
              placeholder="Enter parcel name or type"
              {...register("parcelName", {
                required: true,
              })}
            />

            {/* parcel weight, price */}
            <div className="flex items-center">

              {/* weight */}
              <input
                className="w-3/4 border border-gray-500 rounded lg px-7 py-3 font-semibold mb-3 leading-tight"
                placeholder="Enter parcel weight"
                {...register("parcelWeight", {
                  required: true,
                  onChange: e => setWeight(e.target.value),
                  pattern: /^\d*(\.\d{0,2})?$/,
                })}
              />

              {/* total price */}
              <fieldset disabled>
                <input
                  className="cursor-not-allowed bg-gray-200 text-gray-500 w-auto ms-1 border border-gray-400 rounded lg px-7 py-3 font-semibold mb-3 leading-tight"
                  value={"Total : " + totalPrice + " tk"}
                  {...register("totalCost")}
                />
              </fieldset>
            </div>

            {/* from, destination */}
            <div className="flex items-center">

              {/* From */}
              <input
                className="w-1/2 border border-gray-500 rounded lg px-7 py-3 font-semibold mb-3 leading-tight"
                type="text"
                placeholder="Enter current place"
                {...register("from", {
                  required: true,
                  pattern: /^[a-zA-Z\s/!@#$%^&*()]+$/,
                })}
              />

              {/* destination */}
              <input
                className="w-auto ms-1 border border-gray-500 rounded lg px-7 py-3 font-semibold mb-3 leading-tight"
                type="text"
                placeholder="Enter destination place"
                {...register("destination", {
                  required: true,
                  pattern: /^[a-zA-Z\s/!@#$%^&*()]+$/,
                })}
              />
            </div>

            {
              (errors.parcelName || errors.parcelWeight || errors.from || errors.destination) &&
              <span
                className="mb-3 text-red-600 italic text-md"
              >This field is required</span>
            }

            <input
              className="px-7 py-3 rounded-lg font-semibold text-[17px] bg-[#008dda] text-white hover:text-black cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookService
