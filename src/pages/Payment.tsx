import Navbar from "../components/Navbar"
import charity from "../assets/images/charity_perfect.png"
import paystack from "../assets/images/b62134597d6b6bdd7b1ffb24e7c351362cf57463.png"
import gofundme from "../assets/images/53cb91bf5ed084f3f48509443906217ff9a63b38.png"
import { useNavigate } from "react-router-dom"

const Payment = () => {
    const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <hr className="border border-gray-100 w-full rounded-lg" />
    <div className="px-6 md:px-10 lg:px-15 py-8 lg:py-10 text-[32px] md:text-[40px] lg:text-[48px] font-medium">
        Payment Details
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
            <div className="flex flex-col gap-6 mt-6 w-full lg:w-[55%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-[14px] lg:text-[16px] text-gray-700 uppercase tracking-wide block ">First Name</label>
                    <input type="text" placeholder="e.g. Bryan" className="w-full border border-gray-200 bg-gray-100 rounded-lg px-5 py-4 lg:py-6 text-xs text-gray-700 placeholder-gray-500 outline-none focus:border-gray-700" />
                </div>
                <div>
                    <label className="text-[14px] lg:text-[16px] text-gray-700 uppercase tracking-wide block ">Last Name</label>
                    <input type="text" placeholder="e.g. Wayer" className="w-full border border-gray-200 bg-gray-100 rounded-lg px-5 py-4 lg:py-6 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700" />
                </div>
                </div>

                <div>
                <label className="text-[14px] lg:text-[16px] text-gray-700 uppercase tracking-wide block ">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg bg-gray-100 px-5 py-4 lg:py-6 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700" />
                </div>
                <div>
                <label className="text-[14px] lg:text-[16px] text-gray-700 uppercase tracking-wide block ">Role</label>
                <select className="w-full border border-gray-200 rounded-lg px-5 py-4 lg:py-6 text-xs text-gray-400 bg-gray-100 outline-none focus:border-gray-700 appearance-none">
                    <option value="" disabled selected>Select a role</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partner">Partnering</option>
                    <option value="donate">Donating</option>
                </select>
                </div>
                <p className="text-[14px] lg:text-[16px] pt-6 text-gray-700 uppercase tracking-wide block">AVAILABLE PAYMENT METHODS</p>
                <div className="flex flex-row items-center justify-center gap-4">
                    <div className="border border-gray-200 h-28 lg:h-36 rounded-2xl p-4 lg:p-10 flex justify-center items-center">
                        <img loading="lazy" className="size-40 lg:size-60 object-contain" src={paystack} alt="" />
                    </div>
                    <div className="border border-gray-200 h-28 lg:h-36 rounded-2xl w-1/2 p-1 lg:px-8 lg:py-4 flex flex-col justify-center items-center">
                        <img loading="lazy" className="size-20 lg:size-45 object-contain" src={gofundme} alt="" />
                        <p className="italic text-xs w-full flex items-center justify-center text-[#1a5c2e] pb-6">**Coming Soon</p>
                    </div>
                </div>
                <button onClick={() => navigate(-1)} className="mt-4 text-[16px] flex items-start justify-start text-[#1a5c2e] hover:underline">
                    ← Go back
                </button>
                <button className="w-full py-4 lg:py-6 rounded-lg text-white text-[16px] lg:text-[18px] font-semibold flex items-center justify-center gap-3 mt-4" style={{ backgroundColor: '#1C5035' }}>
                Start Now →
                </button>
            </div>
            <div className="hidden lg:flex w-[45%] h-[60vh] items-center justify-center">
                <img loading="lazy" className="size-120 object-contain" src={charity} alt="" />
            </div>
        </div>

    </div>
    </>
  )
}

export default Payment