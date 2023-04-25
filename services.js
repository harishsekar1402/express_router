const express = require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send("Hello im  Service page")
})
router.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
module.exports = router