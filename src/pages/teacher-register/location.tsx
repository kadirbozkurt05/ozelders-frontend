import Heading from "@/components/heading";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export default function Location({ form }: { form: any }) {
  const [search, setSearch] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!search) {
        return;
      }
      if (search.length < 2) {
        return;
      }

      const response = await fetch(`/api/location/city?search=${search}`);
      if (!response.ok) {
        throw new Error("Location service unavailable");
      }
      const data = await response.json();
      setCities(data);
    };

    fetchCities();
  }, [search]);

  console.log(cities);

  const city = form.watch("city");

  useEffect(() => {
    const fetchDistricts = async () => {
      if (!city) {
        return;
      }

      const response = await fetch(`/api/location/district?city=${city}`);
      if (!response.ok) {
        throw new Error("Location service unavailable");
      }
      const data = await response.json();
      setDistricts(data);
    };

    fetchDistricts();
  }, [city]);

  return (
    <div className="flex flex-col gap-4 pt-4 lg:pt-8">
      <Heading
        title="Nerede ders vereceksiniz?"
        subtitle="Yasadiginiz ili ve ilceyi girin"
      />
      <Input
        type="text"
        placeholder="Yasadiginiz ili ve ilceyi girin"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {cities.length > 0 && (
        <>
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ilinizi secin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cities.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}

      {districts.length > 0 && (
        <>
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Ilcenizi secin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {districts.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </div>
  );
}
