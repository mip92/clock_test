const axios = require("axios");

const getMasters = async () => {
    try {
        const response = await axios.get(`${process.env.API_URL}/api/masters`)
        return response
    } catch (e) {

    }
}
module.exports = {
    getMasters
}