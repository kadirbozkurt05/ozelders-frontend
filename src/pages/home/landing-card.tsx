import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const LandingCard = () => {
  const imageSrc =
    "/pic0.png";

  return (
      <div className="flex lg:ml-32 lg:mr-48 flex-col justify-center lg:flex-row lg:h-[300px] lg:h-[500px] items-center">
        <div className="order-2 lg:order-1 mt-8 lg:mt-0 w-full lg:w-1/2 pb-8">
          <h1 className="text-5xl te text-center font-bold text-black mb-4">
            Sizin icin en iyi öğretmeni bulun.
          </h1>
          <div className="flex justify-center">
            <Button className="bg-rose-400 w-1/2 text-lg text-white py-2 px-4 transition rounded hover:bg-rose-400">
              ÖĞRETMEN BUL
            </Button>
          </div>
        </div>
        <div className=" order-1 lg:order-2 sm:mr-8 lg:ml-12 lg:w-1/3 mx-12 mt-2 lg:mt-0 lg:flex justify-center relative">
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
          <div className="relative w-full z-10">
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

export default LandingCard;
