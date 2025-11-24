import React, { useState } from 'react'
import LiquidEther from './ReactBitsElement/LiquidEther';

const AddPro = () => {

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [date, setdate] = useState("");
    const [file, setfile] = useState(null);
    const [LostLocation, setLostLocation] = useState("");
    const [ContactNo, setContactNo] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(description)
        console.log(date)
        console.log(file)
        console.log(LostLocation)
        console.log(ContactNo)
        console.log("form submitted")
    }


    return (


        <div>
            <div style={{zIndex : -1 , position : "fixed" , top : 0 , left : 0 , }} >
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>
            <div className='bg-gradient-to-tr from-red-500 via-purple-500 to-blue-900 bg-clip-text text-transparent text-8xl font-extrabold flex justify-center items-center p-4 ' style={{zIndex : 3 , position : "relative" , top : 0 , left : 0 , }} >Add A Product</div>
            <div className=' flex justify-center items-center h-screen w-screen   ' style={{zIndex : 1 , position : "relative" , top : 0 , left : 0 , }} >
                <div className='flex h-[60vh] w-[60vw] rounded-3xl justify-center items-center border-white/20 border-2 bg-white/20 backdrop-blur-md shadow-lg  ' >
                    <form onSubmit={formHandler} className='flex flex-col  gap-5 '>

                        <div className=' flex gap-10 justify-center items-center'>
                            <div className=' ' >


                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Name</label>
                                    <input
                                        onChange={(e) => (setname(e.target.value))}
                                        value={name}
                                        className="border rounded-lg px-3 py-2 text-black placeholder:text-gray-500"
                                        placeholder="Enter the product name"
                                        type="text"
                                    />
                                </div>

                                {/* Description */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Description</label>
                                    <input
                                        onChange={(e) => (setdescription(e.target.value))}
                                        value={description}
                                        className="border rounded-lg px-3 py-2 text-black placeholder:text-gray-500"
                                        placeholder="Enter the product description"
                                        type="text"
                                    />
                                </div>

                                {/* Lost Date */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Lost Date</label>
                                    <input
                                        onChange={(e) => (setdate(e.target.value))}
                                        value={date}
                                        className="border rounded-lg px-3 py-2 text-black"
                                        type="date"
                                    />
                                </div>
                            </div>
                            <div>

                                {/* Lost Location */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Lost Location</label>
                                    <input
                                        onChange={(e) => (setLostLocation(e.target.value))}
                                        value={LostLocation}
                                        className="border rounded-lg px-3 py-2 text-black placeholder:text-gray-500"
                                        placeholder="Enter lost location"
                                        type="text"
                                    />
                                </div>

                                {/* Contact No */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Contact No.</label>
                                    <input
                                        onChange={(e) => (setContactNo(e.target.value))}
                                        value={ContactNo}
                                        className="border rounded-lg px-3 py-2 text-black placeholder:text-gray-500"
                                        placeholder="Enter contact number"
                                        type="tel"
                                    />
                                </div>

                                {/* Product Photo */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Product Photo</label>
                                    <input
                                        onChange={(e) => (setfile(e.target.files[0]))}

                                        className="border rounded-lg px-3 py-2"
                                        type="file"
                                        accept="image/*"
                                    />
                                </div>
                                <div className="flex flex-col gap-1" >
                                    <button type='submit' className='bg-red-500  text-white active:scale-95 p-5 h-[40px] w-[200px] rounded-2xl flex justify-center items-center '>Submit</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddPro