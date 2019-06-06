'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Hash = use('Hash')

class Usuario extends Model {
    static boot(){
        super.boot()
        this.addHook('beforeSave', async (usuarioInstance)=>{
            if(usuarioInstance.contra){
                usuarioInstance.contra=await Hash.make(usuarioInstance.contra)
            }
        })
    }
    
    static get createdAtColumn(){
        return null
    }
    static get updatedAtColumn(){
        return null
    }
}

module.exports = Usuario
