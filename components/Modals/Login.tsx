import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { switchAuthModal } from '@/store/slices/authSlice';
import { auth } from '@/firebase/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [insputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!insputs.email || !insputs.password) return alert('Please fill all the fields');
    try{
        const newUser = signInWithEmailAndPassword(insputs.email, insputs.password);
        if(!newUser) return;
        router.push('/');
    }
    catch(error:any){
      alert(error.message);
    }
  }
  useEffect(() => {
    if(error){
      alert(error.message);
    }
  }, [error]);
  return (
      <form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
        <h3 className='text-xl font-medium text-white '>Sign In to Leetclone</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Your Email</label>
            <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='name@comapany.com' onChange={handleOnChangeInput}/>
        </div>

        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Your Password</label>
            <input type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='********' onChange={handleOnChangeInput}/>
        </div>
        
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>{loading?"Logging in...":"Log In"}</button>
        <button className='flex w-full justify-end'>
          <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right' onClick={()=> dispatch(switchAuthModal("forgotPassword"))} >Forgot password?</a>
        </button>
        <div className='text-sm font-medium text-gray-300'>
          Not Registered?{' '}
          <a href="#" className='text-blue-700 hover:underline'onClick={()=> dispatch(switchAuthModal("register"))}> Create account</a>
        </div>
      </form>
  )
}

export default Login;