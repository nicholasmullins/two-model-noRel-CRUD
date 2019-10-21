const mongoose = require('mongoose');

const companySchema = new.mongoose.Schema({
    name: String,
    founded: Number,
    CEO: String,
    Origin: String
})

const Company = mongoose.model('Company' , companySchema);

module.exports = Company;
