import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Heading from "../heading";
import { Button } from "../ui/button";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  bodyContent: React.ReactNode;
  firstLabel?: string;
  firstAction?: () => void;
  secondLabel?: string;
  secondAction?: () => void;
  footerContent?: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  bodyContent,
  firstLabel,
  firstAction,
  secondLabel,
  secondAction,
  footerContent,
}: TModal) {
  const [isVisibile, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisibile) return null;

  return (
    <div
      className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/70 transition-opacity duration-700 ${isVisibile ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full md:w-[620px] my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <div className="p-1 border-0 hover:opacity-70 transition absolute right-9">
              <IoMdClose
                size={18}
                className="cursor-pointer"
                onClick={() => onClose()}
              />
            </div>
            <div className="text-lg font-semibold">Giris yapin</div>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="flex flex-col gap-4">
              <Heading title={title} subtitle={subtitle} />
              {bodyContent}
            </div>
          </div>
          {/* footer */}
          <div className="flex flex-col gap-2 pb-6 px-6">
            <div className="flex flex-col items-center gap-2 w-full">
              {firstLabel && firstAction && (
                <Button variant={"outline"} onClick={() => firstAction}>
                  {firstLabel}
                </Button>
              )}
              {secondLabel && secondAction && (
                <Button variant={"outline"} onClick={() => secondAction}>
                  {secondLabel}
                </Button>
              )}
            </div>
            <div className="mx-auto mt-4 text-sm">{footerContent}</div>
          </div>
          {/* footer */}
        </div>
      </div>
    </div>
  );
}
