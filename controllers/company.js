const express = require('express')
const router = express.Router();
const Company = require('../models/company.js');

// INDEX

router.get('/', (req, res) => {
    Company.find({}, (err, allCompanies) => {
        if (err) {
            res.send(err)
        } else {
            res.render('company/index.ejs', {
                companies: allCompanies
            });
            
        }
    });
});

// NEW 

router.get('/new', (req, res) => {
    res.render('company/new.ejs');
})
// EDIT

router.get('/:id/edit', (req, res) => {
   Company.findById (req.params.id, (err, editCompany)=> {
       if (err) {
           res.send(err);
       } else {
           res.render('company/edit.ejs', {
            companies: editCompany
        })
       }
        
   })

});
// SHOW

router.get('/:id', (req, res) => {
    Company.findById(req.params.id, (err, foundCompany) => {      
        res.render('company/show.ejs', {
            company: foundCompany
        })
    })
})

// POST 

router.post('/', (req, res) => {
    Company.create(req.body, (err, createdCompany) => {
        if(err) {
            res.send(err);
        } else {
            res.redirect('company/')
        }
    })
})


// PUT
router.route('/:id', (req, res) => {
    Company.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editedCompany) => {
        if (err){
            res.send(err);
        } else {
            res.redirect('/company' + req.params.id);
        }
    })
})

// DELETE

module.exports = router;
