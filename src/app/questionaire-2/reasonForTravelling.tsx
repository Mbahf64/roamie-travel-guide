import React from "react";
import Link from "next/link";
const countryData = [
  { id: 1, name: "Tourism", text: "Tourist Visa", image: "/Ellipse(b).svg" },
  { id: 2, name: "Business", text: "Business Visa", image: "/Ellipse(b).svg" },
  { id: 3, name: "Work", text: "Work Visa/Permit", image: "/Ellipse(b).svg" },
  { id: 4, name: "Investor", text: "Investor Visa", image: "/Ellipse(b).svg" },
  { id: 5, name: "Dig. Normad", text: "Normad Visa", image: "/Ellipse(b).svg" },
  { id: 6, name: "School", text: "Student Visa", image: "/Ellipse(b).svg" },
];

const CountryImageGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {countryData.map((country) => (
        <Link className="" href="/questionaire-3">
          <div
            key={country.id}
            className="relative overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              className="w-full h-auto object-cover"
              alt={country.name}
              src={country.image}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center ml-8 ">
              <h3 className="text-[#292d32] text-2xl font-normal mb-1">
                {country.name}
              </h3>
              <p className="text-[#646d80] text-xs font-normal text-center">
                {country.text}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryImageGrid;
