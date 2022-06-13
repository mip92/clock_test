const axios = require("axios");

const login = async () => {
    try {
        const response = await axios.post(`${process.env.API_URL}/api/auth/login`,{
            email:process.env.ADMIN_EMAIL,
            password:process.env.ADMIN_PASSWORD,
        })
        return response
    } catch (e) {

    }
}
module.exports = {
    login
}