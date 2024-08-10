import { FormInput } from "@/components/form-elements";
import Heading from "@/components/heading";

export default function Info({ control }: { control: any }) {
  return (
    <div className="flex flex-col gap-4 pt-4 lg:pt-8">
      <Heading
        title="Öğretmen Kaydı"
        subtitle="Öğretmenlik yapmak için lütfen bilgilerinizi doldurunuz."
      />
      <FormInput
        type="text"
        control={control}
        placeholder="Ad"
        name="firstname"
        label="Ad"
      />
      <FormInput
        type="text"
        control={control}
        placeholder="Soyad"
        name="lastname"
        label="Soyad"
      />
      <FormInput
        type="tel"
        control={control}
        placeholder="0555 555 55 55"
        name="phone"
        label="Telefon"
        pattern="[0]{1}[5]{1}[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
      />
      <FormInput
        type="email"
        control={control}
        placeholder="Email"
        name="email"
        label="Email"
      />
    </div>
  );
}
