import { wait } from "./wait";

export const getPosts =async()=> {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!posts.ok) {
        throw new Error("post does not found")
    }


   await wait(1000)

    return posts.json();
}