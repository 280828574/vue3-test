const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  if (key === './index.js' || key === './request.js') return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key);
});

export default modules;
