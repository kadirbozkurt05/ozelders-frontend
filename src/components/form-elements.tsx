import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

type TFormInput = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  label: string;
  pattern?: string;
};

export function FormInput({
  control,
  name,
  label,
  placeholder,
  type,
  className,
  pattern,
}: TFormInput) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className={className}
                type={type}
                pattern={pattern ? pattern : undefined}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

type TFormSelect = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  options: any[];
};

export function FormSelect({
  control,
  placeholder,
  name,
  label,
  options,
}: TFormSelect) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option, index) => (
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
  );
}

type TFormCheckbox = {
  control: any;
  name: string;
  items: any[];
  placeholder: string;
};

export function FormCheckbox({ control, name, items }: TFormCheckbox) {
  return (
    <div className="border">
      <FormField
        control={control}
        name={name}
        render={() => (
          <FormItem>
            {items.map((item: any) => (
              <div key={item._id} className="p-1 mt-2">
                <FormField
                  key={item._id}
                  control={control}
                  name={name}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item._id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            className="w-5 h-5"
                            checked={field.value?.includes(item._id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item._id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== item._id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
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
  );
}

type TFormTextArea = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
};

export function FormTextArea({
  control,
  name,
  label,
  placeholder,
}: TFormTextArea) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>
              You can <span>@mention</span> other users and organizations.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

type TFormCalendar = {
  control: any;
  name: string;
  label: string;
};

export function FormCalendar({ control, name, label }: TFormCalendar) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"custom"}
                    className={cn(
                      "w-full pl-3 text-left font-normal bg-white text-black border rounded-sm",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Bir tarih seciniz</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={2024}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
