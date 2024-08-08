import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";

import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { FormInput } from "@/components/form-elements";
import useRegisterModal from "./use-register-modal";
import { useState } from "react";

const RegisterFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Isminiz en az 2 karakter olmali." }),
  lastname: z
    .string()
    .min(2, { message: "Soyisminiz en az 2 karakter olmali." }),
  email: z.string().email({ message: "Gecersiz email adresi" }),
  password: z
    .string()
    .min(6, { message: "Sifreniz en az 6 karakter olmali" }),
});

export default function RegisterModalForm() {
  const registerModal = useRegisterModal();
  const { refreshUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
  });

  async function handleRegister(data: FieldValues) {
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
    if (!response.ok) {
      const resData = await response.json();
      setIsLoading(false);
      return toast.error(resData.error);
    }
    refreshUser();
    toast.success("Logged in successfully");
    form.reset();
    setIsLoading(false);
    registerModal.close();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="flex flex-col gap-3"
      >
        <FormInput
          control={form.control}
          name="firstname"
          label="Adiniz"
          placeholder="John"
          type="text"
        />
        <FormInput
          control={form.control}
          name="lastname"
          label="Soyadiniz"
          placeholder="Doe"
          type="text"
        />
        <FormInput
          control={form.control}
          name="email"
          label="Email adresiniz"
          placeholder="123@mail.com"
          type="email"
        />
        <FormInput
          control={form.control}
          name="password"
          label="Parolaniz"
          placeholder="********"
          type="password"
        />
        <Button
          type="submit"
          variant={"custom"}
          className="w-full bg-rose-400"
          disabled={isLoading}
        >
          Kayit olun
        </Button>
      </form>
    </Form>
  );
}
