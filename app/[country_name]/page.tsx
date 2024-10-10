import Image from "next/image"; // Use Next.js Image component
import Link from "next/link";

interface Params {
  country_name: string;
}

const countries = [
  {
    name: "Canada",
    population: 37742154,
    capital: "Ottawa",
    flag: "/images/canada-flag.png"
  },
  {
    name: "Pakistan",
    population: 241492917,
    capital: "Islamabad",
    flag: "/images/pakistan-flag.png"
  },
  { 
    name: 'Japan', 
    population: 125960000, 
    capital: 'Tokyo', 
    flag: '/images/japan-flag.png'
  },
  { 
    name: 'Germany', 
    population: 83240525, 
    capital: 'Berlin', 
    flag: '/images/germany-flag.png'
  },
  { 
    name: 'India', 
    population: 1393409038, 
    capital: 'New Delhi', 
    flag: '/images/india-flag.png'
  },
];

export default function CountryPage({ params }: { params: Params }) { 
  const { country_name } = params; 

  const country = countries.find(
    (c) => c.name.toLowerCase() === country_name?.toLowerCase()
  );

  if (!country) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-red-500 text-2xl text-center mt-5 font-bold">
            Oops! Country Not Found!
          </h1>
          <Link href="/">
            <button className="mt-4 bg-red-500 text-white justify-items-center px-4 py-2 rounded hover:bg-blue-600">
              Go to Home
            </button>
          </Link>
        </main>
      </div>
    ); 
  } else {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <strong>Country:</strong> {country.name}
            </li>
            <li className="mb-2">
              <strong>Population:</strong> {country.population}
            </li>
            <li className="mb-2">
              <strong>Capital:</strong> {country.capital}
            </li>
            <li className="mb-2">
              <Image src={country.flag} alt={`${country.name} flag`} width={100} height={66} /> {/* Use Image component */}
            </li>
          </ol>
          <Link href="/">
            <button className="mt-4 bg-red-500 text-white justify-items-center px-4 py-2 rounded hover:bg-blue-600">
              Go to Home
            </button>
          </Link>
        </main>
      </div>
    );
  }
}
