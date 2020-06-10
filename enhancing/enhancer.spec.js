const enhancer = require('./enhancer.js');

test('Durabillity resets to 100', () => {
    const item = {
        durabillity: 59
    }
    const durabillity = enhancer.repair(item)
    expect(durabillity).toBe(100)

})
describe("item correctly enhances", () => {
    const item = {
        name: 'power up',
        durabillity: 90,
        enhancement: 10
    }
    it("MUST INCREASE BY 1", () => {
        const data = enhancer.succeed(item);
        expect(data.enhancement).toBe(11)
    })
    it("If the item enhancement level is 20, the enhancement level is not changed.", () => {
        item.enhancement = 20;
        const data = enhancer.succeed(item);
        expect(data.enhancement).toBe(20
        )
    })
    it("DURRABILITY OF ITEM IS NOT CHANGED", () => {
        const data = enhancer.succeed(item);
        expect(data.durabillity).toBe(90
        )
    })

})
// test away!
