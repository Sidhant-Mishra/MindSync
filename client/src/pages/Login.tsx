import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Login(){
    return (
      <div className="w-screen bg-black text-white h-screen flex justify-center items-center relative">
        <div className="w-full h-full top-0 absolute">
          <img src="https://img.freepik.com/premium-photo/neuron-dark-background_921860-57869.jpg" className="w-full h-full object-cover opacity-60 grayscale" />
        </div>
        <form className="w-96 border-2 rounded-xl p-5 z-1 backdrop-blur-[3px] border-white">
          <p className="font-bold text-center text-2xl py-1">MindSync</p>
          <div className="space-y-2 pt-2 pb-5">
            <p className="text-sm font-semibold">Email</p>
            <Input type="email" required />
            <p className="pt-1 text-sm font-semibold">Password</p>
            <Input type="password" required />
          </div>
          <Button type="submit" className="w-full dark cursor-pointer">Login</Button>
          <p className="text-center pt-6 text-xs font-bold border-b"></p>
          <p className="dark text-center pt-3 pb-2">If you don't have an account? <span><Link to={`/signup`} className="cursor-pointer font-semibold pl-2.5 hover:no-underline underline">Sign Up</Link></span></p>
        </form>
      </div>
    )
}