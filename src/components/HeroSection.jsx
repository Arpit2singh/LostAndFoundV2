import React from 'react'
import MetaBalls from './ReactBitsElement/MetaBalls'


const HeroSection = () => {
    return (
        <div className=' h-[90vh] w-screen' >
            <div className='text-white p-4 flex'>
                <div className='border-4  h-[90%] w-[50%] font-bold text-9xl flex justify-start items-center bg-gradient-to-br from-blue-500 via-yellow-300 to-red-400 bg-clip-text text-transparent' >Lost And Found  </div>
                <div className=' text-white h-[90vw] w-[50%] rounded-2xl ' >
                    <MetaBalls 
                        color="#5109b5" 
                        cursorBallColor="#FFC880"
                        cursorBallSize={2}
                        ballCount={20}
                        animationSize={10}
                        enableMouseInteraction={true}
                        enableTransparency={true}
                        hoverSmoothness={0.05}
                        clumpFactor={1}
                        speed={0.3}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection