import RepositoryBase from "../repository/base.js";
import modelo from '../model/rol.js'

const rolRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const roles = await rolRepository.findAll();

    return res.status(200).json(roles);

}

const create = async (req,res) => {
    const result = await rolRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await rolRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await rolRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await rolRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const roLDAO = { findAll, create, findOne, update, remove }

export default rolDAO;