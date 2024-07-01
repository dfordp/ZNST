"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useState } from "react"

const SignInPage = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = () =>{
    console.log(email,password);
    
  }

  return (
    <div className="bg-gray-200 w-screen h-screen shadow-lg">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center min-h-screen">
          <div className="bg-white w-64 pb-4 rounded-md">
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight flex flex-row justify-center my-8">
                  Signin
              </h1>

            <div className="mt-4 px-4">
                <div>
                  Email
                  <div>
                    <Input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                </div>
            </div>
            <div className="mt-4 px-4">
                <div>
                  Password
                  <div>
                    <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  </div>
                </div>
            </div>
            <div className="mt-4 px-4 flex flex-row justify-center">
              <Button onClick={handleSubmit}>
                Continue
              </Button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
