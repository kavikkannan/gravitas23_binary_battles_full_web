import React from 'react'
import Sidebar from '../Components/Sidebar'
import QuestionWheel from '../Components/QuestionWheel1'
const r3 = () => {
  return (
    <div className="bg-[#010c34] min-h-[100vh]">
    <div className='w-screen overflow-auto max-h-[20%]'>
      <div className='max-w-[100%] max-h-[100%] flex justify-around'>
        {/* <sidebar /> */}
        <div className='w-[25%] max-h-[100%]' >
        <Sidebar />
        </div>
        <div className='w-[70%] max-h-[100%]'>
          <div className='max-h-[90%] m-2'>
            <QuestionWheel />
          </div>
          
        </div>
        
      </div>
      {/* <div className='h-'>
        Hello
      </div> */}
    </div>
  </div>
  )
}

export default r3