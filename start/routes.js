'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/usuarios/todos', 'UsuarioController.index')
Route.get('/usuarios/:id', 'UsuarioController.show')
Route.post('/usuarios/nuevo', 'UsuarioController.store')
Route.put('/usuarios/actualizar/:id', 'UsuarioController.update')
Route.delete('/usuarios/eliminar/:id', 'UsuarioController.destroy')

Route.post('/usuarios/login', 'UsuarioController.login')

Route.put('/api/contacts/:id', 'ContactController.update')
Route.delete('/api/contacts/:id', 'ContactController.destroy')
Route.post('/api/contacts', 'ContactController.store')
Route.get('/api/contacts', 'ContactController.index') 

