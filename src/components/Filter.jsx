import { useState, useEffect } from "react";
import axios from "axios";

function Filter() {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    deltime: "",
    price: "",
    rating: "",
  });

  const [options, setOptions] = useState({
    categories: [],
    brands: [],
    deltimes: [],
    prices: [],
    ratings: [],
  });

  // API endpoints gotten from mocky
  const endpoints = {
    categories: "https://dummyjson.com/c/cb69-0603-4ffa-ae61",
    brands: "https://dummyjson.com/c/db1b-8637-4726-a137",
    prices: "https://dummyjson.com/c/42f9-d8d6-4a1d-867d",
    deltimes: "https://dummyjson.com/c/6bf5-bbd0-426e-83d0",
    ratings: "https://dummyjson.com/c/686f-fac7-488b-8575",
  };

  const fetchData = async (key, url) => {
    try {
      const response = await axios.get(url);
      setOptions((prev) => ({ ...prev, [key]: response.data }));
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    }
  };

  useEffect(() => {
    Object.entries(endpoints).forEach(([key, url]) => fetchData(key, url));
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const dropdownConfig = [
    {
      label: "Category",
      key: "category",
      dataKey: "categories",
      textKey: "name",
      valueKey: "id",
    },
    {
      label: "Brand",
      key: "brand",
      dataKey: "brands",
      textKey: "name",
      valueKey: "id",
    },
    {
      label: "Delivery Time",
      key: "deltime",
      dataKey: "deltimes",
      textKey: "time",
      valueKey: "id",
    },
    {
      label: "Price",
      key: "price",
      dataKey: "prices",
      textKey: "range",
      valueKey: "id",
    },
    {
      label: "Ratings",
      key: "rating",
      dataKey: "ratings",
      textKey: "stars",
      valueKey: "id",
    },
  ];

  return (
    <div className="hidden bg-[#FFED8D] fixed top-16 w-full px-4 py-3 md:flex items-center justify-between z-30">
      {dropdownConfig.map(({ label, key, dataKey, valueKey, textKey }) => (
        <select
          key={key}
          value={filters[key]}
          onChange={(e) => handleFilterChange(key, e.target.value)}
          className="rounded-lg p-2 shadow-lg"
        >
          <option value="">{label}</option>
          {options[dataKey]?.map((item) => (
            <option key={item[valueKey]} value={item[valueKey]}>
              {item[textKey]}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}

export default Filter;

// import { useState, useEffect } from "react";
// import axios from "axios";

// function Filter({ setFilters }) {
//   const [options, setOptions] = useState({
//     categories: [],
//     brands: [],
//     deltimes: [],
//     prices: [],
//     ratings: [],
//   });

//   const endpoints = {
//     categories: "https://dummyjson.com/c/cb69-0603-4ffa-ae61",
//     brands: "https://dummyjson.com/c/db1b-8637-4726-a137",
//     prices: "https://dummyjson.com/c/42f9-d8d6-4a1d-867d",
//     deltimes: "https://run.mocky.io/v3/911df0bc-34de-4da7-9341-cb0c34a7650a",
//     ratings: "https://dummyjson.com/c/686f-fac7-488b-8575",
//   };

//   const fetchData = async (key, url) => {
//     try {
//       const response = await axios.get(url);
//       setOptions((prev) => ({ ...prev, [key]: response.data }));
//     } catch (error) {
//       console.error(`Error fetching ${key}:`, error);
//     }
//   };

//   useEffect(() => {
//     Object.entries(endpoints).forEach(([key, url]) => fetchData(key, url));
//   }, []);

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   const dropdownConfig = [
//     {
//       label: "Category",
//       key: "category",
//       dataKey: "categories",
//       textKey: "name",
//       valueKey: "id",
//     },
//     {
//       label: "Brand",
//       key: "brand",
//       dataKey: "brands",
//       textKey: "name",
//       valueKey: "id",
//     },
//     {
//       label: "Delivery Time",
//       key: "deltime",
//       dataKey: "deltimes",
//       textKey: "time",
//       valueKey: "id",
//     },
//     {
//       label: "Price",
//       key: "price",
//       dataKey: "prices",
//       textKey: "range",
//       valueKey: "id",
//     },
//     {
//       label: "Ratings",
//       key: "rating",
//       dataKey: "ratings",
//       textKey: "stars",
//       valueKey: "id",
//     },
//   ];

//   return (
//     <div className="hidden bg-[#FFED8D] fixed top-16 w-full px-4 py-3 md:flex items-center justify-between z-30">
//       {dropdownConfig.map(({ label, key, dataKey, valueKey, textKey }) => (
//         <select
//           key={key}
//           value={options[key]}
//           onChange={(e) => handleFilterChange(key, e.target.value)}
//           className="rounded-lg p-2 shadow-lg"
//         >
//           <option value="">{label}</option>
//           {options[dataKey]?.map((item) => (
//             <option key={item[valueKey]} value={item[valueKey]}>
//               {item[textKey]}
//             </option>
//           ))}
//         </select>
//       ))}
//     </div>
//   );
// }

// export default Filter;
