'use strict'

const express = require('express')
const router = require('./SecureRoutes')(false)
const jwt = require('jsonwebtoken')

const UsuarioModel = require('../models/UsuarioModel')

router.post('/', (req, res) => {
	
	const body = req.body
	
	const query = {usuario: body.usuario, senha: body.senha}

	UsuarioModel.findOne(query, (err, data) => {

		if(err){
			res.status(500).json({erro: true, message: err})
		}

		if(data){

			let superSecret = '1234'
			let Jwtdata = { }
			let options = {
				algorithm: 'HS256', //Tipo de criptografia
				expiresIn: 60*60*8 //expira em 8 horas
			}

			jwt.sign(Jwtdata, superSecret, options, function(err, token){
				if(err){
					res.status(500).json({error: true, JwtObjectError: err})
				}else{
					return res.status(200).json({error: false, message: 'Usuário Logado com Sucesso', token: token})
				}
			})

		}else{
			return res.status(200).json({error: true, message: 'Usuário ou Senha Inválida'})
		}

	})

})

module.exports = router