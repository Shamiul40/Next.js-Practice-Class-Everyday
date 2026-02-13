
export const getPost=async()=>{
    const res = await fetch("https://api.chucknorris.io/jokes/random")

    if(!res.ok) {
        throw new Error("response is not ok...") 
    }

    return await res.json()

}