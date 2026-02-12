
export const getJoke =async()=>{

    const res= await fetch("https://api.chucknorris.io/jokes/random")

    if(!res.ok) {
        throw new Error("data not found")
    }
    return res.json()


}