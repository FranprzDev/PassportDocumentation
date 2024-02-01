"use client";

import { methods } from "../utils/utils";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  const methodsOrdenados = methods.sort((a, b) =>
    a.Ejemplo === b.Ejemplo ? 0 : a.Ejemplo ? -1 : 1
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:px-24 md:py-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-green-500">
            Passport Documentation
          </h1>
          <p className="">
            This is a documentation for the most concurrated Passport Strategys,{" "}
            <br />
            this documentation providers by <span> </span>
            <a
              className="text-2xl font-extralight text-rose-300 underline decoration-rose-800"
              href="https://rollingcodeschool.com"
              target="_blank"
            >
              RollingCode School
            </a>
          </p>
          <br />
          <p>
            Pass the cursor for the name of the Strategy and if the underline is
            green, it means that there is an example of how to use it. but if
            the underline is red, it means that there is no example of how to
            use it, and you can contribute to this documentation. Addind a new
            example of how to use it in the <span> </span>{" "}
            <a
              target="_blank"
              href="https://github.com/JoseScap/passport-local-google-github/blob/main/src/passport/index.js"
              className="text-cyan-300"
            >
              github
            </a>
            {" "} when you make a PR to the repository, follow make a change in the repository of
            this page in the array <span className="text-rose-500">src/app/utils/utils.js</span>
            and put the strategy you make the example in 'Example': True.
          </p>
        </section>

        <section className="text-center my-5 w-full">
          {methodsOrdenados.map((method, index) => {
            return (
              <section
                key={index}
                className={`flex justify-between text-start my-2 `}
              >
                <Link
                  href={method.Link}
                  className={`text-2xl text-cyan-200 font-bold ${
                    method.Ejemplo
                      ? "hover:underline hover:decoration-green-500"
                      : "hover:underline hover:decoration-rose-800"
                  }`}
                  target="_blank"
                >
                  {method.Nombre}
                </Link>
                <Link
                  href={`${
                    method.Ejemplo
                      ? "https://github.com/JoseScap/passport-local-google-github/blob/main/src/passport/index.js"
                      : ""
                  }`}
                  target="_blank"
                >
                  <Image
                    src="/examples.png"
                    width={35}
                    height={35}
                    alt="Picture of the author"
                    className="img-color"
                  />
                </Link>
              </section>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
