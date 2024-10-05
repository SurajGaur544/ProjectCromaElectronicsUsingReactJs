import React, { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";
import Header from './Header';
import '../App.css';

const SignUp = () => {
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
      name: '',
      emailId: '',
      password:'',
      appType:''
    });

    const handleChange = (e) => {
      var value = e.target.value;
      var propertyName = e.target.name;
      setData({...data, [propertyName]: value})
    }

    const handleData = async(e) =>{
      e.preventDefault();
      try{
        setIsLoading(true)
        const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup',{
          method:'post',
          headers: {
            projectID: 'tpe45ahovz01',
            "Content-Type": "Application/json",
            "Accept": "Application/json",
          },
          body: JSON.stringify ({
            name: data.name,
            email: data.emailId,
            password: data.password,
            appType: data.appType
          })

          
        })
      

       
        const result = await res.json();
        setIsLoading(false);
        console.warn(result);

        if(result.token){
          localStorage.setItem('user',JSON.stringify(result.user));
          localStorage.setItem('token',JSON.stringify(result.token));
          navigator('/');
        }else{
         alert("Please Enter Correct Details")
        }
      }catch(err){
        console.warn(err);
      }
      if(data.name.length < 1 || data.emailId.length < 1 || data.password.length < 1){
        setError(true);
      }else{
        setError(false);
      }

    }

    const handleShowHide = () =>{
        !flag ? setFlag(true) : setFlag(false)
    }
  return (
    <> 
     <Header />
       <br /> <br /> <br />
    <div className=' bg-transparent text-white flex justify-center flex-col h-full z-50 items-center p-10 gap-4 z-50' >
     
        <div className='flex justify-center flex-col items-center p-2 gap-8 min-w-96'>
            <h1 className='flex justify-center items-center w-full py-2 font-bold text-xl'>SIGN UP</h1>
            <p className='font-bold'>Please enter your Username, Email ID and Password</p>
            <div className='flex justify-center items-center min-w-80  flex-col gap-8' >
                <input 
                    type='text' 
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                    className='bg-transparent text-white p-2 px-4 border rounded w-full'
                />
                <input 
                    type='text'
                    name='emailId' 
                    value={data.emailId}
                    onChange={handleChange}
                    placeholder='Enter your email id'
                    className='bg-transparent text-white p-2 px-4 border rounded w-full'
                />
                <input 
                    type='text'
                    name='appType' 
                    value={data.appType}
                    onChange={handleChange}
                    placeholder='Enter your appType'
                    className='bg-transparent text-white p-2 px-4 border rounded w-full'
                />
                <div className='flex justify-center items-center flex-row border pr-4 rounded w-full' >
                    <input 
                        type={flag ? 'text' : 'password'}
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                        placeholder='Enter your password'
                        className='bg-black text-white p-2 px-4 w-full border-none bg-transparent outline-none' 
                    />
                    {flag ? <BiHide onClick={handleShowHide} className='cursor-pointer' /> : <BiShow onClick={handleShowHide} className='cursor-pointer' /> }
                </div>
                {error && <p>Please enter value</p>}
            </div>
            
            <submit 
                type="submit"
                onClick={handleData}
                className='flex justify-center items-center rounded bg-cyan-300 hover:bg-cyan-400 text-black font-bold  w-full p-2 cursor-pointer'
                id='Button'
            >Sign Up</submit>
        </div>
    </div>
    </> 
  )
}

export default SignUp;