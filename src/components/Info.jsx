function Info() {
  return (
    <div className="p-7">
  <img className="ml-4" src="/src/images/illustration-working.svg" alt="work" />
         <h1 className="mt-8  text-4xl font-poppins text-gray-700 text-center font-bold">More than just shorter link</h1>
         <p className="text-center text-gray-400 font-poppins text-sm leading-7 font-medium">Build your brands recognition and get detailed insights on how your links are performing.</p>
         <button className="rounded-full p-3 m-5 bg-teal-400 text-white font-poppins text-sm font-semibold ml-20 hover:bg-teal-600 transition-all duration-300 hover:scale-110">Get Started</button>
<div className="container mx-auto bg-slate-900 p-4 rounded-lg">
<input type="text" className="rounded-lg p-2 m-2" placeholder="Shorten a link here..." required="Please add a link"></input>
<button className="rounded-lg p-6 m-6 bg-teal-400 text-white font-poppins text-sm font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-110"></button>
</div>
</div>    
  )
}






export default Info
