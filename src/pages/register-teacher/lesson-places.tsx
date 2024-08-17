import Heading from "@/components/heading";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import LeftSide from "./left-side";
type TLessonPlaces = {
  lessonPlaces: string[];
  setLessonPlaces: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function LessonPlaces({
  lessonPlaces,
  setLessonPlaces,
}: TLessonPlaces) {
  const [places, setPlaces] = useState<string[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  console.log(places);
  console.log(lessonPlaces);

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>
        Adresiniz sitede asla yer almaz. Sadece ders vermeyi kabul ettiğiniz öğrencilere iletilir.
        </p>
        <br />
        <p>
        Derslerinizi belirttiğiniz adresteki evinizde verebilirsiniz.
        </p>
        <br />
        <p>
        Öğrencinin evine veya kararlaştıracağınız başka bir mekana gitmek için gidebileceğiniz en fazla uzaklık
        </p>
        <br />
        <p>
        Sınırları ortadan kaldırın, webcam üzerinden derslerinizi online olarak tüm dünyadaki öğrencilere verin
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <LeftSide children={childNode} />
      <div className="w-full flex flex-col md:order-2 shadow-lg p-4 md:pl-10 md:flex-row gap-4">
        <div className="w-full my-4">
          <Heading
            title="Ders Yerleriniz"
            subtitle="Ders verebileceğiniz yerleri seçin."
          />

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
        </div>
      </div>
    </div>
  );
}
