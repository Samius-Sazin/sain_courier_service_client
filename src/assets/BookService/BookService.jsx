import { useForm } from "react-hook-form"

function BookService() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className='flex justify-center mt-40'>
      <div className='w-1/2 flex justify-center px-5 py-5' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }} >
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              defaultValue="test" {...register("example")} />

            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              {...register("exampleRequired", { required: true })} />

            {
              errors.exampleRequired &&
              <span
                className="text-red-500 text-md"
              >This field is required</span>
            }

            <input
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookService
