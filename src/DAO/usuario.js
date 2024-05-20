import RepositoryBase from "../repository/base.js";
import modelo from '../model/usuario.js'

const usuarioRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const usuarios = await usuarioRepository.findAll();

    return res.status(200).json(usuarios);

}

const create = async (req,res) => {
    const result = await usuarioRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await usuarioRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await usuarioRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await usuarioRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const usuarioDAO = { findAll, create, findOne, update, remove }

export default usuarioDAO;