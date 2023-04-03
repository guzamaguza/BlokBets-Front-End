import React from 'react'
import { Link } from 'react-router-dom'

const CryptoWallet = () => {
  return (
      <div className='px-8 sm:px-12  py-14'>
          <div className="sm:px-12">
          <div className=" 	">
        <p className='text-[#59DCD3] my-2 tracking-wide text-[14px]'>
               Eliminate The House , Unleash Profit Protential
              </p>
              <h1 className='text-[30px] sm:leading-[50px] mb-6 text-white	 sm:text-[50px] font-semibold '>Link Crypto Wallet
            </h1>
            <Link to={'/betaccept'}><button className='  text-white uppercase  rounded-none font-normal hover:bg-[#47a09a] outline-none py-2 px-[60px] text-[10px]  text-normal border-[1px] leading-[20px]  border-[#59DCD3]'>Link Crypto <br /> wallet</button></Link>


          </div>
              


          </div>
          

    </div>
  )
}

export default CryptoWallet