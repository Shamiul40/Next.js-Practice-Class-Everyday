import { cookies } from "next/headers";
import Image from "next/image";
import { getJoke } from "./lib/getJoke";
import NewUserForm from "./Components/NewUserForm";
import UserList from "./Components/UserList";

export default async function Home() {
 
   

  return (
    <div className="flex flex-col justify-center gap-2 w-10/12 mx-auto items-center min-h-screen">
      <NewUserForm></NewUserForm>
      <UserList></UserList>
    </div>
  );
}
