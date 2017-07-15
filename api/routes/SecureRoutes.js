'use strict'

const jwt = require('jsonwebtoken')

const secureRoute = function(secure = true){
	//Instanciar o objeto Router
	const router = require('express').Router()

	//Caso for projetar a rota
	if(secure === true){

		

		router.use((req, res, next) =>{
			const token = req.headers.authorization
			const superSecret = '1234'
			jwt.verify(token, superSecret, (err, data) =>{
				if (data){
					next()
				}else{
					res.status(500).json({
						error: true,
						jwtObjectError: err
					})
				}
			})
		})
	}

	return router
}

module.exports = secureRoute