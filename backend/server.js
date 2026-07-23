const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("MindBloom Backend is Running 🚀");
});

// Mood API
app.post("/mood", (req, res) => {

    const { mood, reason } = req.body;

    console.log("Mood:", mood);
    console.log("Reason:", reason);

    res.json({
        success: true,
        message: "Mood Saved Successfully!"
    });

});
app.post("/recommend",(req,res)=>{

const {problem}=req.body;

let doctor={};

if(problem==="Stress" || problem==="Anxiety"){

doctor={

name:"Dr. Sarah Johnson",

specialization:"Clinical Psychologist",

experience:"15 Years",

image:"https://randomuser.me/api/portraits/women/44.jpg",

reason:"A Clinical Psychologist specializes in stress, anxiety and emotional wellbeing."

};

}

else if(problem==="Depression"){

doctor={

name:"Dr. Michael Lee",

specialization:"Psychiatrist",

experience:"18 Years",

image:"https://randomuser.me/api/portraits/men/32.jpg",

reason:"A Psychiatrist can diagnose and treat depression with therapy and medication if required."

};

}

else if(problem==="Relationship Issues"){

doctor={

name:"Dr. Emily Carter",

specialization:"Relationship Counsellor",

experience:"12 Years",

image:"https://randomuser.me/api/portraits/women/68.jpg",

reason:"Relationship counsellors help improve communication and resolve conflicts."

};

}

else{

doctor={

name:"Dr. David Wilson",

specialization:"Mental Wellness Therapist",

experience:"10 Years",

image:"https://randomuser.me/api/portraits/men/55.jpg",

reason:"A general mental wellness therapist can help with your concerns."

};

}

res.json(doctor);

});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});