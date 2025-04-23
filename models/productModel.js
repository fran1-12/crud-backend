const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/data.json");

function getData() {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
}

function saveData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = {
  findAll: () => getData(),
  findById: (id) => getData().find((item) => item.id === id),
  create: (product) => {
    const data = getData();
    data.push(product);
    saveData(data);
  },
  update: (id, updatedProduct) => {
    let data = getData();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedProduct };
      saveData(data);
      return true;
    }
    return false;
  },
  delete: (id) => {
    let data = getData();
    const newData = data.filter((item) => item.id !== id);
    saveData(newData);
  },
};