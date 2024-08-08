import useListingModal from "./use-listing-modal";
import Heading from "@/components/heading";

import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { FormSelect } from "@/components/form-elements";
import { FormCheckbox } from "@/components/form-elements";
import { FormSelectWithCheckboxes } from "@/components/form-elements";

const ListingFormSchema = z.object({
  firstname: z.string().min(2, { message: "Adiniz en az 2 karakter olmali." }),
  lastname: z
    .string()
    .min(2, { message: "Soyadiniz en az 2 karakter olmali." }),
  phone: z
    .string()
    .min(10, { message: "Telefon numaraniz en az 10 karakter olmali." }),
  email: z.string().email({ message: "Gecersiz email adresi." }),
  lessons: z
    .array(z.string())
    .nonempty({ message: "En az bir ders secmelisiniz." }),
  lessonplaces: z
    .array(z.string())
    .nonempty({ message: "En az bir ders yeri secmelisiniz." }),
  location: z.string().min(2, { message: "Lutfen bir konum seciniz." }),
});

export default function ListingModal() {
  const [isVisibile, setIsVisible] = useState(false);
  const listingModal = useListingModal();

  const form = useForm<z.infer<typeof ListingFormSchema>>({
    resolver: zodResolver(ListingFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      lessons: [],
      lessonplaces: [],
      location: "",
    },
  });

  enum STEPS {
    INFO = 0,
    LESSONS = 1,
    LOCATION = 2,
    PLACE = 3,
  }

  const [step, setStep] = useState(STEPS.INFO);

  const nextStep = () => {
    setStep((value) => value + 1);
  };

  const prevStep = () => {
    setStep((value) => value - 1);
  };

  const nextLabel = useMemo(() => {
    console.log(step);
    if (step === STEPS.PLACE) {
      return "Kaydet";
    }
    return "Devam";
  }, [step]);

  const prevLabel = useMemo(() => {
    console.log(step);
    if (step === STEPS.INFO) {
      return "Iptal";
    }
    return "Geri";
  }, [step]);

  useEffect(() => {
    if (listingModal.isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [listingModal.isOpen]);

  const formCheckBoxes = () => {
    return (
      <FormCheckbox
        control={form.control}
        name="lessons"
        items={[
          { id: "1", label: "Matematik" },
          { id: "2", label: "Fen" },
          { id: "3", label: "Turkce" },
          { id: "4", label: "Sosyal" },
        ]}
      />
    );
  };

  if (!listingModal.isOpen && !isVisibile) return null;

  return (
    <div
      className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/70 transition-opacity duration-700 ${isVisibile ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full md:w-[480px] my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <div className="p-1 border-0 hover:opacity-70 transition absolute right-9">
              <IoMdClose
                size={18}
                className="cursor-pointer"
                onClick={() => listingModal.close()}
              />
            </div>
            <div className="text-lg font-semibold">Ogretmen kayit yeri</div>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="flex flex-col gap-4">
              <Heading
                title="Hosgeldiniz"
                subtitle="Burda profilinizi hazirlamak icin size birkac soru soracagiz."
              />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(() => {})}
                className="flex flex-col gap-3"
              >
                <FormSelectWithCheckboxes
                  control={form.control}
                  placeholder="Adiniz"
                  name="location"
                  label="Konum"
                  options={[
                    { id: "1", label: "Matematik" },
                    { id: "2", label: "Fen" },
                    { id: "3", label: "Turkce" },
                    { id: "4", label: "Sosyal" },
                  ]}
                />
              </form>
            </Form>
          </div>
          <div className="flex flex-col gap-2 pb-6 px-6">
            <div className="flex flex-col items-center gap-2 w-full">
              <Button variant={"outline"} onClick={prevStep}>
                {prevLabel}
              </Button>
              <Button variant={"outline"} onClick={nextStep}>
                {nextLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
