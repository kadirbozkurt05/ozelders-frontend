import LeftSide from "./left-side";
import Heading from "@/components/heading";

import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import { useTeacherInfoStore } from "@/contexts/teacher-info";
import { toast } from "react-toastify";

export default function LessonPlaces() {
  const { setTeacherInfo } = useTeacherInfoStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [lessonPlaces, setLessonPlaces] = useState<string[]>([]);
  const [places, setPlaces] = useState<string[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  async function handleClick() {
    setIsLoading(true);
    if (lessonPlaces.length === 0) {
      toast.error("En az bir ders yeri seçmelisiniz.");
      setIsLoading(false);
      return;
    }

    const response = await fetch(`/api/teacher-info`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessonPlaces }),
    });

    if (!response.ok) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setTeacherInfo(data);
    setIsLoading(false);

    toast.success("Ders yerleriniz başarıyla kaydedildi.");
  }

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>
          Adresiniz sitede asla yer almaz. Sadece ders vermeyi kabul ettiğiniz
          öğrencilere iletilir.
        </p>
        <br />
        <p>Derslerinizi belirttiğiniz adresteki evinizde verebilirsiniz.</p>
        <br />
        <p>
          Öğrencinin evine veya kararlaştıracağınız başka bir mekana gitmek için
          gidebileceğiniz en fazla uzaklık
        </p>
        <br />
        <p>
          Sınırları ortadan kaldırın, webcam üzerinden derslerinizi online
          olarak tüm dünyadaki öğrencilere verin
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
            title="Ders Yerleriniz"
            subtitle="Ders verebileceğiniz yerleri seçin."
          />
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {lessonPlaces.map((lessonPlace: string) => (
              <div key={lessonPlace} className="py-2 flex items-center">
                <span>{lessonPlace}</span>
                <IoMdClose
                  className="ml-1 cursor-pointer"
                  onClick={() =>
                    setLessonPlaces(
                      lessonPlaces.filter((l: string) => l !== lessonPlace)
                    )
                  }
                />
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            {places.map((item) => {
              return (
                <div
                  key={item}
                  className="flex flex-row items-center space-x-3 space-y-0"
                >
                  <Checkbox
                    className="w-5 h-5"
                    checked={lessonPlaces.includes(item)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? setLessonPlaces([...lessonPlaces, item])
                        : setLessonPlaces(
                            lessonPlaces.filter((value) => value !== item)
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

{
  /* <div className="flex flex-wrap gap-2 lg:gap-4">
  {lessons.map((lesson: string) => (
    <div key={lesson} className="py-2 flex items-center">
      <span>{lesson}</span>
      <IoMdClose
        className="ml-1 cursor-pointer"
        onClick={() => setLessons(lessons.filter((l: string) => l !== lesson))}
      />
    </div>
  ))}
</div>; */
}
