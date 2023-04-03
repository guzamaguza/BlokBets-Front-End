import React from 'react'
import david from './../../assest/img-home/david.png'
import arrow1 from './../../assest/img-home/Arrow 1.png'
import arrow3 from './../../assest/img-home/Arrow 3.png'
import arrow4 from './../../assest/img-home/Arrow 4.png'


import metamask from './../../assest/img-home/metamask.png'
import Coinbase from './../../assest/img-home/Coinbase.png'
import Hands from './../../assest/img-home/Hands Compass.png'
import Vector11  from './../../assest/img-home/Vector11.png'





const HeroImage = () => {
  return (
      <div className='bg-[black] px-8 sm:px-12 py-12'>
          <div className="sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="flex items-center">
                  <div className="w-[252px] flex flex-col  items-center"><img className=' w-[175px] h-[175px]' src={david} alt="" /> <h1 className='mt-[-15px]'>Sign Up</h1></div>
                  
                  <div className=""><img className='w-[120px]' src={arrow1} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
                  <div className=" flex flex-col justify-center items-center"><img className='w-[128px]' src={Coinbase} alt="" /> <h1 className='mt-6 '>Link Crypto Wallet</h1></div>
                  
                  <div className="pb-4">< img className='mx-4 w-[128px] mt-[-30px]' src={metamask} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
              <div className=""><img className='w-[300px]' src={arrow1} alt="" /></div>
                  
                  <div className="px-4"><p className='text-[32px] leading-[46px] uppercase'>Select a bet and 
crypto wager</p></div>
              </div>
          </div>






          <div className="sm:px-12 mt-8 mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="flex items-center">
                  <div className="w-[252px] "><h1 className='text-center text-[25px] leading-[46px] uppercase'>Winning Pool is Paid 
OUT 
proportiona <br /> lly from 
the Losers Pool </h1></div>
                  
                  <div className=""><img className='w-[120px] mx-3' src={arrow3} alt="" /></div>
              </div>
              <div className="flex items-center mt-4">
                  <div className=" flex flex-col justify-center items-center"><img className='w-[128px]' src={Hands} alt="" /> <h1 className='mt-6 '>Link Crypto Wallet</h1></div>
                  
                  <div className="pb-4">< img className='mx-4 w-[128px] mt-[-30px]' src={arrow3} alt="" /></div>
              </div>
              <div className="flex items-center justify-center mt-4">
                  <div className="flex-col justify-center">
                      <img className= 'mx-auto h-[120px]' src={arrow4} alt="" />
                      <div className="w-[252px]">
                      <h1 className='text-center text-[25px] leading-[46px] uppercase'>
                      All Wager amounts 
are held in a 
decentralized pool 
until results post</h1>
                      </div>

                 </div>
              </div>
          </div>


          <div className="sm:px-12  flex items-center mt-4">
                  <div className="flex-col justify-center">
                      <img className= 'mx-auto h-[120px]' src={arrow4} alt="" />
                      <div className="">
                       <img className='mt-4 w-[122px]' src={Vector11} alt="" />
                      </div>

              </div>
              <div className="w-[252px] mt-[100px] mx-4 sm:mx-0"><h1 className='text-center text-[25px] leading-[46px] uppercase'>earnings 
Automatically 
Passed into <br /> crypto 
Wallet</h1></div>
                  
              </div>

    </div>
  )
}

export default HeroImage