import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const LandingCard = () => {
  const imageSrc =
    "https://images.freeimages.com/images/premium/previews/2135/21359184-student-with-a-teacher-in-classroom.jpg";

  return (
    <div className="bg-rose-100">
      <Container className="flex flex-col justify-center lg:flex-row md:h-[300px] lg:h-[500px] items-center">
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 pb-8">
          <h1 className="text-5xl te text-center font-bold text-black mb-4">
            Sizin icin en iyi öğretmeni bulun.
          </h1>
          <div className="flex justify-center">
            <Button className="bg-rose-400 w-1/3 text-lg text-white py-2 px-4 transition rounded hover:bg-rose-400">
              ÖĞRETMEN BUL
            </Button>
          </div>
        </div>
        <div className="hidden sm:mr-8 lg:ml-12 lg:w-1/3 mt-2 lg:mt-0 lg:flex justify-center relative">
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
      </Container>
    </div>
  );
};

export default LandingCard;
