import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import Heading from "@/components/heading";

import { IoMdClose } from "react-icons/io";
import { Label } from "@/components/ui/label";

export default function Lessons({
  lessons,
  setLessons,
  lessonPrice,
  setLessonPrice,
}: {
  lessons: any;
  setLessons: any;
  lessonPrice: number;
  setLessonPrice: any;
}) {
  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(lessonPrice);

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

  return (
    <div className="relative">
      <div className="py-4">
        <Heading title="Dersler" subtitle="Vermek istediginiz dersleri secin" />
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
        placeholder="Vermek istediginiz dersi girin"
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
      <Label>Ders Ucreti</Label>
      <Input
        type="number"
        value={lessonPrice}
        onChange={(e) => setLessonPrice(e.currentTarget.value)}
        placeholder="Ders ucretini girin"
      />
    </div>
  );
}
