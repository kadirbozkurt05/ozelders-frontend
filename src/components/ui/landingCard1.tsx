import * as React from "react";
import { Button } from "@/components/ui/button";

const LandingCard1 = () => {
  const imageSrc = "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=900/https://static.preply.com/static/ssr/_next/static/images/hero-23-0802150dbe518540999c5757ad16d400.jpg"; 

  return (
    <div className="flex flex-col md:flex-row md:h-[500px] items-center  bg-green-300 p-8">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold text-black mb-4">
          En iyi öğretmenlerden özel ders almaya başla.
        </h1>
        <div className="flex justify-center">
        <Button className="bg-black w-2/3 text-lg text-white py-2 px-4 rounded mt-16">
          ÖĞRETMEN BUL
        </Button>

        </div>
        
      </div>
      <div className="md:w-1/3 md:h-2/3  mt-8 md:mt-0 hidden md:flex justify-center relative">
        <div className="absolute transform translate-x-28 translate-y-8 w-9/12 z-0">
          <img 
            src={imageSrc} 
            alt="Language Tutor" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute transform translate-x-16 translate-y-6 w-10/12 z-10">
          <img 
            src={imageSrc} 
            alt="Language Tutor" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-full z-20">
          <img 
            src={imageSrc} 
            alt="Language Tutor" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingCard1;
