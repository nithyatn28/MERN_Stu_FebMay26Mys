//await with non promise value
function getRedayValue(){
    return 25;
}
function getDelayedValue(){
    return Promise.resolve(75);
}
async function showValues() {
    const readyValue = await getRedayValue();
    const delayedValue = await getDelayedValue();

    console.log("ready value",readyValue);
     console.log("delayed value",delayedValue);
}
showValues() ;