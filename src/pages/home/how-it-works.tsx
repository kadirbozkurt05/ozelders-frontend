import Card from "./card";

export default function HowItWorks(){
    return(
        <div className="mt-4">
            <div className=" md:text-5xl text-3xl font-bold mb-3">NASIL ÇALIŞIR?</div>
            <div className="flex w-full overflow-x-auto flex-nowrap lg:flex-row gap-3">
            <Card title="Öğretmenini Bul" classNameNumber="bg-rose-300" number={1} subtitle="Aradığın kriterlere uygun öğretmeni sitemizde bulman çok kolay. İstenilen bilgileri gir ve en iyi öğretmenleri senin için bulalım." image="/pic1.png"/>
            <Card title="İletişime Geç" classNameNumber="bg-blue-300" number={2} subtitle="Aradağın öğretmeni buldun mu? Harika! Şimdi öğretmene mesaj atabilir veya doğrudan telefonla ulaşabilir ve ayrıntları konuşabilirsin." image="/pic2.png"/>
            <Card title="Derslere Başla" number={3} classNameNumber="bg-green-300" subtitle="Öğretmenle kurduğun iletişim sonunda deslerin ne şekilde, ne zaman, nasıl yapılacağı konusunda anlaşıp derslere başlayabilirsin." image="/pic3.png"/>


            </div>
            
        </div>

    )
}