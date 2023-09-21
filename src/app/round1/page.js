'use client';
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useEffect, useState } from 'react'
import {
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { database} from '../config/firebaseConfig';
const r1 = () => {
  const [ans, setans] = useState(null);
  const [email, setemail] = useState('');
  const [uid, setuid] = useState('');

    useEffect(() => {
        const storedemail = sessionStorage.getItem('user.email');
        const storeduid = sessionStorage.getItem('user.uid');
        setemail(storedemail || '');
        setuid(storeduid || '');
    }, []);
  let user_data;
  if (email && uid) {
    user_data = doc(database, email, uid);
  } else {
    console.error('Email or UID is empty.');
  }

  const mainAns_data = doc(database, 'answer', 'q');
      const fetchFieldValue = async (a) => {
        try {
          const user_doc = await getDoc(user_data);
          const teamname = user_doc.get('name');
          const team_data = doc(database,"teams",teamname);
        
          const mainAns_doc = await getDoc(mainAns_data);
          const team_doc = await getDoc(team_data);
    
          if (mainAns_doc.exists()) {
            const mainAns = mainAns_doc.get(a);
            const userAns = user_doc.get(a);
            const teamMark = team_doc.get(a);
            
            const mark = ()=>{
              if (userAns==mainAns){
                return true;             
              }
              else {
                if(teamMark==true){
                  return true;
               }
               else{
                return false;
               }
            };
            }
            updateDoc(team_data,{
              [a]: mark()
            }
            )
            var count=0;
            const q1 = team_doc.get("r1q1");
            const q2 = team_doc.get("r1q2");
            const q3 = team_doc.get("r1q3");
            if(q1==true){
              console.log("sdgfae");
              count=count+1;
            }
            if(q2==true){
              count=count+1;
            }
            if(q3==true){
              count=count+1;
            }
            count=count*10;
            console.log(count);
            updateDoc(team_data,{
              r1mark:Number(count)
            })
            } else {
              console.log('No such document');
            }
            } catch (error) {
              console.error('Error fetching field value:', error);
            }
      };

  const addData = (a) => {
      updateDoc(user_data, { 
        [a]: Number(ans)
    })
    fetchFieldValue(a)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        console.error(err);
      })
    }
    const next = (b) => {
      router.push(b)
    }
    const logout = () => {
      sessionStorage.removeItem('Token1')
      sessionStorage.removeItem('user.email')
      sessionStorage.removeItem('user.uid')
      /* router.push('/login') */
    }
    let isTrueQ1 = false;
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
            <div className="bg-opacity-10 bg-gradient-to-b from-[#4d4f4f6a] from-10% via-[#42434462] via-30% to-[#41414100] to-100% ... text-white max-h-[100%] max-w-[100%] overflow-y-auto grid grid-rows-auto gap-0 z-0 m-2">
            <ul className={"md:flex-auto px-4 z-0 py-3"}>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center  `}>

                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>

                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
                <li className={`px-7 py-3 mb-4 mt-3 transition duration-300 ease-in-out opacity-80 transform text-center `}>
                <div className="mb-2">
                    <p className="text-white text-xl font-bold">Question 1</p>
                    </div>
                    <div className="bg-01071D p-3 rounded-md text-left">
                        <span className='mb-4'>Textbox content for Question 1</span>
                        <input
                            className="w-full h-16 bg-transparent text-white border-none focus:outline-none mt-10 bg-01071D bg-opacity-72"
                            placeholder="Enter your answer here..."
                            onChange={(e) => setans((e).target.value)}
                        ></input>
                        <button
                        onClick={() => addData('r1q1')}>
                          submit
                        </button>
                    </div>
                </li>
            </ul>

        </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default r1