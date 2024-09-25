import Heading from "@/components/heading";

type THowItWorks = {
  title: string;
  subtitle: string;
  classNameNumber?: string;
  image?: string;
};

export default function Card({
  title,
  subtitle,
  image,
}: THowItWorks) {
  return (
    <div className="flex lg:p-8 p-3 min-w-72 flex-col border shadow-lg rounded-xl border-black lg:gap-3 w-screen lg:w-full  justify-center">
      <div >
        <div className="lg:text-lg text-m flex justify-between">
        <Heading classNameTitle="lg:text-4xl text-2xl" classNameSubtitle="lg:text-l text-s" title={title}/>

{       image &&   <img
            src={image}
            alt={title}
            className="h-20 hidden lg:flex rounded-full"
          />}
        </div>
      </div>
      <div>
        <Heading
          classNameSubtitle="lg:text-l text-s"
          subtitle={subtitle}
        />
      </div>
    </div>
  );
}
