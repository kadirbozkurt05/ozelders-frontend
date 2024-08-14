import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Heading from "@/components/heading";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export default function LessonLocation({ form }: { form: any }) {
  const city = form.watch("city");
  const lessonDistricts = form.watch("lessonDistricts");
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDistricts() {
      if (!city) {
        toast.error("Please select a city first");
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

  return (
    <div>
      <Heading
        title="Ders yerleri"
        subtitle="Lutfen ders verebileceginiz yerleri secin"
      />
      {lessonDistricts && lessonDistricts.length > 0 && (
        <div className="flex flex-row items-center space-x-3">
          <Heading
            title="Secilen ilceler"
            subtitle={lessonDistricts.join(", ")}
          />
        </div>
      )}
      <div className="">
        <FormField
          control={form.control}
          name="lessonDistricts"
          render={() => (
            <FormItem className="grid grid-cols-2 lg:grid-cols-3 gap-x-4">
              {districts.map((item: any) => (
                <div key={item} className="p-1 mt-2">
                  <FormField
                    key={item}
                    control={form.control}
                    name="lessonDistricts"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="w-5 h-5"
                              checked={field.value?.includes(item)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: any) => value !== item
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              ))}

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
