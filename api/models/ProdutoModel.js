'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _produtoSchema = {

	descricao: String,
	estoque: Number,
	custo: Number,
	venda: Number,
	situacao: String
}

const ProdutoSchema = new Schema(_produtoSchema, { versionKey: false })
const ProdutoModel = mongoose.model('produto', ProdutoSchema)

module.exports = ProdutoModel