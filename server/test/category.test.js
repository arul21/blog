const app       = require('../app')
const chai      = require('chai')
const chaiHttp  = require('chai-http')
const expect    = chai.expect

const Category   = require('../models/category')

chai.use(chaiHttp)

describe('Category CRUD Testing', function() {

    let uid = null
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmYxMzI5YWIzYzZmODE3NTU0Yjk1MzYiLCJuYW1lIjoiYXJ1bCIsImVtYWlsIjoiYXJ1bEBtYWlsLmNvbW0iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNTQyNTM0OTEwfQ._SO3q0j2LPLy5ipeLzBPz5jaAdS4t0KHSjmZ_oZo01Q'
    let newCategory = {
        name: 'lifestyle'
    }

    beforeEach(function(done) {
        Category.create(newCategory, function(err, result){
            uid = result._id
            done()
        })
    })

    afterEach(function(done) {
        Category.deleteOne({_id:uid}, function(err, result){
            done()
        })
    })

    it('/POST categories', function(done) {
        chai.request(app)
        .post('/category')
        .send(newCategory)
        .set('token', token)
        .end(function(err, res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            Category.deleteOne({_id: res.body._id}, function(err, result) {
                done()
            })
        })
    })

    it('/GET categories', function(done) {
        chai.request(app)
        .get('/category')
        .end(function(err, res) {
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('array')
            done()
        })
    })

})