function Info() {
  return (
    <div className="p-5 md:p-7 flex flex-col items-center">
      <img
        className="ml-4 object-left h-1/3 md:h-2/5 w-full md:w-auto"
        src="/src/images/illustration-working.svg"
        alt="Ilustración de trabajo"
      />

      <h1 className="mt-8 text-3xl md:text-4xl font-poppins text-gray-700 text-center font-bold">
        More than just shorter link
      </h1>

      <p className="text-center text-gray-400 font-poppins text-sm md:text-base leading-7 font-medium">
        Build your brands recognition and get detailed insights on how your links are performing.
      </p>

      <div className="text-center">
        <button className="rounded-full p-3 m-5 bg-teal-400 text-white font-poppins text-sm font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-110">
          Get Started
        </button>
      </div>

      <div
        className="container mx-auto bg-[#3a3053] p-4 rounded-lg mt-8 flex flex-col md:flex-row relative bg-cover bg-center "
        style={{ backgroundImage: "url(/src/images/bg-shorten-mobile.svg)", backgroundSize: "cover" }}
      >
        <input
          type="text"
          className="rounded-md p-2 m-2 flex-grow"
          placeholder="Shorten a link here..."
          required
        />
        <button className="rounded-md p-3 m-2 bg-teal-400 text-white font-poppins text-sm font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-110">
          Shorten It!
        </button>
      </div>

      <div className="flex justify-center items-center mt-8">
        <h1 className="mt-8 text-3xl md:text-4xl font-poppins text-gray-700 text-center font-bold">
          More than just shorter link
        </h1>

        <p className="text-center text-gray-400 font-poppins text-sm md:text-base leading-7 font-medium">
          Build your brands recognition and get detailed insights on how your links are performing.
        </p>
      </div>
    </div>
  );
}

export default Info;