 //loading .env variables
 require("dotenv").config({path: '../.env'});

//const server_url = process.env.PRODUCTION_URL || "http://localhost:8000";

const fetch = require("node-fetch");
const token = process.env.YELP;
const url = "https://api.yelp.com/v3/businesses/search";

module.exports = {
    search(req, res) {
        let options = {  
            method: 'GET',
            withCredentials: true,
            credentials: 'include', 
            headers: {
              'Authorization' : `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
        };
    
        let obj = {
            "location": "Richmond,VA",
            "term": req.params.term,
            "limit": 3
        };
    
        let params = Object.entries(obj)
            .map(e => e.join("="))
            .join("&");
    
        return fetch(`${url}?${params}`, options)
            .then(res => res.json())
            .then(data => {
                return res.status(201).send(data);
            })
            .catch(error => res.status(400).send(error));
    }
};
