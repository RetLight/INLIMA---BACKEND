import RepositoryBase from "../repository/base.js";
import modelo from '../model/municipalidad.js'

const municipalidadRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const municipalidades = await municipalidadRepository.findAll();

    return res.status(200).json(municipalidades);

}

const create = async (req,res) => {
    const result = await municipalidadRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await municipalidadRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await municipalidadRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await municipalidadRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const municipalidadController = { findAll, create, findOne, update, remove }

export default municipalidadController;