import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

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
