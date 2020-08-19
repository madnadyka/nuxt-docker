
const axios = require('axios');
const {Router} = require('express');
const router = Router();


router.get('/user/dashboard', async (req, res) => {
    let cookies_data = req.cookies;

        await axios.get(req.app.get('api_endpoint') +"/users/1", {
            // headers: {'Access-Token': req.app.get('api_access_token')}
        }).then((response) => {
            res.json(response['data'])
        })
           .catch((e) => {
                console.log("ERROR path ",req.path)
                let error = "Internal server error";
                let status=500;
                if ('response' in e){
                    if ('message' in e.response.data){
                        console.log("error message:", e.response.data.message);
                        error=e.response.data.message;
                    }
                    status=e.response.status
                }
                res.status(status).json({"error_msg":error})
            });
});

module.exports = router;