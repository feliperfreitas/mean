'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _usuarioSchema = {

	nome_completo: String,
	usuario: String,
	senha: String

}

const UsuarioSchema = new Schema(_usuarioSchema, { versionKey: false })
const UsuarioModel = mongoose.model('usuario', UsuarioSchema)

module.exports = UsuarioModel