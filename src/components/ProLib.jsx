import React from 'react'
import LightRays from './ReactBitsElement/LightRays'
const ProLib = () => {
    return (
        <div>
            <div className='bg-transparent text-white h-screen w-screen flex flex-col gap-10 justify-center items-center  '>

                <div style={{height : '100%' , width : "100%" , position : "fixed" , zIndex : -1 , top : 0 , left: 0 }} >

                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#00ffff"
                            raysSpeed={1.5}
                            lightSpread={0.8}
                            rayLength={1.2}
                            followMouse={true}
                            mouseInfluence={0.1}
                            noiseAmount={0.1}
                            distortion={0.05}
                            className="custom-rays"
                        />
                    </div></div>


                <div style={{position : "relative" , top : 0 , left : 0 , height : "100%" , width : "100%", zIndex : 1}} className='flex justify-center items-center flex-col gap-10' >

                    <div className=' flex justify-center items-center bg-gradient-to-br from-red-400 via-yellow-300 to-blue-500 text-7xl font-bold bg-clip-text text-transparent ' > Lost Item Library </div>
                    <div className=' flex justify-center items-center bg-gradient-to-br from-red-400 via-yellow-300 to-blue-500 text-4xl font-bold bg-clip-text text-transparent ' >Help other to get there item</div>

                    <div className=' bg-white/30 border-2 border-white/20 shadow-lg backdrop-blur-md h-[50vh] w-[90vw] rounded-3xl flex flex-nowrap shrink-0 justify-start items-center p-2 overflow-x-auto gap-10 ' >

                        <div className=' h-[90%] w-[270px]  rounded-2xl relative shrink-0 ' >
                            <img className='flex object-cover h-full w-full rounded-2xl  opacity-80 ' src='/card-img.jpeg' ></img>
                            <div className='absolute top-0 left-0 p-4 h-full w-full  rounded-2xl flex justify-between items-start flex-col ' >
                                <div className='font-bold text-2xl ' >Eye</div>
                                <div className='text-[13px]'  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, tempora!</div>
                                <div className=' flex gap-5'>
                                    <div className='font-bold bg-red-400 rounded-2xl p-1 w-[100px] flex justify-center items-center ' >23/11/2033</div>
                                    <div className='bg-gradient-to-br from-yellow-50 caret-indigo-400 to-red-300 rounded-2xl p-2 w-[100px] flex justify-center items-center '>Agra</div>
                                </div>
                                <div className='flex gap-7' >
                                    <div className='font-bold' >4567898788</div>
                                    <button className='bg-yellow-400 p-2 flex justify-center items-center rounded-2xl w-[100px] active:scale-90 ' > check </button>
                                </div>
                            </div>
                        </div>






                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProLib