import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type TFormInput = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  label: string;
};

export function FormInput({
  control,
  name,
  label,
  placeholder,
  type,
  className,
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

export function FormCheckbox({
  control,
  name,
  items,
}: TFormCheckbox) {
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
