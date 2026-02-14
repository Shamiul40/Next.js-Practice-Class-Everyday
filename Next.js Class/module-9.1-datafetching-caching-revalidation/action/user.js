"use server";
import connectMongo from "@/dbconnect/connectMongo";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };

  try {
    await connectMongo();

    //  data save
    await new User(userData).save();

    //    revalidate data
    revalidatePath("/")
    

  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
    await connectMongo();

    const Users = await User.find();

    return Users;
  } catch (err) {
    console.log(err);
  }
};
