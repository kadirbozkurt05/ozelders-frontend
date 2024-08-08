import Container from "@/components/container";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FormCheckbox } from "@/components/form-elements";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { TLesson } from "@/lib/types";

const TeacherRegisterSchema = z.object({
  firstname: z.string().min(2, { message: "Adiniz en az 2 karakter olmali." }),
  lastname: z
    .string()
    .min(2, { message: "Soyadiniz en az 2 karakter olmali." }),
  phone: z
    .string()
    .min(10, { message: "Telefon numaraniz en az 10 karakter olmali." }),
  email: z.string().email({ message: "Gecersiz email adresi." }),
  lessons: z
    .array(z.string())
    .nonempty({ message: "En az bir ders secmelisiniz." }),
  lessonplaces: z
    .array(z.string())
    .nonempty({ message: "En az bir ders yeri secmelisiniz." }),
  location: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
});

export default function TeacherRegister() {
  const form = useForm<z.infer<typeof TeacherRegisterSchema>>({
    resolver: zodResolver(TeacherRegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      lessons: [],
      lessonplaces: [],
      location: "",
    },
  });

  const [search, setSearch] = useState<string>("");
  console.log("search", search);

  const [items, setItems] = useState<TLesson[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/lesson?search=${search}`
      );
      const data = await response.json();
      setItems(data);
    };

    fetchLessons();
  }, [search]);

  console.log(form.watch("lessons"));
  return (
    <Container>
      <p>{form.watch("lessons")}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="flex flex-col">
          <Input
            type="text"
            placeholder="Vermek istediginiz dersi girin"
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <FormCheckbox
            control={form.control}
            placeholder="Vermek istediginiz dersleri secin"
            name="lessons"
            items={items}
          />
        </form>
      </Form>
    </Container>
  );
}
