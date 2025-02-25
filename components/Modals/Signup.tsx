import React ,{useEffect, useState}from 'react'
import { useDispatch } from "react-redux";
import { switchAuthModal } from '@/store/slices/authSlice';
import { auth } from '@/firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: '',
    displayName: '',
    password: ''
  });
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputs({...inputs,[e.target.name]: e.target.value});
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!inputs.email || !inputs.password || !inputs.displayName) return alert('Please fill all the fields');
    try{
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
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
      <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
        <h3 className='text-xl font-medium text-white '>Register to Leetclone</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Email</label>
            <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='name@comapany.com' onChange={handleOnChangeInput}/>
        </div>

        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>Display Name</label>
            <input type="displayName" name='displayName' id='displayName' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='John Doe'onChange={handleOnChangeInput}/>
        </div>

        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
            <input type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='********' onChange={handleOnChangeInput} />
        </div>
        
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>{loading?"registering...":"Register"}</button>
        
        <div className='text-sm font-medium text-gray-300'>
          Already have account?{" "}
          <a href="#" className='text-blue-700 hover:underline'onClick={()=> dispatch(switchAuthModal("login"))}>Log In</a>
        </div>
      </form>
  )
}

export default Signup;