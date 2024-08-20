import LeftSide from "./left-side";
import Heading from "@/components/heading";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { IoMdClose } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTeacherInfoStore } from "@/contexts/teacher-info";
import { toast } from "react-toastify";

export default function Lessons() {
  const { setTeacherInfo } = useTeacherInfoStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [lessons, setLessons] = useState<string[]>([]);
  const [lessonPrice, setLessonPrice] = useState<number>(0);

  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(`/api/lesson?search=${search}`);
      const data = await response.json();
      setItems(data);
    };

    fetchLessons();
  }, [search]);

  const handleSelectItem = (item: string) => {
    if (!lessons.includes(item)) {
      setLessons([...lessons, item]);
    }
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleClick() {
    setIsLoading(true);
    if (lessons.length === 0) {
      toast.error("En az bir ders seçmelisiniz.");
      setIsLoading(false);
      return;
    }

    if (lessonPrice === 0) {
      toast.error("Ders ücretini girmelisiniz.");
      setIsLoading(false);
      return;
    }

    const response = await fetch(`/api/teacher-info`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lessons, lessonPrice }),
    });

    if (!response.ok) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setTeacherInfo(data);
    setIsLoading(false);

    toast.success("Dersler başarıyla eklendi.");
  }

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>Hangi dersleri vermek istediğinizi belirtin.</p>
        <br />
        <p>Ders sürenizin ne kadar olduğunu dakika cinsinden belirtin.</p>
        <br />
        <p>
          Son olarak bir ders seansı ücretinizi belirtin. Unutmayın ders seansı
          yukarıda belirttiğiniz süre kadardır.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row">
      <LeftSide children={childNode} />
      <div className="w-full flex flex-col md:order-2 shadow-lg p-4 md:pl-10 md:flex-row gap-4">
        <div className="relative w-full">
          <div className="py-4">
            <Heading
              title="Dersler"
              subtitle="Vermek istediğiniz dersleri seçin"
            />
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {lessons.map((lesson: string) => (
              <div key={lesson} className="py-2 flex items-center">
                <span>{lesson}</span>
                <IoMdClose
                  className="ml-1 cursor-pointer"
                  onClick={() =>
                    setLessons(lessons.filter((l: string) => l !== lesson))
                  }
                />
              </div>
            ))}
          </div>
          <Input
            type="text"
            placeholder="Vermek istediğiniz dersi aratın"
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            list="lessons"
          />
          <div className="w-full" ref={dropdownRef}>
            {showDropdown && items.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-sm">
                {items.map((item) => (
                  <li
                    key={item}
                    className="p-2 cursor-pointer hover:bg-gray-200 font-normal"
                    onClick={() => handleSelectItem(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Label>Ders Ücreti</Label>
          <Input
            type="number"
            value={lessonPrice}
            onChange={(e) => setLessonPrice(Number(e.currentTarget.value))}
            placeholder="Ders ucretini girin"
          />
          <div className="flex flex-row gap-4 mt-4 lg:mt-8">
            <Button
              variant={"outline"}
              onClick={handleClick}
              disabled={isLoading}
            >
              Devam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
