const model = require("./model");

// post api
const adddata = async (req, res) => {
  const { firstname, lastname, email, mobileNo, city, Adress, Gender } =
    req.body;

  try {
    const userData = new model({
      firstname,
      lastname,
      email,
      mobileNo,
      city,
      Adress,
      Gender,
    });

    const data = await userData.save();
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

// get all data
const getallData = async (req, res) => {
  try {
    const data = await model.find({});
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

// get one data
const getonedata = async (req, res) => {
  try {
    id = req.params;
    const data = await model.findOne({ _id: id });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

// update data
const updateData = async (req, res) => {
  const { firstname, lastname, email, mobileNo, city, Adress, Gender } =
    req.body;

  try {
    const data = await model.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstname,
          lastname,
          email,
          mobileNo,
          city,
          Adress,
          Gender,
        },
      }
    );
    
    res.status(200).send({data});

  } catch (err) {
    console.log(err);
  }
};


// delete api
const deleteData=async(req,res)=>{
    try{
      const { id } = req.params;
      const data = await model.deleteOne({ _id: id }); 
   res.status(200).send(data);
    }

    catch (err) {
        console.log(err);
      }
}

module.exports={adddata,getallData,getonedata,updateData,deleteData};