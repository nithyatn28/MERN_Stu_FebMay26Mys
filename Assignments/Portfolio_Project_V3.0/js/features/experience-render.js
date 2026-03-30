const experienceData = [
  {
    id: 1,
    name: "SSLC",
    description: "Completed in Vivekananda High School Bannuru with 86%"
  },
  {
    id: 2,
    name: "PU",
    description:"Completed in Govt PU College Bannuru with 88%"
  },
  {
    id: 3,
    name: "BE",
    description:"Ongoing in Cauvery Institute Of Technology Mandya "
    
  },
  {
    id: 4,
    name: "Experience",
    description:"AI and ML based Workshop completed"
  }
];
function renderexperience(){
    const experiences =document.getElementById("experience");


    if(!experiences){
        console.log("project container not found");
        return;
    }

    experiences.innerHTML="";
      experienceData.forEach(function(experiencess){
        //to create outer card
        const card=document.createElement("div");
        card.className="p-8 text-center bg-white rounded-3xl shadow-lg";

        //create icon
        const iconBox=document.createElement("div");
        iconBox.className="w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex-item-center justify-center";

        //create icon text
        const iconText=document.createElement("span");
        iconText.className="text-2xl text-white font-bold";
        iconText.textContent=experiences.shortLabel;
        
        //put icon text inside icon box
        iconBox.appendChild(iconText);

        //create skill name
        const experiencesName=document.createElement("h3");
        experiencesName.className="text-xl fonr-bold mb-2";
        experiencesName.textContent=experiences.name;

        //create skill Description
        const experiencesDescription=document.createElement("p");
        experiencesDescription.className="text-sm";
        experiencesDescription.textContent=experiences.description;

        //Append all child elements to card
         card.appendChild(iconBox);
        card.appendChild(experiencesName);
        card.appendChild(experiencesDescription);

        //Append card to project container
        experiences.appendChild(card);
    });
    console.log("experience rendered successfully");
}