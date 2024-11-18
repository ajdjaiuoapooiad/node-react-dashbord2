import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div className="min-w-screen min-h-screen bg-[#c3bdf6] flex justify-center items-center">
            <div className="w-[350px] text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
                    <p className="text-sm mb-3 font-medium">Please sign in your account</p>

                    <form action="">
                        

                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md" 
                            type="email" name="email" placeholder="Email" id="email" required />
                        </div>

                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <input className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md" 
                            type="password" name="password" placeholder="Password" id="password" required />
                        </div>

                    
                        <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Sign in</button>

                        <div className="flex items-center mb-3 gap-3 justify-center">
                            <p>Don't Have an account?
                            <Link className="font-bold" to='/login'>Sign up</Link>
                            </p> 
                        </div>

                        <div className="w-full flex justify-center items-center mb-3">
                            <dir className='w-[45%] bg-slate-700 h-[1px]'></dir>
                            <div className="w-[10%] flex justify-center items-center">
                                <span className="pb-1">or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center orverflow-hidden">
                                <span><FaGoogle /></span>
                            </div>

                            <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center orverflow-hidden">
                                <span><FaFacebook /></span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;