
export const getPosts =async()=> {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!posts.ok) {
        throw new Error("post does not found")
    }


    return posts.json();
}