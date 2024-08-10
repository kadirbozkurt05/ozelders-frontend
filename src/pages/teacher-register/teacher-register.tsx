import Container from "@/components/container";
import Lessons from "./lessons";
import Info from "./info";
import Location from "./location";
import Place from "./place";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

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
  city: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
  district: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
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
      city: "",
      district: "",
    },
  });

  enum STEPS {
    INFO = 0,
    LESSONS = 1,
    LOCATION = 2,
    PLACE = 3,
  }

  const [step, setStep] = useState(STEPS.INFO);

  async function handleSubmit(data: any) {
    console.log("submitted", data);
    console.log(data);
  }

  const nextStep = () => {
    if (step === STEPS.PLACE) {
      return;
    }
    setStep((value) => value + 1);
  };

  const prevStep = () => {
    if (step === STEPS.INFO) {
      return;
    }
    setStep((value) => value - 1);
  };

  const nextLabel = useMemo(() => {
    if (step === STEPS.PLACE) {
      return "Kaydet";
    }
    return "Devam";
  }, [step]);

  const prevLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Iptal";
    }
    return "Geri";
  }, [step]);

  return (
    <Container>
      {step === STEPS.LESSONS && <p>{form.watch("lessons")}</p>}
      {/* <p>{form.watch("lessons")}</p> */}
      <Form {...form}>
        <form className="flex flex-col">
          {step === STEPS.INFO && <Info control={form.control} />}
          {step === STEPS.LESSONS && <Lessons control={form.control} />}
          {step === STEPS.LOCATION && <Location form={form} />}
          {step === STEPS.PLACE && <Place control={form.control} />}
        </form>
      </Form>
      <div className="flex flex-row gap-4 mt-4 lg:mt-8">
        <Button variant={"outline"} onClick={prevStep}>
          {prevLabel}
        </Button>
        {step !== STEPS.PLACE && (
          <Button variant={"outline"} onClick={nextStep}>
            {nextLabel}
          </Button>
        )}
        {step === STEPS.PLACE && (
          <Button
            className="bg-rose-400"
            variant={"custom"}
            onClick={form.handleSubmit(handleSubmit)}
          >
            Kaydet
          </Button>
        )}
      </div>
    </Container>
  );
}
