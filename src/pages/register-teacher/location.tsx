import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import LeftSide from "./left-side";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTeacherInfoStore } from "@/contexts/teacher-info";

export default function location() {
  const { setTeacherInfo } = useTeacherInfoStore();

  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [districtSearch, setDistrictSearch] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [dropdownDistricts, setDropdownDistricts] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showDistrictDropdown, setShowDistrictDropdown] =
    useState<boolean>(false);

  const citiesRef = useRef<HTMLDivElement>(null);
  const districtsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCities = async () => {
      if (!search) {
        const response = await fetch(`/api/location/city`);
        if (!response.ok) {
          throw new Error("Location service unavailable");
        }
        const data = await response.json();
        return setCities(data);
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

  useEffect(() => {
    setDropdownDistricts(
      districts.filter((district) =>
        district.toLowerCase().includes(districtSearch.toLowerCase())
      )
    );
  }, [districtSearch]);

  const handleCityClickOutside = (event: MouseEvent) => {
    if (
      citiesRef.current &&
      !citiesRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCityClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCityClickOutside);
    };
  }, []);

  const handleDistrictClickOutside = (event: MouseEvent) => {
    if (
      districtsRef.current &&
      !districtsRef.current.contains(event.target as Node)
    ) {
      setShowDistrictDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDistrictClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleDistrictClickOutside);
    };
  }, []);

  async function handleClick() {
    setIsLoading(true);
    if (!city || !district) {
      toast.error("Lütfen şehir ve ilçe seçin.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/teacher-info", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city, district }),
    });

    if (!response.ok) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      setIsLoading(false);
      return;
    }

    const data = await response.json();
    setTeacherInfo(data);
    setIsLoading(false);

    toast.success("Konumunuz başarıyla kaydedildi.");
  }

  const childNode = (
    <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
      <div>
        <br />
        <p>Lütfen yaşadığınız il ve ilçeyi seçin.</p>
        <br />
        <p>
          Bu bilgiyle sizinle aynı yerde yaşayan ve orada ders talebi olan
          öğrencilerle iletişim kurabileceksiniz.
        </p>
        <br />
        <p>
          Merak etmeyin, ders vermek istediğiniz yer yaşadığınız ilçeyle sınırlı
          değil. Bir sonraki adımda ders verebileceğiniz diğer ilçeleri de
          seçebileceksiniz.
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
              title="Konum"
              subtitle="
          Yaşadığınız şehri ve ilçeyi seçin.
        "
            />
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {city && (
              <div className="py-2 flex items-center">
                <span>{city}</span>
                <IoMdClose
                  className="ml-1 cursor-pointer"
                  onClick={() => {
                    setCity("");
                    setDistrict("");
                    setDistricts([]);
                  }}
                />
              </div>
            )}
            {district && (
              <div className="py-2 flex items-center">
                <span>{district}</span>
                <IoMdClose
                  className="ml-1 cursor-pointer"
                  onClick={() => setDistrict("")}
                />
              </div>
            )}
          </div>
          <Input
            type="text"
            placeholder={city ? city : "Yasadiginiz ili girin"}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
          />
          <div className="w-full" ref={citiesRef}>
            {showDropdown && cities.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-sm">
                {cities.map((item) => (
                  <li
                    key={item}
                    className="p-2 cursor-pointer hover:bg-gray-200 font-normal"
                    onClick={() => {
                      setCity(item);
                      setDistrict("");
                      setShowDropdown(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Input
            type="text"
            className="mt-4"
            placeholder={district ? district : "Yasadiginiz ilceyi girin"}
            onChange={(e) => {
              setDistrictSearch(e.currentTarget.value);
              setShowDistrictDropdown(true);
            }}
            onFocus={() => setShowDistrictDropdown(true)}
            readOnly={!city}
          />
          <div className="w-full" ref={districtsRef}>
            {showDistrictDropdown && districts.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-sm">
                {dropdownDistricts.map((item) => (
                  <li
                    key={item}
                    className="p-2 cursor-pointer hover:bg-gray-200 font-normal"
                    onClick={() => {
                      setDistrict(item);
                      setShowDistrictDropdown(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
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
