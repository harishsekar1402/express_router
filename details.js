const express = require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send("Hello im Detailspage")
})
module.exports = router