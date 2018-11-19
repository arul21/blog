const app       = require('../app')
const chai      = require('chai')
const chaiHttp  = require('chai-http')
const expect    = chai.expect

const Article   = require('../models/article')
const Category  = require('../models/category')

chai.use(chaiHttp)

describe('Article CRUD Testing', function() {
    // hooks before each
    let uid = null
    let uidCat = null
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmYxMzI5YWIzYzZmODE3NTU0Yjk1MzYiLCJuYW1lIjoiYXJ1bCIsImVtYWlsIjoiYXJ1bEBtYWlsLmNvbW0iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNTQyNTM0OTEwfQ._SO3q0j2LPLy5ipeLzBPz5jaAdS4t0KHSjmZ_oZo01Q'
    
    beforeEach(function(done) {
        Category.create({name: 'testing'})
        .then( response => {
            uidCat = response._id
            let newArticle = {
                title: 'ini ',
                description: 'cerit  yaudah',
                category: uidCat
            }
            Article.create(newArticle, function(err, result){
                uid = result._id
                done()
            })
        })
        
    })

    afterEach(function(done) {
        Article.remove({_id:uid}, function(err, result){
            Category.remove({_id:uidCat}, function(err, result){
                done()
            })
        })
    })

    it('/GET article', function(done) {
        chai.request(app)
        .get('/articles')
        .end(function(err, res) {
            expect(res).to.have.status(200)
            expect(res.body).to.be.a('array')
            done()
        })
    })

    it('/POST article', function(done) {
        chai.request(app)
        .post('/articles')
        .set('token', token)
        .send({
            title: 'testttt',
            description: 'Ini desccc',
            category: 'testing'
        })
        .end(function(err, res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            done()
        })
    })


    it('/PUT article', function(done) {
        chai.request(app)
        .put('/articles/5bf1357ad6265c18f30236f4')
        .set('token', token)
        .send({
            title: 'Berubah',
            description: 'Ini menceritakan kisah antara aku dan mocha chai'
        })
        .end(function(err, res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            done()
        })
    })

    it('/DELETE article', function(done) {
        chai.request(app)
        .delete('/articles/5bee3e1344714b29e90cd4d8')
        .set('token', token)
        .send({
            title: 'Buah Tangan dari Hacktiv8',
            description: 'dan kepergian aku dari nantinya, tapi belum selesai certanya',
            category: 'story'
        })
        .end(function(err, res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            done()
        })
    })


})