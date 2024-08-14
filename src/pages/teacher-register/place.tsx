import { FormCheckbox } from "@/components/form-elements";
import { useState, useEffect } from "react";
import { TLessonPlace } from "@/lib/types";
import Heading from "@/components/heading";

export default function Place({ form }: { form: any }) {
  const [lessonPlaces, setLessonPlaces] = useState<TLessonPlace[]>([]);

  useEffect(() => {
    const fetchLessonPlaces = async () => {
      const response = await fetch(`/api/lesson-place`);
      const data = await response.json();
      setLessonPlaces(data);
    };

    fetchLessonPlaces();
  }, []);

  const selectedLessonPlaces = form.watch("lessonPlaces");

  return (
    <div className="flex flex-col gap-4 pt-4 lg:pt-8">
    <Heading
      title="Ders Verme Yerleri"
      subtitle="Ders verebileceginiz yerleri secin"
    />
    <p>
      {selectedLessonPlaces.map((lessonPlace: string) => {
        return lessonPlace + ", ";

      }
      )}
    </p>
      <FormCheckbox
        control={form.control}
        placeholder="Vermek istediginiz dersleri secin"
        name="lessonPlaces"
        items={lessonPlaces}
      />
    </div>
  );
}
