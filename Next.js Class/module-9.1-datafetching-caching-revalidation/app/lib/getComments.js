import { wait } from "./wait";

export const getComments=async(postId)=>{

    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

    await wait(3000)

    return comments.json();

}