const express = require("express");
const router = express.Router();
router.get('/',(request,response)=>{
    response.send("Heelo jsdh")
})

const Services = [
    {
        id: 1,
        name: "Web Developer"
    },
    {
        id: 2,
        name: "Game Developer"
    },
    {
        id: 3,
        name: "Developer"
    }
];

router.get("/:no", (request, response) => {
    const Service_id = Number(request.params.no);
    const findService = Services.find(service => service.id === Service_id);
    console.log(findService)
});
module.exports = router;



