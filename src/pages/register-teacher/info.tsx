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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full my-4">
        <Heading
          title="Bilgileriniz"
          subtitle="Lutfen bilgilerinizi eksiksiz ve dogru bir sekilde doldurunuz."
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <Label>Adiniz</Label>
          <Input
            className="my-2"
            placeholder="Adiniz"
            value={firstname ? firstname : ""}
            onChange={(e) => {
              setFirstname(e.currentTarget.value);
            }}
          />
          <Label>Soyadiniz</Label>
          <Input
            className="my-2"
            value={lastname ? lastname : ""}
            placeholder="Soyadiniz"
            onChange={(e) => {
              setLastname(e.currentTarget.value);
            }}
          />
          <Label>Emailiniz</Label>
          <Input
            type="email"
            value={email ? email : ""}
            className="my-2"
            placeholder="Emailiniz"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="w-full">
          <Label>Parolaniz</Label>
          <Input
            value={password ? password : ""}
            className="my-2"
            placeholder="********"
            type="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <Label>Telefon numaraniz</Label>
          <Input
            className="my-2"
            value={phone ? phone : ""}
            placeholder="Telefon numaraniz"
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
          />
          <Label>Dogum tarihiniz</Label>
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
  );
}
