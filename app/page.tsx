import Image from "next/image";
import Link from "next/link";

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
    name: "Japan",
    population: 125960000,
    capital: "Tokyo",
    flag: "/images/japan-flag.png"
  },
  {
    name: "Germany",
    population: 83240525,
    capital: "Berlin",
    flag: "/images/germany-flag.png"
  },
  {
    name: "India",
    population: 1393409038,
    capital: "New Delhi",
    flag: "/images/india-flag.png"
  },
]; 

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/images/next-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {countries.map((country) => (
            <li key={country.name} className="mb-2 flex items-center gap-2">
              <Image src={country.flag} alt={`${country.name} flag`} width={20} height={20} />
              <Link href={`/${country.name.toLowerCase()}`}>
                {country.name}
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/profile.php?id=100015295020703"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Developed By Adnan Khan 
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Project Type Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Adnankhan109/dynamic-routing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github Source Code
        </a>
      </footer>
    </div>
  );
}
