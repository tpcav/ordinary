import React from 'react'
import Keyboard from '../app/dashboard/Keyboard'

export default function test1() {
  return (
    <div className='h-screen w-screen bg-gray-200 items-center text-center'>

      <div className="">
        <div className='bg-white p-4'>
          <h1 className="text-4xl font-black">ORDNARY
            <span className='text-lg font-semibold'>by Thomas Cavalcante</span>
          </h1> 
        </div>
      </div>

      <div className="grid grid-cols m-auto p-14 justify-center bg-gradient-to-br from-red-200 via-red-300 to-orange-300">
        <div className="flex justify-center justify-self-center mx-auto text-black text-center text-lg">
        <div className='flex items-center content-center text-center'>
            <div className="grid items-center content-center w-100">
                <div className="inline-flex items-center mt-10">
                  <div className="flex font-semibold items-center w-12 h-12 p-2 bg-gray-200 border-2 border-gray-300">W</div>
                  <div className="flex font-semibold items-center w-12 h-12 p-2 bg-gray-200 border-2 border-gray-300">O</div>
                  <div className="flex font-semibold items-center w-12 h-12 p-2 bg-gray-200 border-2 border-gray-300">R</div>
                  <div className="flex font-semibold items-center w-12 h-12 p-2 bg-gray-200 border-2 border-gray-300">D</div>
                </div>
                <div className="inline-flex">
                  <div className="flex font-bold items-center w-12 h-12 p-2 bg-gray-100 border-2 border-gray-300"></div>
                  <div className="flex font-bold items-center w-12 h-12 p-2 bg-gray-100 border-2 border-gray-300"></div>
                  <div className="flex font-bold items-center w-12 h-12 p-2 bg-gray-100 border-2 border-gray-300"></div>
                  <div className="flex font-bold items-center w-12 h-12 p-2 bg-gray-100 border-2 border-gray-300"></div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols justify-center text-3xl text-white text-center fixed inset-x-0 bottom-0 p-10">
        <div className="flex justify-center justify-self-center mx-auto text-black text-center text-lg">
        <div className='flex place-items-center content-center text-center'>
            <div className="grid items-center content-center w-100">
                
            </div>
          </div>

        </div>
      </div>

      <Keyboard/>
        
    </div>
  )
}
