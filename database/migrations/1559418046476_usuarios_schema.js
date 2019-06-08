'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nombre', 50).notNullable()
      table.string('apellidoP', 50).notNullable()
      table.string('apellidoM', 50).notNullable()
      table.string('correo', 50).notNullable().unique()
      table.string('contra', 300).notNullable()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
