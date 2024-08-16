import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";

type TLocation = {
  city: string;
  district: string;
  setCity: any;
  setDistrict: any;
};

export default function location({
  city,
  district,
  setCity,
  setDistrict,
}: TLocation) {
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

  return (
    <div className="relative">
      <div className="py-4">
        <Heading
          title="Konum"
          subtitle="
          Yasadiginiz ili ve ilceyi girin
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
    </div>
  );
}
