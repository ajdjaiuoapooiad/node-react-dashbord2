

const Register = () => {
    return (
        <div className="min-w-screen min-h-screen bg-[#c3bdf6] flex justify-center items-center">
            <div className="w-[350px] text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
                    <p className="text-sm mb-3 font-medium">Please register your account</p>

                    <form action="">
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Name</label>
                            <input className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md" 
                            type="text" name="name" placeholder="Name" id="name" required />
                        </div>

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

                        <div className="flex items-center w-full gap-3 mb-3">
                            <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500" 
                            type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">I agree to privacy policy & treams</label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;