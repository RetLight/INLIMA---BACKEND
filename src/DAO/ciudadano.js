import RepositoryBase from "../repository/base.js";
import modelo from '../model/ciudadano.js'

const ciudadanoRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const ciudadanos = await ciudadanoRepository.findAll();

    return res.status(200).json(ciudadanos);

}

const create = async (req,res) => {
    const result = await ciudadanoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await ciudadanoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await ciudadanoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await ciudadanoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const ciudadanoDAO = { findAll, create, findOne, update, remove }

export default ciudadanoDAO;