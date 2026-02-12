
export const getPost=async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok) {
        throw new Error("response is not ok")
    }

    return await res.json()

}