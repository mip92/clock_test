const axios = require("axios");
const {login} = require("./auth/login.test")

jest.mock("axios")

describe('Login', () => {
    let response;
    beforeEach(() => {
        response = {s: 123}
    })

    test('Login', async () => {
        //axios.post.mockReturnValue(response)
        const data = await login()
        expect(axios.post).toBeCalledTimes(1)
        expect(data).toEqual(1)
    })
})

