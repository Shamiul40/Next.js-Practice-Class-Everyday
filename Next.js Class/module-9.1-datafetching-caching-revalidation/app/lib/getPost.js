
export const getPost=async(postId)=>{
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    if(!post.ok ) {
        throw new Error("post does not found")
    }

    return  post.json();
}