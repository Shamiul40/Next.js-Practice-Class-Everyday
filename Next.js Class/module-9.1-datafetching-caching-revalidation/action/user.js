"use server"
import connectMongo from "@/dbconnect/connectMongo"
import User from "@/models/user"

  
 
export const addUser=async(formData)=>{
       
       
       const name = formData.get("name")
       const email = formData.get("email")

       const userData = {
        name,
        email
       }

       await connectMongo()

       await new User(userData).save();
    }
