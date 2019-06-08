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
Route.post('/usuarios/login', 'UsuarioController.login')

Route.get('/usuarios/todos', 'UsuarioController.index').middleware(['auth:jwt'])
Route.get('/usuarios/:id', 'UsuarioController.show').middleware(['auth:jwt'])
Route.post('/usuarios/nuevo', 'UsuarioController.store').middleware(['auth:jwt'])
Route.put('/usuarios/actualizar/:id', 'UsuarioController.update').middleware(['auth:jwt'])
Route.delete('/usuarios/eliminar/:id', 'UsuarioController.destroy').middleware(['auth:jwt'])


