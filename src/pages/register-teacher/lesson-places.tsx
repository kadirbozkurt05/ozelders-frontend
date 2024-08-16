import Heading from "@/components/heading";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
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

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full my-4">
        <Heading
          title="Ders Yerleriniz"
          subtitle="Ders vereceginiz yerleri ekleyin."
        />

        <div className="w-full flex flex-col gap-4 mt-4">
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
  );
}
