import React, { forwardRef, useState } from "react";
import { FaSquare } from "react-icons/fa";
import CommonBtn from "../../Components/CommonBtn";
import { SlCalender } from "react-icons/sl";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingSection() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const booking = {
      name: data.name,
      email: data.email,
      reservationDate: data.reservationDate,
      totalPeople: data.totalPeople,
      message: data.message,
    };
    console.log(booking);
  };

  const currentDate = new Date(); // Get current date and time

  const formattedDate = currentDate.toLocaleDateString();
  const [startDate, setStartDate] = useState(formattedDate);

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="relative block pl-4 pr-4 py-2 bg-gray-950 border-2 border-slate-300 rounded-sm w-full cursor-pointer"
      onClick={onClick}
      ref={ref}
    >
      {value || "Reservation Date"}
      <span className="absolute inset-y-0 right-4 flex items-center pl-3">
        <SlCalender className="text-xl text-gray-400" />
      </span>
    </div>
  ));

  return (
    <div className="text-white p-5 lg:w-[75%] mx-auto sm:w-[90%]">
      {/* ------------- Booking Title ------------------ */}
      <div className="my-3 lg:w-1/2 flex justify-center lg:justify-start">
        <div>
          <div className=" text-primary my-2 font-bold text-sm">
            <FaSquare className="inline text-xs m-1 mb-2" />
            Book Now
          </div>
          <div className="babas-font text-4xl">BOOK YOUR TABLE</div>
          <div className="my-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            quaerat natus eaque qui similique perspiciatis!
          </div>
        </div>
      </div>

      {/* --------- Booking Form --------------------- */}
      <div className="lg:w-[65%] sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              required
              name="name"
              {...register("name", { required: true })}
              className="bg-gray-950 border-2 border-slate-300 rounded-sm p-2"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              {...register("email")}
              className="bg-gray-950 border-2 border-slate-300 rounded-sm p-2"
            />

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className=""
              placeholderText="Reservation date"
              customInput={<CustomInput />}
              portalId="datepicker-portal"
            />
            <input
              type="number"
              className="pl-4 pr-4 py-2 bg-gray-950 border-2 border-slate-300 rounded-sm w-full"
              placeholder="Total People"
              required
              name="totalPeople"
              {...register("totalPeople", { required: true })}
            />
          </div>
          <div className="my-4">
            <textarea
              name="message"
              {...register("message")}
              id=""
              placeholder="Message"
              className="w-full bg-gray-950 border-2 border-slate-300 rounded-sm pl-5 textarea"
            ></textarea>
            <div type="submit" className="my-3">
              <CommonBtn>Book now</CommonBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingSection;
