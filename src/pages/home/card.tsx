import Heading from "@/components/heading";

type THowItWorks = {
    title:string,
    subtitle:string,
    number:number,
    image:string,
    classNameNumber?:string
}




export default function Card({title, subtitle, number, image, classNameNumber}:THowItWorks){
    return(
            <div className="flex p-8 flex-col border rounded-xl border-black gap-3 md:w-full w-screen justify-center">
                <div className="w-full">
                <div className="  md:text-lg text-m   flex"><p className={`rounded-xl px-4 py-2 `+ classNameNumber}>{number}</p></div>

                </div>
                <div>
                    <Heading classNameTitle="md:text-4xl text-2xl" classNameSubtitle="md:text-l text-s" title={title} subtitle={subtitle} />
                </div>
                <img alt="image" className="max-w-[200px] md:max-w-full rounded-xl md:w-full" src={image} />
                    

            </div>
    )
}