import Image from "next/image"
import signIn from "../../public/assets/signIn.png"

export default function Home() {
  return (
    <section className="h-screen">
<div>
  <div className="flex justify-around shadow-xl h-30">
    <h1 className="text-gray-900 text-3xl mr-auto font-bold pl-10 mt-2">naira
    <span className="text-orange-700">refill</span>
    </h1>
    <div className="mr-5">
      <button className="bg-orange-600 text-white m-3 h-6 border rounded-lg text-sm w-[100px]">Register</button>
    <button className="bg-white-600 text-orange-600 m-3 h-6 border rounded-lg text-sm w-[100px] cursor-pointer hover:bg-orange-600 hover:text-white">Login</button>
    </div>

  </div>

  <div className="flex flex-row justify-center gap-40 mt-10 sm:mt-0 items-center">
          <div>
            <h3 className="text-1xl font-bold">We've Missed You</h3>
            <br />
            <p className="text-sm ">
              Kindly signin and get first <br /> access to the very best, <br /> community and
              unlock more <br /> opportunities.
            </p>
            <br />
            <label className="text-gray-600 text-sm">Email:</label>
            <div><input type="email" className="border-2 outline-none border-gray-400 h-8 " /></div>
                <br />
            <label className="text-gray-600 text-sm">Password:</label>
           <div><input type="password" className="border-2 outline-none border-gray-400 h-8 " /></div> 
                <br />
           <div>
           <button className="w-[228px] bg-orange-600 text-white font-mono">Login</button>
            </div> 
                <br />
            <div className="text-xs">Forgot username or password</div>
            <br />
            <div className="text-xs">Don't have an account? <a href="" className="text-blue-600">Sign Up</a></div>
          </div>

          <div>
            <Image src={signIn} alt="signIn"  className="ml-20 w-[400px] h-[400px]"/>
          </div>
        </div>
</div>

</section>
  )
}
