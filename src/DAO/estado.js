import RepositoryBase from "../repository/base.js";
import modelo from '../model/estado.js'

const estadoRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const estados = await estadoRepository.findAll();

    return res.status(200).json(estados);

}

const create = async (req,res) => {
    const result = await estadoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await estadoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await estadoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await estadoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const estadoDAO = { findAll, create, findOne, update, remove }

export default estadoDAO;