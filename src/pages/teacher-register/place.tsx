import { FormCheckbox } from "@/components/form-elements";
import { useState, useEffect } from "react";
import { TLessonPlace } from "@/lib/types";

export default function Place({ control }: { control: any }) {
  const [lessonPlaces, setLessonPlaces] = useState<TLessonPlace[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setLessonPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  return (
    <>
      <FormCheckbox
        control={control}
        placeholder="Vermek istediginiz dersleri secin"
        name="lessonPlaces"
        items={lessonPlaces}
      />
    </>
  );
}
