export default  () => {
    const dummyPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    });
    return dummyPromise;
}