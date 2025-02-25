const express = require("express");
const { adddata, getallData, getonedata, updateData, deleteData } = require("./controller");

const route = express.Router();

route.get("/getdata", getallData);
route.post("/adddata", adddata);
route.get("/getonedata/:id", getonedata);
route.put("/updatedata/:id", updateData);
route.delete("/deletedata/:id", deleteData);

module.exports = route;
