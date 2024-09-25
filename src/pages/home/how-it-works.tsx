import Card from "./card";

export default function HowItWorks() {
  return (
    <div className="mt-4">
      <div className=" md:text-4xl text-3xl font-bold mb-3">
        Dakikalar içinde öğretmeninin bul. İşte bu kadar basit.
      </div>
      <div className="flex w-full overflow-x-auto flex-nowrap lg:flex-col gap-3">
        <div className="flex gap-3 md:flow-row ">
          <Card
            title="Öğretmenini Bul"
            subtitle="Aradığın kriterlere uygun öğretmeni sitemizde bulman çok kolay. İstenilen bilgileri gir ve en iyi öğretmenleri senin için bulalım."
            image="https://www.spencerclarkegroup.co.uk/uploads/5005001.png"
          />
          <Card
            title="İletişime Geç"
            subtitle="Aradağın öğretmeni buldun mu? Harika! Şimdi öğretmene mesaj atabilir veya doğrudan telefonla ulaşabilir ve ayrıntları konuşabilirsin."
            image="https://media.istockphoto.com/id/971654072/vector/red-call-icon.jpg?s=612x612&w=0&k=20&c=bwlNm0pnNs98evZv4x8N3Cq3XQAWIKLEzJPmQpbMgWY="
          />
        </div>

        <Card
          title="Derslere Başla"
          subtitle="Öğretmenle kurduğun iletişim sonunda deslerin ne şekilde, ne zaman, nasıl yapılacağı konusunda anlaşıp derslere başlayabilirsin."
          image="https://www.spencerclarkegroup.co.uk/uploads/5005001.png"

        />
      </div>
    </div>
  );
}
