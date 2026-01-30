
export default async function deLayFunc (seconds) {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve()
        }, seconds);
    })
}