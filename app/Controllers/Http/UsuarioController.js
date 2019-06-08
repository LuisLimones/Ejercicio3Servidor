'use strict'
const Usuario = use('App/Models/Usuario');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    try {
      let usuarios = await Usuario.all();
      return response.json(usuarios);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
    const nombre = request.input('nombre')
    const apellidoP = request.input('apellidoP')
    const apellidoM = request.input('apellidoM')
    const correo = request.input('correo')
    const contra = request.input('contra')

    const usuario = new Usuario()
    usuario.nombre = nombre
    usuario.apellidoP = apellidoP
    usuario.apellidoM = apellidoM
    usuario.correo = correo
    usuario.contra = contra
    
    await usuario.save()
    return response.json(usuario)
    }
    catch(error){
      console.log(error)
      return response.json(error)
    }
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    try {
      let usuario = await Usuario.find(params.id);
      return response.json(usuario);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      let nombre=request.input('nombre');
      let apellidoP=request.input('apellidoP');
      let apellidoM=request.input('apellidoM');
      let correo=request.input('correo');
      let contra=request.input('contra');
      let usuario= await Usuario.find(params.id);
      usuario.nombre=nombre;
      usuario.apellidoP=apellidoP;
      usuario.apellidoM=apellidoM;
      usuario.correo=correo;
      usuario.contra=contra;
      await usuario.save();
      return response.json(usuario);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const usuario = await Usuario.find(params.id)
    console.log(usuario)
    await usuario.delete()
    return response.json({message: 'Usuario ELiminado '})
  }

  async login({request, response, auth}){
    try {
      const correo=request.input('correo');
      const contra=request.input('contra');
      let token=await auth.attempt(correo, contra);
      console.log(token);
      if(!token.token){
        console.log("llega if")
        return response.json({'error': "Usuario no encontrado"}) 
      }
      else{
        console.log("llega else");
        return response.json(token)
      }
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = UsuarioController
