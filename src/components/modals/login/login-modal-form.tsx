import useLoginModal from "./use-login-modal";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { FormInput } from "@/components/form-elements";
import { useState } from "react";

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Gecersiz email adresi." }),
  password: z
    .string()
    .min(6, { message: "Sifreniz en az 6 karakter olmali." }),
});

export default function LoginModalForm() {
  const loginModal = useLoginModal();
  const { refreshUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: FieldValues) {
    setIsLoading(true);
    const response = await fetch(
      `/api/auth/login`,
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
    toast.success("Logged in successfully");
    refreshUser();
    form.reset();
    setIsLoading(false);
    loginModal.close();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="flex flex-col gap-3"
      >
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
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4 w-full">
            <Button type="submit" className="bg-rose-400" variant={"custom"} disabled={isLoading}>
              Giris yapin
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
