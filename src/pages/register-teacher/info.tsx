import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tr } from "date-fns/locale";
import Heading from "@/components/heading";

type TInfo = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  setFirstname: (value: string) => void;
  setLastname: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setPhone: (value: string) => void;
  setDateOfBirth: (value: Date) => void;
  dateOfBirth: Date | undefined;
};

export default function Info({
  setFirstname,
  setLastname,
  setEmail,
  setPassword,
  setPhone,
  setDateOfBirth,
  dateOfBirth,
  firstname,
  lastname,
  email,
  phone,
  password,
}: TInfo) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:m-6 w-full">
      <div className=" bg-rose-100 rounded-2xl md:w-full flex flex-col md:order-1 order-2 p-6  ">
        <Heading
          title="Özel ders verin,
bilgi ve deneyimlerinizi paylaşın"
          classNameTitle=" text-5xl mb-6"
          classNameSubtitle="underline text-black text-xl font-bold"
          subtitle="Türkiye'nin 1 Numaralı Online Özel Ders Sitesinde Evde Özel Ders Öğretmeni Olun"
        ></Heading>
        <div >
          <br />
          <p>
            "Online özel ders işleri" arayışınız ozelderszamani.com ile son
            buluyor!
          </p>

          <p>
            {" "}
            İster evden iş arıyor olun, ister tam zamanlı kazanmak istiyor olun,
            ozelderszamani.com'da özel ders öğretmeni olabilirsiniz.
            Çabalarımız, herkesin bilgi paylaşması ve kazanması için bir öğretim
            platformu sağlamaya yöneliktir.
          </p>
          <br />
          <p>🗓️ Evde Online Özel Ders Planı - Kendi Patronunuz Olun </p>
          <br />
          <p>💻 Yüzlerce Konu İçin Online Özel Ders İşi Bulun</p>
          <br />
          <p>💸 Ders ücretlerinizi kendiniz belirleryin.</p>
          <br />
          <p>
            {" "}
            ozelderszamani.com ağımızda yüzlerce konuda (diller, spor, müzik,
            sanat, hobiler ve akademisyenler) evde veya çevrimiçi olarak
            öğretmenlik yapın.{" "}
          </p>
          <br />
          <p className=" font-bold text-l underline">
            {" "}
            ozelderszamani.com Girişini kullanarak kaydolun - Komisyon alınmaz -
            Kayıt Ücreti Yok
          </p>
        </div>
      </div>
      <div className="flex md:w-full rounded-xl shadow-md md:order-2 order-1 md:p-16 p-3 flex-col gap-4 pt-4 lg:pt-8">
        <div className="w-full my-4">
          <Heading
            title="Bilgileriniz"
            subtitle="Lütfen bilgilerinizi eksiksiz ve doğru bir şekilde doldurunuz."
          />
        </div>

        <div className="w-full grid grid-cols-2 md:flex-row gap-4">
          <div className="w-full">
            <Label>Adınız</Label>
            <Input
              className="my-2"
              placeholder="Adınız"
              value={firstname ? firstname : ""}
              onChange={(e) => {
                setFirstname(e.currentTarget.value);
              }}
            />
            <Label>Soy Adınız</Label>
            <Input
              className="my-2"
              value={lastname ? lastname : ""}
              placeholder="Soy Adınız"
              onChange={(e) => {
                setLastname(e.currentTarget.value);
              }}
            />
            <Label>E-posta Adresiniz</Label>
            <Input
              type="email"
              value={email ? email : ""}
              className="my-2"
              placeholder="E-posta Adresiniz"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div className="w-full">
            <Label>Şifre</Label>
            <Input
              value={password ? password : ""}
              className="my-2"
              placeholder="********"
              type="password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <Label>Telefon Numaranız</Label>
            <Input
              className="my-2"
              value={phone ? phone : ""}
              placeholder="05553334455"
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
            />
            <Label>Doğum Tarihiniz</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"custom"}
                  className="w-full pl-3 text-left font-normal bg-white text-black border rounded-sm justify-start"
                >
                  <CalendarIcon width={18} height={18} className="mr-2" />
                  {dateOfBirth
                    ? dateOfBirth.toLocaleDateString("tr-TR")
                    : "Dogum tarihinizi secin"}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={(date) => {
                    if (date) {
                      setDateOfBirth(date);
                    }
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={2024}
                  locale={tr}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
