module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function get(item) {
  return { ...item };
}

function fail(item) {
  // const enhancementChange = item.enhancement < 15 ? item.durabillity -= 5 :
  //   item.enhancement >= 15 ? item.durabillity -= 10 :
  //     item.enhancement > 16 ? item.enhancement -= 1 : null
//   console.log(item)
  
//   if (item.enhancement < 15) {
//     item.durabillity -= 5
//     return item.durabillity
// } else if (item.enhancement >= 15) {
//     item.durabillity -= 10
//     return item.durabillity
// } else if (item.enhancement > 16) {
//     item.enhancement -= 1
//     return item.enhancement
// }

  return {
    name: item.name,
    enhancement: item.enhancement> 16 ? item.enhancement -= 1 : null,
    durabillity: item.enhancement < 15 ? item.durabillity -= 5: item.durabillity -= 10
  };
}

function repair(item) {
  return item.durabillity = 100;
}

function succeed(item) {
  return item = {
    name: item.name,
    durabillity: item.durabillity,
    enhancement: item.enhancement  === 20 ? item.enhancement : item.enhancement+= 1
  }
}
