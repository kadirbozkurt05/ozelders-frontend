import Container from "@/components/container";
import Info from "./info";
import LessonPlaces from "./lesson-places";
import Lessons from "./lessons";
import Location from "./location";
import Additional from "./additional";
import LessonDistricts from "./lesson-districts";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/user-context";
import { useNavigate } from "react-router-dom";
import { validatePhone, validateEmail } from "@/lib/helpers";

export default function RegisterTeacher() {
  const { refreshUser } = useUser();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

  const [lessonPlaces, setLessonPlaces] = useState<string[]>([]);
  const [lessons, setLessons] = useState<string[]>([]);
  const [lessonPrice, setLessonPrice] = useState<number>(0);

  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  const [lessonDistricts, setLessonDistricts] = useState<string[]>([]);

  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [videoUrl, setVideoUrl] = useState<string | null>("");
  const [about, setAbout] = useState<string | null>("");

  async function handleSubmit() {
    const response = await fetch("/api/teacher/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        phone,
        dateOfBirth: dateOfBirth?.toISOString(),
      }),
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

  enum STEPS {
    INFO = 0,
    LESSONPLACES = 1,
    LOCATION = 2,
    LESSONDISTRICTS = 3,
    LESSONS = 4,
    ADDITIONAL = 5,
  }

  const [step, setStep] = useState(STEPS.INFO);

  const nextStep = () => {
    if (step === STEPS.INFO) {
      if (
        !firstname ||
        !lastname ||
        !email ||
        !password ||
        !phone ||
        !dateOfBirth
      ) {
        toast.error("Lutfen tum alanlari doldurunuz.");
        return;
      }
      if (!validatePhone(phone)) {
        toast.error("Lutfen gecerli bir telefon numarasi giriniz.");
        return;
      }
      if (!validateEmail(email)) {
        toast.error("Lutfen gecerli bir email adresi giriniz.");
        return;
      }
    }

    if (step === STEPS.LESSONPLACES) {
      if (lessonPlaces.length === 0) {
        toast.error("Lutfen en az bir ders yeri seciniz.");
        return;
      }
      if (lessonPlaces.length === 1 && lessonPlaces[0] === "Online") {
        setStep(STEPS.LESSONS);
        return;
      }
    }

    if (step === STEPS.LOCATION) {
      if (!city || !district) {
        toast.error("Lutfen sehir ve ilce seciniz.");
        return;
      }
    }

    if (step === STEPS.LESSONDISTRICTS) {
      if (lessonDistricts.length === 0) {
        toast.error("Lutfen en az bir ilce seciniz.");
        return;
      }
    }

    if (step === STEPS.LESSONS) {
      if (lessons.length === 0) {
        toast.error("Lutfen en az bir ders seciniz.");
        return;
      }
    }

    setStep((value) => value + 1);
  };

  const prevStep = () => {
    if (step === STEPS.LESSONS) {
      if (lessonPlaces.length === 1 && lessonPlaces[0] === "Online") {
        setStep(STEPS.LESSONPLACES);
        return;
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
      {step === STEPS.INFO && (
        <Info
          firstname={firstname}
          lastname={lastname}
          email={email}
          password={password}
          phone={phone}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setEmail={setEmail}
          setPassword={setPassword}
          setPhone={setPhone}
          setDateOfBirth={setDateOfBirth}
          dateOfBirth={dateOfBirth}
        />
      )}
      {step === STEPS.LESSONPLACES && (
        <LessonPlaces
          lessonPlaces={lessonPlaces}
          setLessonPlaces={setLessonPlaces}
        />
      )}
      {step === STEPS.LOCATION && (
        <Location
          city={city}
          district={district}
          setCity={setCity}
          setDistrict={setDistrict}
        />
      )}
      {step === STEPS.LESSONDISTRICTS && (
        <LessonDistricts
          city={city}
          lessonDistricts={lessonDistricts}
          setLessonDistricts={setLessonDistricts}
        />
      )}
      {step === STEPS.LESSONS && (
        <Lessons
          lessons={lessons}
          setLessons={setLessons}
          lessonPrice={lessonPrice}
          setLessonPrice={setLessonPrice}
        />
      )}
      {step === STEPS.ADDITIONAL && (
        <Additional
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          about={about}
          setAbout={setAbout}
        />
      )}

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
            onClick={handleSubmit}
          >
            Kaydet
          </Button>
        )}
      </div>
    </Container>
  );
}
