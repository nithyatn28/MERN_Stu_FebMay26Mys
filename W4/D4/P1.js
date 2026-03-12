const out = document.getElementById("out");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    const info = {
        htmlLang : document.documentElement.lang,
        charset :document.characterSet,
        browserLanguage: navigator.language,
        browserLanguages: navigator.languages,
        sampleText : document.getElementById("sampleText").textContent 
    };
    console.log(info);
    out.textContent = JSON.stringify(info,null,2);

});