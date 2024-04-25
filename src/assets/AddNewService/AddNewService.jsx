import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function AddNewService() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = newService => {
    fetch('https://sain-courier-service-server.onrender.com/add-new-service', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newService)
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {
          alert("Added successfully");
          navigate('/services');
        }
      })
  }

  return (
    <div className='flex justify-center mt-40'>
      <div className='w-1/2 flex justify-center px-5 py-5 rounded-lg' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }} >
        <div className="w-2/3 py-10">
          <h2 className="underline underline-offset-4 mb-5 flex justify-center text-3xl font-bold text-[#008dda]">Add New Service</h2>
          <form
            className='flex flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //service name */}
            <input
              className='border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight'
              placeholder="Service Name"
              {...register("name", {
                required: true
              })}
            />
            {/* //details */}
            <input
              className='border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight'
              placeholder="Service Details"
              {...register("details", {
                required: true
              })}
            />
            {/* //image */}
            <input
              className='border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight'
              placeholder="Image link"
              {...register("image", {
                required: true
              })}
            />
            {/* //charge */}
            <input
              className='border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight'
              placeholder="Charge (Ex. 150 tk/kg)"
              {...register("charge", {
                required: true
              })}
            />
            {/* //deliverySpeed */}
            <input
              className='border border-gray-400 text-gray-500 rounded-lg w-full px-7 py-3 font-semibold mb-3 leading-tight'
              placeholder="Delivery time (Ex. 3 to 7 days)"
              {...register("deliverySpeed", {
                required: true
              })}
            />

            {
              (errors.name || errors.details || errors.image || errors.name || errors.charge || errors.deliverySpeede)
              &&
              <span className='mb-3 text-red-600 italic text-md'>This field is required</span>
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

export default AddNewService
