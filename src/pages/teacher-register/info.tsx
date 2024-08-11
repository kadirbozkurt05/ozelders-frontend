import { FormInput } from "@/components/form-elements";
import Heading from "@/components/heading";
import { FormCalendar } from "@/components/form-elements";

export default function Info({ control }: { control: any }) {
  return (
    <div className="flex flex-col gap-4 pt-4 lg:pt-8">
      <Heading
        title="Öğretmen Kaydı"
        subtitle="Öğretmenlik yapmak için lütfen bilgilerinizi doldurunuz."
      />
      <div className="w-full flex flex-col lg:flex-row lg:gap-4">
        <div className="w-full">
          <FormInput
            type="text"
            control={control}
            placeholder="Ad"
            name="firstname"
            label="Ad"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            control={control}
            placeholder="Soyad"
            name="lastname"
            label="Soyad"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:gap-4">
        <div className="w-full">
          <FormInput
            type="tel"
            control={control}
            placeholder="0555 555 55 55"
            name="phone"
            label="Telefon"
            pattern="[0]{1}[5]{1}[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
          />
        </div>
        <div className="w-full">
          <FormInput
            type="password"
            control={control}
            placeholder="********"
            name="password"
            label="Şifre"
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:gap-4 items-center">
        <div className="w-full">
          <FormInput
            type="email"
            control={control}
            placeholder="Email"
            name="email"
            label="Email"
          />
        </div>
        <div className="w-full mt-2">
          <FormCalendar
            control={control}
            name="dateOfBirth"
            label="Doğum Tarihi"
          />
        </div>
      </div>
    </div>
  );
}
