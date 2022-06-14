const getMasters = require("./getMasters.test")

describe('validate Master Controller', () => {
    test('master length must be 2', async () => {
        const limit = 2;
        const offset = '';
        const cities = '';
        const sortBy = '';
        const select = '';
        const filter = '';
        const data = await getMasters({limit, offset, cities, sortBy, select, filter})
        expect(data.rows.length).toEqual(2)
    })
    test('masters must be undefined', async () => {
        const limit = '-5';
        const offset = '';
        const cities = '';
        const sortBy = '';
        const select = '';
        const filter = '';
        const data = await getMasters({limit, offset, cities, sortBy, select, filter})
        expect(data).toEqual(undefined)
    })
    test('master length must be less than 50', async () => {
        const limit = '51';
        const offset = '';
        const cities = '';
        const sortBy = '';
        const select = '';
        const filter = '';
        const data = await getMasters({limit, offset, cities, sortBy, select, filter})
        /*        expect(getMasters).toBeCalledTimes(1)*/
        expect(data.rows.length).toBeLessThanOrEqual(50)
    })
    test('find masters with city id not equal 1', async () => {
        const limit = '';
        const offset = '';
        const cities = '1';9uu
        const sortBy = '';
        const select = '';
        const filter = '';
        const data = await getMasters({limit, offset, cities, sortBy, select, filter})
        /*        expect(getMasters).toBeCalledTimes(1)*/
        const citiesWithOtherId = data.rows.map((master) => {
            const cityWithOtherId = master.cities.filter((city) => city.id !== 1)
            return cityWithOtherId.length
        })
        const sumOtherCities = citiesWithOtherId.reduce(function(sum, elem) {
            return sum + elem;
        }, 0);
        expect(sumOtherCities).toBe(0)
    })
})
