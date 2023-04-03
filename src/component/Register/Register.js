import React from 'react'
import { Link } from 'react-router-dom'

import homemain from './../../assest/img-home/homemain.png'

const Register = () => {
  return (
    <div>

    
      <div className="px-8 sm:px-12">
        <div className="sm:px-12">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House , Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Register
            </h1>
            
          
        <div className="">
        <form >
            <div className="form-control ">
                <label className="label"> <span className="label-text text-[#59DCD3]">Email Address:</span></label>
                <input type="text"
                    {...("email", {
                        required: "Email Address is required"
                    })}
                    className="py-2 px-4 sm:w-[60%]" />
                { <p className='text-red-600'>{}</p>}
            </div>



            <div className="form-control  my-8">
                <label className="label"> <span className="label-text text-[#59DCD3]">Password</span></label>
                <input type="password"
                    {...("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                    })}
                  className="my-6 py-2 px-4 sm:w-[60%] " />
                <div className="flex  items-center">
                <input type="checkbox"  className="checkbox bg-white rounded-none" />
                  <label className='text-[#59DCD3] mx-4 my-2 tracking-wide text-[14px]' htmlFor="">I have read and accept the privacy policy and allow blokBets to collect and store the data I submit through this form.</label>

                </div>
                <Link to={'/register'}><button className='text-white my-6 uppercase  rounded-none font-normal hover:bg-[#47a09a]  outline-none py-3 px-12 mr-6 border-[1px] text-[10px] border-[#59DCD3]'>SignUp</button></Link>
                      <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>Already have an account?</p>
                <Link to={'/login'}><button className=' text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-3 px-12 text-[10px] border-[1px] border-[#59DCD3]'>Login</button></Link>
               
                      </div>
                      <div className="flex w-full justify-center text-center">
                      

                      </div>
            <div className='my-6'>
                { <p className='text-red-600'>{}</p>}
            </div>
        </form>
    </div>
          

  
        </div>







      </div>

    </div>
  )
}

export default Register