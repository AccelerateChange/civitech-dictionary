const data = require('./lib/ovr_state_data')


function getByState(state) {
  return data.filter((item) => item.state === state);
}

function getByStateLong(stateLong) {
  return data.filter((item) => item.state_long === stateLong);
}

module.exports = {
  getByState,
  getByStateLong
};
