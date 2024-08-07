import { categories } from "@/lib/data";
import Container from "../container";

export default function Categories() {
  return (
    <Container className="max-w-[700px]">
      <div className="hidden md:flex flex-row items-center justify-between overflow-x-auto shadow-sm">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            icon={category.icon}
            label={category.label}
          />
        ))}
      </div>
    </Container>
  );
}

type TCategoryBox = {
  icon: string;
  label: string;
};

function CategoryBox({ icon, label }: TCategoryBox) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer">
      <img
        className="rounded-full"
        alt={label}
        src={icon}
        width={30}
        height={30}
      />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
