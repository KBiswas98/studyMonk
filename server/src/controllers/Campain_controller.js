const Campain = require('../models/Campain_model');

exports.addCampain = (req, res, next) => {
  // const Campain = new Campain({
  //   title: req.body.title,
  //   description: req.body.description,
  //   image: req.body.image
  // });
  // Campain
  //   .save()
  //   .then(() => {
  //     // console.log(req.body.title);
  //     res.send('Campain added successfully');
  //   })
  //   .catch(err => {
  //     res.status(400).send(err);
  //   });
  console.log(req.body)
  res.send('works');
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
  Campain.findById(req.body.id).then(result => {
    result.title = req.body.title;
    result.description = req.body.description;
    result.image = req.body.image;
    return result.save();
  }).then(Campain => {
    res.send('Campain updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deleteCampain = (req, res, next) => {
  Campain.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Campain deleted');
    }).catch(err => res.status(400).send(err));
};