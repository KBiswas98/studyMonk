const Campain = require("../models/Campain_model");
var path = require("path");

const AWS = require("aws-sdk");

exports.addCampain = (req, res, next) => {
  // just look what is comeing in req
  console.log(req);

  // only look for the files
  console.log(req.files);

  // pull out the imgae from request.
  let image = req.files.image;

  // set a new imagename || get the name of a image
  const image_name = Date.now() + path.extname(image.name);
  image.name = image_name;

  // upload file to s3
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.IAM_USER_KEY,
    secretAccessKey: process.env.IAM_USER_SECRET,
    Bucket: process.env.BUCKET_NAME
  });
  s3bucket.createBucket(function() {
    var params = {
      Bucket: process.env.BUCKET_NAME,
      Key: image.name,
      Body: image.data
    };
    s3bucket.upload(params, function(err, data) {
      if (err) {
        console.log("error in callback");
        console.log(err);
        res.send(404);
      }
      console.log("success");
      console.log(data);

      // creating mongo object
      const campain = new Campain({
        name: req.body.campain_name,
        image_path: data.Location,
        platfrom: req.body.platfrom
      });

      // save the data to mongodb.
      campain
        .save()
        .then(() => {
          res.send(data.Location);
        })
        .catch(err => {
          res.status(400).send(err);
        });
      // res.send(data.Location);
    });
  });
};

exports.showCampain = (req, res, next) => {
  Campain.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.singleCampain = (req, res, next) => {
  Campain.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateCampain = (req, res, next) => {
  Campain.findById(req.body.id)
    .then(result => {
      result.title = req.body.title;
      result.description = req.body.description;
      result.image = req.body.image;
      return result.save();
    })
    .then(Campain => {
      res.send("Campain updated successfully");
    })
    .catch(err => res.status(400).send(err));
};

exports.deleteCampain = (req, res, next) => {
  Campain.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send("Campain deleted");
    })
    .catch(err => res.status(400).send(err));
};
