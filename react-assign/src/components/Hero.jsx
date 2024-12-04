import React from "react";


const Hero = () => (
    <div className="relative h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('/Img.png')", // Replace with your image URL
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col px-20 py-10  text-white">
            <p className="text-[#0FF1F6] text-lg mt-20">AI SDRs (aiDRs)</p>

            <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold mt-3">More leads, <br /> less people.</h1>
            <p className="text-base sm:text-sm mt-3 text-[#FFFFFF]">Train an aiDR on your ICP and messaging matrix. <br /> Activate it on a patch. It will send personalized <br /> sequences to every target contact.</p>
            <button className="bg-[#0FF1F6] text-black px-4 py-2 rounded-xl mt-5 hover:bg-blue-950 hover:text-white">Sign up for beta</button>
            
            
        </div>
        
    </div>
  );
  
  export default Hero;