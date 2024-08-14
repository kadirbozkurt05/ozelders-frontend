import { FormCheckbox, FormInput } from "@/components/form-elements";
import { Input } from "@/components/ui/input";
import { TLesson } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Lessons({ control }: { control: any }) {
  const [search, setSearch] = useState<string>("");

  const [items, setItems] = useState<TLesson[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(`/api/lesson?search=${search}`);
      const data = await response.json();
      setItems(data);
    };

    fetchLessons();
  }, [search]);

  return (
    <>
      <Input
        type="text"
        placeholder="Vermek istediginiz dersi girin"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <FormCheckbox
        control={control}
        placeholder="Vermek istediginiz dersleri secin"
        name="lessons"
        items={items}
      />
      <FormInput
        type="number"
        placeholder="Saatlik ucretinizi girin"
        name="lessonPrice"
        label="Saatlik ucret"
        control={control}
      />
    </>
  );
}
