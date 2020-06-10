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
  return  ;
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
