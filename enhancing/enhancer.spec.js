const enhancer = require('./enhancer.js');

test('Durabillity resets to 100', () => { 
    const item = {
        durabillity: 59
    }
    const durabillity = enhancer.repair(item)
    expect(durabillity).toBe(100)

}) 
// test away!
