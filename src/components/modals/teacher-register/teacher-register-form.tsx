import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { validateEmail, validatePhone } from "@/lib/helpers";
import { tr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/user-context";
import { useNavigate } from "react-router-dom";

export default function TeacherRegisterForm({
  teacherRegisterModal,
}: {
  teacherRegisterModal: { isOpen: any; close: any; open: any };
}) {
  const { refreshUser } = useUser();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);

    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !phone ||
      !dateOfBirth
    ) {
      toast.error("Lutfen tum alanlari doldurunuz.");
      setIsLoading(false);
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Lutfen gecerli bir telefon numarasi giriniz.");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Lutfen gecerli bir email adresi giriniz.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/teacher/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        phone,
        dateOfBirth,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      toast.error(data.message);
      setIsLoading(false);
      return;
    }

    toast.success("Hoşgeldiniz!");
    refreshUser();
    setIsLoading(false);
    teacherRegisterModal.close();
    navigate("/ogretmen-kayit");
  };

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-2">
      <div>
        <Label>Adınız</Label>
        <Input
          className="my-2"
          placeholder="Adınız"
          value={firstname ? firstname : ""}
          onChange={(e) => {
            setFirstname(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <Label>Soy Adınız</Label>
        <Input
          className="my-2"
          value={lastname ? lastname : ""}
          placeholder="Soy Adınız"
          onChange={(e) => {
            setLastname(e.currentTarget.value);
          }}
        />
      </div>
      <div>
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
      <div>
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
      </div>
      <div>
        <Label>Telefon Numaranız</Label>
        <Input
          className="my-2"
          value={phone ? phone : ""}
          placeholder="05553334455"
          onChange={(e) => {
            setPhone(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <Label>Doğum Tarihiniz</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"custom"}
              className="w-full pl-3 my-2 text-left font-normal bg-white text-black border rounded-sm justify-start"
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
      <div className="flex flex-row items-center gap-4 col-span-2">
        <Button
          type="submit"
          className="bg-rose-400"
          variant={"custom"}
          disabled={isLoading}
          onClick={handleClick}
        >
          Giris yapin
        </Button>
      </div>
    </div>
  );
}
