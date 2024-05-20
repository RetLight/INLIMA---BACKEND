import RepositoryBase from "../repository/base.js";
import modelo from '../model/sexo.js'

const sexoRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const sexo = await sexoRepository.findAll();

    return res.status(200).json(sexo);

}

const create = async (req,res) => {
    const result = await sexoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await sexoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await sexoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await sexoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const sexoDAO = { findAll, create, findOne, update, remove }

export default sexoDAO;