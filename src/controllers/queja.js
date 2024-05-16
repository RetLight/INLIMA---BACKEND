import RepositoryBase from "../repository/base.js";
import modelo from '../model/queja.js'

const quejaRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const quejas = await quejaRepository.findAll();

    return res.status(200).json(quejas);

}

const create = async (req,res) => {
    const result = await quejaRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await quejaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await quejaRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await quejaRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const quejaController = { findAll, create, findOne, update, remove }

export default quejaController;