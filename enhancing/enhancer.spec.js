const enhancer = require('./enhancer.js');

test('Durabillity resets to 100', () => {
    const item = {
        durabillity: 59
    }
    const durabillity = enhancer.repair(item)
    expect(durabillity).toBe(100)

})
describe("ENHANCEMENT SUCCEEDS", () => {
    const item = {
        name: 'power up',
        durabillity: 90,
        enhancement: 10
    }
    it("MUST INCREASE BY 1", () => {
        const data = enhancer.succeed(item); //this item perameter transfers to function
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
describe("ENHANCEMENT FAILS", () => {
    const item = {
        name: 'power up',
        durabillity: 90,
        enhancement: 10
    }
    it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
        const data = enhancer.fail(item);
        expect(data.durabillity).toBe(85)
    })
    it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
        item.enhancement = 15;
        item.durabillity = 90;
        const data = enhancer.fail(item);
        expect(data.durabillity).toBe(80
        )
    })
    it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).", () => {
        item.enhancement = 17
        const data = enhancer.fail(item);
        expect(data.enhancement).toBe(16
        )
    })

})
describe("TEST THE GET METHOD", () => {
    const item = {
        name: 'power up',
        durabillity: 90,
        enhancement: 10
    }
    it("if the enhancement level is 0, the the name is not modified.", () => {
        item.enhancement = 0
        const data = enhancer.get(item);
        expect(data.name).toBe('power up')
    })
    it("if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a 'Iron Sword' enhanced to 7 would be [+7] Iron Sword", () => {
        item.enhancement = 15;
        const data = enhancer.get(item);
        expect(data.name).toBe(`[+${data.enhancement}] power up`
        )
    })

})
// test away!
