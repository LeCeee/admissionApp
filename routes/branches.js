const express = require('express');
const bodyParser = require('body-parser');
const Branches = require('../models/branch');
const branchRouter = express.Router();
//const cors = require('./cors');

//const authenticate = require('../authenticate');
branchRouter.use(bodyParser.json());

branchRouter.route('/')
//.options(cors.corsWithOptions,(req,res) => { res.sendStatus(200)})

.get((req,res,next) => {
    Branches.find({})
    .then((branches) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(branches);
    },(err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Branches.create(req.body)
    .then((branch) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(branch);
    },(err) => next(err))
    .catch((err) => next(err));   
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req,res,next) => {
    Branches.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err) => next(err));
});


/*leaderRouter.route('/:leaderId')
.options(cors.corsWithOptions,(req,res) => { res.sendStatus(200)})

.get(cors.cors,(req,res,next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    },(err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /leaders/'+ req.params.leaderId);
})
.put(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Leaders.findByIdAndUpdate(req.params.leaderId,{
        $set:req.body
    },{new:true})
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(leader);
    },(err) => next(err))
    .catch((err) => next(err));

})
.delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err) => next(err));

});
*/

module.exports = branchRouter;