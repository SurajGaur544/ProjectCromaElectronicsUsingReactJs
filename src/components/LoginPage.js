import React, { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';

function LoginPage( props ) {
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        emailId: '',
        password: '',
        appType:''
    })

    const handleChange = (e) => {
        let value = e.target.value;
        let propertyName = e.target.name;
        setData({...data, [propertyName]: value});
        
    }

    const handleClick = (e) => {
      e.preventDefault();
      props.onClick(data);
    }

    const handleData = async(e) => {
        e.preventDefault();
        try{
            setIsLoading(true)
            const res = await fetch('https://academics.newtonschool.co/api/v1/user/login',{
              method:'POST',
              headers: {
                projectID: 'tpe45ahovz01',
                "Content-Type": "Application/json",
                "Accept": "Application/json"
              },
              body: JSON.stringify ({
                email: data.emailId,
                password: data.password,
                appType:data.appType
                
              })
    
    
            })
            const result = await res.json();
            setIsLoading(false);
            console.warn(result);
          }catch(err){
            console.warn(err);
          }
          if(data.emailId.length < 1 || data.password.length < 1){
            setError(true);
          }else{
            setError(false);
          }
    }

    const handleShowHide = () =>{
        !flag ? setFlag(true) : setFlag(false)
    }
  return (
    <div className='absolute bg-black text-white flex justify-center flex-col z-50 items-center p-10 gap-4 z-50' >
        <div className='flex justify-center flex-col items-center p-2 gap-8 min-w-96'>
            <h1 className='flex justify-center items-center w-full border rounded py-2 font-bold text-xl'>LOGIN</h1>
            <p className='font-bold'>Please enter your Email ID and Password</p>
            <div className='flex justify-center items-center w-full  flex-col gap-8' >
                <input 
                    type='text' 
                    name='emailId'
                    value={data.emailId}
                    onChange={handleChange}
                    placeholder='Enter your email id'
                    className='bg-black text-white p-2 px-4 border rounded w-full'
                />
                <input 
                    type='text' 
                    name='appType'
                    value={data.appType}
                    onChange={handleChange}
                    placeholder='Enter your appType'
                    className='bg-black text-white p-2 px-4 border rounded w-full'
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
                { error && <p>Please enter correct email and password</p>}
            </div>
            <div onClick={handleClick} className='flex justify-center items-center flex-row gap-2'>
                <p>New to Croma?</p><Link to='/SignUp'  className='text-cyan-400 underline' >Create account</Link>
            </div>
            <submit 
                type="submit"
                onClick={handleData}
                className='flex justify-center items-center rounded bg-cyan-400 hover:bg-cyan-600  text-black font-bold  w-full p-2 cursor-pointer'
            >Submit</submit>
        </div>
    </div>
  )
}

export default LoginPage