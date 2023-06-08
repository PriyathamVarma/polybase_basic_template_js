import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import db from "../polybase/config.jsx";

export default function Home() {
  // Methods

  const formSubmitted = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const age = event.target.age.value;

    console.log(name, age);

    // Submitting the data
    const id = Math.floor(Math.random() * 1000000); // This can be changed to a more unique id
    const submittingData = await db
      .collection("SampleCollection")
      .create([id, name, age]);
  };

  return (
    <div>
      <Head>
        <title>Create Next App with Polybase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="font-bold mb-5 border-8 border-indigo-500 p-5">
            Polybase + Next.js App starter template
          </h1>
        </div>

        <div>
          <form onSubmit={formSubmitted} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="age"
                className="block mb-2 font-semibold text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none"
            />
          </form>
        </div>
      </main>
    </div>
  );
}