import Heading from "@/components/heading";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IoMdClose } from "react-icons/io";

type TLessonDistricts = {
  city: string;
  lessonDistricts: string[];
  setLessonDistricts: any;
};

export default function LessonDistricts({
  city,
  lessonDistricts,
  setLessonDistricts,
}: TLessonDistricts) {
  const [districts, setDistricts] = useState<string[]>([]);

  if (!city) {
    console.log("Please select a city first");
  }

  console.log(lessonDistricts);

  useEffect(() => {
    async function fetchDistricts() {
      if (!city) {
        return;
      }

      const response = await fetch(`/api/location/district?city=${city}`);
      if (!response.ok) {
        throw new Error("Location service unavailable");
      }
      const data = await response.json();
      setDistricts(data);
    }

    fetchDistricts();
  }, [city]);

  console.log(districts);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full my-4">
        <Heading
          title="Ders Vereceginiz Ilceler"
          subtitle="Ders vereceginiz ilceleri ekleyin."
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
        <div className="w-full flex flex-col gap-4 mt-4">
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
      </div>
    </div>
  );
}
