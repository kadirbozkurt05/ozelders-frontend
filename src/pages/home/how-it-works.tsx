import Card from "./card";


const image = "https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=690/https://static.preply.com/static/ssr/_next/static/images/card-2-da929e1032468274fff3c7a827157232.jpg";


export default function HowItWorks(){
    return(
        <div className="mt-4">
            <div className=" md:text-5xl text-3xl font-bold mb-3">NASIL ÇALIŞIR?</div>
            <div className="flex w-full overflow-x-auto flex-nowrap lg:flex-row gap-3">
            <Card title="Öğretmenini Bul" classNameNumber="bg-rose-300" number={1} subtitle="Aradığın kriterlere uygun öğretmeni sitemizde bulman çok kolay. İstenilen bilgileri gir ve en iyi öğretmenleri senin için bulalım." image={image}/>
            <Card title="İletişime Geç" classNameNumber="bg-blue-300" number={2} subtitle="Aradağın öğretmeni buldun mu? Harika! Şimdi öğretmene mesaj atabilir veya doğrudan telefonla ulaşabilir ve ayrıntları konuşabilirsin." image={image}/>
            <Card title="Derslere Başla" number={3} classNameNumber="bg-green-300" subtitle="Öğretmenle kurduğun iletişim sonunda deslerin ne şekilde, ne zaman, nasıl yapılacağı konusunda anlaşıp derslere başlayabilirsin." image={image}/>


            </div>
            
        </div>

    )
}