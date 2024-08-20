import Container from "@/components/container";
import LessonPlaces from "./lesson-places";
import Lessons from "./lessons";
import Location from "./location";
import Additional from "./additional";
import LessonDistricts from "./lesson-districts";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTeacherInfoStore } from "@/contexts/teacher-info";
import { useUser } from "@/contexts/user-context";

export default function RegisterTeacher() {
  const { teacherInfo } = useTeacherInfoStore();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "teacher") {
      navigate("/");
    }
  }, []);

  enum STEPS {
    LESSONPLACES = 0,
    LOCATION = 1,
    LESSONDISTRICTS = 2,
    LESSONS = 3,
    ADDITIONAL = 4,
  }

  const [step, setStep] = useState<STEPS>(STEPS.LESSONPLACES);

  useEffect(() => {
    if (teacherInfo) {
      if (teacherInfo.lessonPlaces.length > 0) {
        if (
          teacherInfo.lessonPlaces.length === 1 &&
          teacherInfo.lessonPlaces[0] === "Online"
        ) {
          setStep(STEPS.LESSONS);
        } else {
          setStep(STEPS.LOCATION);
        }
      }

      if (teacherInfo.address.city && teacherInfo.address.district) {
        console.log("1");
        setStep(STEPS.LESSONDISTRICTS);
      }

      if (teacherInfo.lessonDistricts.length > 0) {
        setStep(STEPS.LESSONS);
      }

      if (teacherInfo.lessons.length > 0 && teacherInfo.lessonPrice > 0) {
        setStep(STEPS.ADDITIONAL);
      }
    }
  }, [teacherInfo]);

  return (
    <Container>
      {step === STEPS.LESSONPLACES && <LessonPlaces />}
      {step === STEPS.LOCATION && <Location />}
      {step === STEPS.LESSONDISTRICTS && <LessonDistricts />}
      {step === STEPS.LESSONS && <Lessons />}
      {step === STEPS.ADDITIONAL && <Additional />}
    </Container>
  );
}
