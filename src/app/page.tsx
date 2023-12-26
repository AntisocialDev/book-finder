import Image from "next/image";
import libraryImage from "../../public/images/library.jpg";
import nextLogo from "../../public/images/next-logo.svg";
import tailwindLogo from "../../public/images/tailwind-logo.svg";
import googleLogo from "../../public/images/google-logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row items-center gap-20">
        <div className="flex items-center text-center md:text-left md:items-start flex-col gap-5 md:w-2/4 min-w-[45%]">
          <h2 className="text-5xl">
            Find <span className="text-primary">books</span> by their title or
            authors
          </h2>
          <p>
            Looking for a book but don`t know the name of the book? No Problem!
            Find books by the author name or publisher
          </p>
          <Link href="/search">
            {" "}
            <button className="bg-primary text-white w-[200px] h-10 rounded-md">
              Search Now
            </button>
          </Link>
        </div>
        <div className="hidden md:block">
          <Image
            src={libraryImage}
            width={600}
            height={200}
            quality={100}
            alt="library image"
          />
        </div>
      </section>

      <section className="mt-10 text-center flex flex-col items-center">
        <h2 className="text-3xl">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <Image
            src={nextLogo}
            width={50}
            height={50}
            quality={100}
            alt="Next.js Logo"
          />
          <Image
            src={tailwindLogo}
            width={50}
            height={50}
            quality={100}
            alt="Tailwind Logo"
          />
          <Image
            src={googleLogo}
            width={50}
            height={50}
            quality={100}
            className="object-cover"
            alt="Google Logo"
          />
        </div>
      </section>
    </main>
  );
}
