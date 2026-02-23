import { useRef, useState } from 'react'
import { InputBox } from '../components/InputBox'
import ButtonLoading from '../components/ButtonLoading'
import { AuthButton } from '../components/ui/AuthButton'
import { BottomWarning } from '../components/BottomWarning'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Signup() {
  const [isLoading,setLoading] = useState<boolean>(false)
  const [error,setError] = useState<string>("")
  const userNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  
  async function signup(){
    const username = userNameRef.current?.value
    const password = passwordRef.current?.value
    setLoading(true)
   try {
     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/user/signup`,{
        username,
        password
    })
    if(response.data.success){
       navigate("/signin")
    }
   } catch (err:any) {
    setError(err.response.data.message || "something went wrong") 
   }finally{
    setLoading(false)
   }
  }
  return (
         <div className="relative h-screen w-full overflow-hidden bg-gray-950">
      {/* Base background with ultra-dark symmetric gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-black  to-gray-90" />

      {/* Additional darker gray layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-750 via-transparent to-gray-850 opacity-90" />

      {/* Animated gradient orbs for subtle effect */}
      <motion.div
        className="absolute -left-20 top-1/4 w-96 h-96 bg-gray-950 rounded-full opacity-5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-20 top-1/4 w-96 h-96 bg-gray-980 rounded-full opacity-5 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
       <div className="rounded-lg h-full flex justify-center items-center">
        <div className='bg-stone-950 w-[350px] border-1 border-gray-800 relative  rounded-xl  p-6 '>
           <div className='text-2xl font-medium text-white flex justify-center mb-3'>Signup</div>
            <InputBox ref={userNameRef} title={"username"} link={"e.g virat@gmail.com"} />
            <InputBox ref={passwordRef} title={"password"} type={"password"}/>
            <div className='py-2 text-red-500 text-md'>{error}</div>
             <p className="px-8 text-center text-xs text-muted-foreground text-gray-400">
                    By signing up, you are agreeing to our{" "}
                    <Link
                      to="/terms"
                      className="hover:text-brand underline text-gray-400 hover:text-gray-200 underline-offset-4"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="hover:text-brand text-gray-400 hover:text-gray-200 underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
            <div className='pt-4 flex justify-center'><BottomWarning label="already have an account?" to="/signin" buttonText="signin"/></div>
            <AuthButton label={isLoading?<ButtonLoading/>:"signup"} onPress={signup}/>
        </div>
    </div>
    </div>
  )
}
