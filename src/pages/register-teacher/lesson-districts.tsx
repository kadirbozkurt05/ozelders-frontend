import Heading from "@/components/heading";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IoMdClose } from "react-icons/io";
import LeftSide from "./left-side";
import { useNavigate } from "react-router-dom";

import { useTeacherInfoStore } from "@/contexts/teacher-info";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function LessonDistricts() {
  const { teacherInfo, setTeacherInfo } = useTeacherInfoStore();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lessonDistricts, setLessonDistricts] = useState<string[]>([]);

  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (!teacherInfo) {
      return navigate("/");
    }
  }, [teacherInfo]);


  useEffect(() => {
    async function fetchDistricts() {
      const response = await fetch(
        `/api/location/district?city=${teacherInfo?.address.city}`
      );
      if (!response.ok) {
        throw new Error("Location service unavailable");
      }
      const data = await response.json();
      setDistricts(data);
    }

    fetchDistricts();
  }, [teacherInfo]);

  async function handleClick() {
    setIsLoading(true);
    if (lessonDistricts.length === 0) {
      toast.error("En az bir ilçe seçmelisiniz.");
      setIsLoading(false);
      return;
    }

    const response = await fetch(`/api/teacher-info`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonDistricts }),
    });

    if (!response.ok) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setTeacherInfo(data);
    setIsLoading(false);

    toast.success("Ders verebileceğiniz ilçeler başarıyla kaydedildi.");
  }

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>
          Lütfen ders verebileceginiz ilçeleri seçin. İstediğiniz kadar seçim
          yapabilirsiniz.
        </p>
        <br />
        <p>
          Bu bilgiyle sizin ders verebileceğiniz ilçelerdeki öğrencilerle
          iletişim kurabileceksiniz.
        </p>
        <br />
        <p>
          Hem siz seçtiğiniz ilçelerdeki öğrencilere gösterileceksiniz, hem de
          ders taleplerini görürken bu ilçelerdeki kişilere ulaşmış olacaksınız.
        </p>
      </div>
    </div>
  );
  return (
    <div className="w-full flex flex-col md:flex-row">
      <LeftSide children={childNode} />
      <div className="w-full flex flex-col md:order-2 shadow-lg p-4 md:pl-10 md:flex-row gap-4">
        <div className="w-full my-4">
          <Heading
            title="Ders Verebileceğiniz İlçeler"
            subtitle="Ders verebileceğiniz ilçeleri seçin."
          />
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {lessonDistricts.map((lesson: string) => (
              <div key={lesson} className="py-2 flex items-center">
                <span>{lesson}</span>
                <IoMdClose
                  className="ml-1 cursor-pointer"
                  onClick={() =>
                    setLessonDistricts(
                      lessonDistricts.filter((l: string) => l !== lesson)
                    )
                  }
                />
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-3 gap-4 mt-4">
            {districts.map((item) => {
              return (
                <div
                  key={item}
                  className="flex flex-row items-center space-x-3 space-y-0"
                >
                  <Checkbox
                    className="w-5 h-5"
                    checked={lessonDistricts.includes(item)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? setLessonDistricts([...lessonDistricts, item])
                        : setLessonDistricts(
                            lessonDistricts.filter((value) => value !== item)
                          );
                    }}
                  />
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row gap-4 mt-4 lg:mt-8">
            <Button
              variant={"outline"}
              onClick={handleClick}
              disabled={isLoading}
            >
              Devam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
