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
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/user-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  city: z.string().optional(),
  district: z.string().optional(),
  lessons: z
    .array(z.string())
    .nonempty({ message: "En az bir ders secmelisiniz." }),
  lessonPlaces: z.array(z.string()).optional(),
  lessonDistricts: z.array(z.string()).optional(),
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
  const { user, refreshUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
    const response = await fetch("/api/teacher/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error(error);
      return;
    }
    toast.success("Kayit basarili.");
    refreshUser();
    navigate("/");
  }

  const nextStep = () => {
    const lessonPlaces = form.getValues("lessonPlaces");
    if (step === STEPS.INFO) {
      const firstname = form.getValues("firstname");
      const lastname = form.getValues("lastname");
      const phone = form.getValues("phone");
      const email = form.getValues("email");
      const password = form.getValues("password");
      const dateOfBirth = form.getValues("dateOfBirth");
      if (
        !firstname ||
        !lastname ||
        !phone ||
        !email ||
        !password ||
        !dateOfBirth
      ) {
        console.log(toast);
        return toast.error("Lutfen tum alanlari doldurun.");
      }
      return setStep((value) => value + 1);
    }
    if (step === STEPS.PLACE) {
      if (lessonPlaces && lessonPlaces.length === 0) {
        return toast.error("Lutfen en az bir ders yeri secin.");
      }
      if (
        lessonPlaces &&
        lessonPlaces.length === 1 &&
        lessonPlaces[0] == "Online"
      ) {
        return setStep(STEPS.LESSONS);
      }
      return setStep((value) => value + 1);
    }
    if (step === STEPS.LOCATION) {
      const city = form.getValues("city");
      const district = form.getValues("district");
      if (!city || !district) {
        return toast.error("Lutfen sehir ve ilce secin.");
      }
      return setStep((value) => value + 1);
    }
    if (step === STEPS.LESSONDISTRICTS) {
      const lessonDistricts = form.getValues("lessonDistricts");
      if (!lessonDistricts || lessonDistricts.length === 0) {
        return toast.error("Lutfen en az bir ders ilcesi secin.");
      }
      return setStep((value) => value + 1);
    }

    if (step === STEPS.LESSONS) {
      const lessons = form.getValues("lessons");
      const lessonPrice = form.getValues("lessonPrice");
      if (!lessons || lessons.length === 0) {
        return toast.error("Lutfen en az bir ders secin.");
      }
      if (!lessonPrice) {
        return toast.error("Lutfen ders ucretini girin.");
      }
      return setStep((value) => value + 1);
    }

    if (step === STEPS.ADDITIONAL) {
      return;
    }
    setStep((value) => value + 1);
  };

  const prevStep = () => {
    const lessonPlaces = form.getValues("lessonPlaces");
    if (step === STEPS.INFO) {
      return navigate("/");
    }
    if (step === STEPS.LESSONS) {
      if (
        lessonPlaces &&
        lessonPlaces.length === 1 &&
        lessonPlaces[0] == "Online"
      ) {
        return setStep(STEPS.PLACE);
      }
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
          {step === STEPS.PLACE && <Place form={form} />}
          {step === STEPS.ADDITIONAL && <Additional form={form} />}
        </form>
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
      </Form>
    </Container>
  );
}
