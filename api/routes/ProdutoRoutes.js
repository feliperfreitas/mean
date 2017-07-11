'use strict'

const express = require('express')
const router = express.Router()
const ProdutoModel = require('../models/ProdutoModel')


//CREATE
router.post('/create', (req, res) => {
	
	const body = req.body
	
	ProdutoModel.create(body, (err, data) =>{
		if (err) return res.status(500).json(err)
			return res.status(201).json(data)
	})

})

//RETRIEVE
router.get('/retrieve', (req, res)=> {
	const query = {}
	ProdutoModel.find(query, (err, data) => {
		if (err) return res.status(500).json(err)
			return res.status(200).json(data)	
	})
})

//RETRIEVE COM ID
router.get('/retrieve/:_id', (req, res)=> {
	const _id = req.params._id
	const query = { _id: _id }
	ProdutoModel.findOne(query, (err, data) => {
		if (err) return res.status(500).json(err)
			return res.status(200).json(data)	
	})
})


//UPDATE
router.post('/update', (req, res) => {
	const body = req.body
	const query = { _id:  body._id }
	delete body._id
	ProdutoModel.update(query, body, (err, data) =>{
		if (err) return res.status(500).json(err)
			return res.status(200).json(data)
	})
})

//DELETE
router.get('/delete/:_id', (req, res)=> {
	const _id = req.params._id
	const query = { _id: _id }
	ProdutoModel.remove(query, (err, data) => {
		if (err) return res.status(500).json(err)
			return res.status(200).json(data)	
	})
})

module.exports = router