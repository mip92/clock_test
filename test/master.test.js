const axios = require("axios");
const {getMasters} = require("./getMasters.test")

jest.mock("axios")

describe('validate Master Controller', () => {
    let response;
    beforeEach(() => {
        response = {
            "count": 4,
            "rows": [{
                "id": 3,
                "name": "mip1992",
                "email": "asdda@afaf.asd",
                "rating": 2,
                "role": "MASTER",
                "isActivated": false,
                "isApproved": false,
                "createdAt": "2022-05-05T08:54:35.169Z",
                "updatedAt": "2022-05-26T08:06:09.332Z",
                "cities": [{
                    "id": 2,
                    "cityName": "Kyiv",
                    "price": 300,
                    "createdAt": "2022-05-03T10:06:02.858Z",
                    "updatedAt": "2022-06-02T08:01:25.117Z",
                    "master_city": {
                        "id": 14,
                        "createdAt": "2022-05-05T08:54:36.488Z",
                        "updatedAt": "2022-05-05T08:54:36.488Z",
                        "masterId": 3,
                        "cityId": 2
                    }
                }]
            }, {
                "id": 2,
                "name": "Anatoliy",
                "email": "oleksandr.boichenko@clockwise.software",
                "rating": 4,
                "role": "MASTER",
                "isActivated": true,
                "isApproved": true,
                "createdAt": "2022-05-04T10:27:06.343Z",
                "updatedAt": "2022-06-03T11:33:18.527Z",
                "cities": [{
                    "id": 2,
                    "cityName": "Kyiv",
                    "price": 300,
                    "createdAt": "2022-05-03T10:06:02.858Z",
                    "updatedAt": "2022-06-02T08:01:25.117Z",
                    "master_city": {
                        "id": 22,
                        "createdAt": "2022-05-10T08:06:46.902Z",
                        "updatedAt": "2022-05-10T08:06:46.902Z",
                        "masterId": 2,
                        "cityId": 2
                    }
                }]
            }, {
                "id": 1,
                "name": "Michael",
                "email": "19misdfp92@gmail.com",
                "rating": 2,
                "role": "MASTER",
                "isActivated": true,
                "isApproved": true,
                "createdAt": "2022-05-03T10:06:02.866Z",
                "updatedAt": "2022-06-03T11:43:25.573Z",
                "cities": [{
                    "id": 1,
                    "cityName": "Dnipro",
                    "price": 200,
                    "createdAt": "2022-05-03T10:06:02.854Z",
                    "updatedAt": "2022-06-02T08:01:00.320Z",
                    "master_city": {
                        "id": 23,
                        "createdAt": "2022-05-11T07:30:13.197Z",
                        "updatedAt": "2022-05-11T07:30:13.197Z",
                        "masterId": 1,
                        "cityId": 1
                    }
                }]
            }, {
                "id": 7,
                "name": "mip1992",
                "email": "19mip92@gmail.com",
                "rating": 4,
                "role": "MASTER",
                "isActivated": true,
                "isApproved": true,
                "createdAt": "2022-05-11T07:30:41.389Z",
                "updatedAt": "2022-06-03T13:52:18.126Z",
                "cities": [{
                    "id": 2,
                    "cityName": "Kyiv",
                    "price": 300,
                    "createdAt": "2022-05-03T10:06:02.858Z",
                    "updatedAt": "2022-06-02T08:01:25.117Z",
                    "master_city": {
                        "id": 26,
                        "createdAt": "2022-05-13T11:21:57.514Z",
                        "updatedAt": "2022-05-13T11:21:57.514Z",
                        "masterId": 7,
                        "cityId": 2
                    }
                }, {
                    "id": 1,
                    "cityName": "Dnipro",
                    "price": 200,
                    "createdAt": "2022-05-03T10:06:02.854Z",
                    "updatedAt": "2022-06-02T08:01:00.320Z",
                    "master_city": {
                        "id": 27,
                        "createdAt": "2022-05-13T11:21:57.514Z",
                        "updatedAt": "2022-05-13T11:21:57.514Z",
                        "masterId": 7,
                        "cityId": 1
                    }
                }]
            }]
        }
    })
    test('Get all masters', async () => {
        axios.get.mockReturnValue(response)
        const data = await getMasters()
        jest.
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(2)
    })
})
