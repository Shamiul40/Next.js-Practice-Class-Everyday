import { cookies } from "next/headers";
import Image from "next/image";
import { getJoke } from "./lib/getJoke";

export default async function Home() {
  const theme = cookies().get("theme")
  const joke= await getJoke()
   

  return (
    <>
      <h1>shamiul islam</h1>
      
        <p>
          {joke.value}
        </p>
      
    </>
  );
}
