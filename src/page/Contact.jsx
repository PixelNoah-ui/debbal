import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    toast.success("Your message is sent  successfully");
    reset();
  }
  return (
    <div className="w-full bg-gray-50 ">
      <div className="bg-black bg-opacity-80 text-white px-6 py-24 text-center">
        <h1 className="text-blue-400 font-bold flex items-center justify-center text-4xl">
          Your Vision, Our Expertise – Reach Out Today
        </h1>
        <p className="text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Whether you have a project in mind or just want to explore
          possibilities, our team at Debbal is ready to listen, advise, and
          collaborate. We're here to turn your ideas into reality.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Send us a message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="flex items-center gap-2 bg-gray-100  px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <HiOutlineUser className="text-blue-600" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent py-2 outline-none text-sm"
                  {...register("name", { required: "This field is required" })}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="flex items-center gap-2 bg-gray-100  px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <HiOutlineMail className="text-blue-600" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent py-2 outline-none text-sm"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex items-center gap-2 bg-gray-100  px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <HiOutlinePhone className="text-blue-600" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent py-2 outline-none text-sm"
                  {...register("phone_number", {
                    required: "This field is required",
                    pattern: {
                      value: /^(?:\+2519\d{8}|09\d{8})$/,
                      message: "Invalid Ethiopian phone number",
                    },
                  })}
                />
              </div>
              {errors.phone_number && (
                <p className="text-sm text-red-500">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full bg-gray-100  px-3 py-2 outline-none text-sm focus:ring-2 focus:ring-blue-400"
                {...register("message", { required: "This field is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <HiOutlineLocationMarker className="text-blue-600" />
              Our Location
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12645.123456789!2d38.7468!3d9.0332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b844f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sBeto%20Commercial%20Center%2C%20Piassa%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Debbal Office Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-sm text-gray-600">
                    Beto 7th floor, Piassa, Addis Ababa,
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlinePhone className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600">+(251) 910-50-7045</p>
                  <p className="text-sm text-gray-600">+(251) 915-40-8683</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineMail className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">contact@debbal.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
