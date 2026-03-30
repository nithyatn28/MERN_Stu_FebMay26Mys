const translations = {
    kn : {title : "ಸ್ವಾಗತ",desc:"ಇದು ಸ್ಥಳೀಕೃತ ಇಂಟರ್ಫೇಸ್" },
    en : {title :"welcome",desc: "this is interface"},
    hi : {title :"स्वागत है",desc:"यह एक स्थानीय इंटरफ़ेस है"}
};
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");

function render(lang){
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current ui language"+lang;
    console.log("rendered lang",lang);
}
document.getElementById("langSelect").addEventListener("change",function(){
    render(this.value);
    });
document.getElementById("detectBtn").addEventListener("change",function(){
    const detected = (navigator.language || "en").slice(0,2).toLowerCase();
    render(detected);
    });