import Heading from "@/components/heading";

export default function LeftSide({ children }: { children: React.ReactNode }) {
  return (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <Heading title="Bilgi" classNameTitle=" text-5xl"></Heading>
      {children}
    </div>
  );
}
