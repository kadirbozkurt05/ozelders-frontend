import Container from "@/components/container";
import Lessons from "./lessons";
import Info from "./info";
import Location from "./location";
import Place from "./place";
import LessonLocation from "./lesson-location";
import Additional from "./additional";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
// import { useUser } from "@/contexts/user-context";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const TeacherRegisterSchema = z.object({
  firstname: z.string().min(2, { message: "Adiniz en az 2 karakter olmali." }),
  lastname: z
    .string()
    .min(2, { message: "Soyadiniz en az 2 karakter olmali." }),
  phone: z
    .string()
    .min(10, { message: "Telefon numaraniz en az 10 karakter olmali." }),
  email: z.string().email({ message: "Gecersiz email adresi." }),
  password: z.string().min(6, { message: "Sifreniz en az 6 karakter olmali." }),
  dateOfBirth: z.date({ message: "Gecersiz dogum tarihi." }),
  city: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
  district: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
  lessons: z
    .array(z.string())
    .nonempty({ message: "En az bir ders secmelisiniz." }),
  lessonPlaces: z
    .array(z.string())
    .nonempty({ message: "En az bir ders yeri secmelisiniz." }),
  lessonDistricts: z
    .array(z.string())
    .nonempty({ message: "Lutfen en az bir konum seciniz." }),
  photo: z.string().optional(),
  video: z.string().optional(),
  about: z
    .string()
    .min(10, { message: "Hakkinda kismi en az 10 karakter olmali." }),
  lessonPrice: z
    .number()
    .min(0, { message: "Ders ucreti sifirdan buyuk olmali." }),
});

export default function TeacherRegister() {
  // const { refreshUser } = useUser();
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof TeacherRegisterSchema>>({
    resolver: zodResolver(TeacherRegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      city: "",
      district: "",
      lessons: [],
      lessonPlaces: [],
      lessonDistricts: [],
      photo: "",
      video: "",
      about: "",
      lessonPrice: 0,
    },
  });

  enum STEPS {
    INFO = 0,
    PLACE = 1,
    LOCATION = 2,
    LESSONDISTRICTS = 3,
    LESSONS = 4,
    ADDITIONAL = 5,
  }

  const [step, setStep] = useState(STEPS.INFO);

  async function handleSubmit(data: FieldValues) {
    // const response = await fetch("/api/teacher/register", {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (!response.ok) {
    //   const error = await response.json();
    //   console.error(error);
    //   return;
    // }

    // const result = await response.json();
    // toast.success(result.message);
    // refreshUser();
    // navigate("/");

    console.log(data);
  }

  const nextStep = () => {
    if (step === STEPS.ADDITIONAL) {
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
    if (step === STEPS.ADDITIONAL) {
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
          {step === STEPS.LESSONDISTRICTS && <LessonLocation form={form} />}
          {step === STEPS.PLACE && <Place control={form.control} />}
          {step === STEPS.ADDITIONAL && <Additional form={form} />}
        </form>
      </Form>
      <div className="flex flex-row gap-4 mt-4 lg:mt-8">
        <Button variant={"outline"} onClick={prevStep}>
          {prevLabel}
        </Button>
        {step !== STEPS.ADDITIONAL && (
          <Button variant={"outline"} onClick={nextStep}>
            {nextLabel}
          </Button>
        )}
        {step === STEPS.ADDITIONAL && (
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
