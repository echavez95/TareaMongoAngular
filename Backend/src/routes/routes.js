const {Router} = require('express');
const router = new Router();

const express = require('express');
const con_cliente = require('../model/e_cliente');

router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/listar', async (req,res) => {
    const clientes = await con_cliente.find();
    res.send(clientes);
});

router.post('/agregar', async (req,res) => {
    const cliente = new con_cliente(req.body);
    await cliente.save();
    res.send({ mensaje:'Cliente guardado con exito!'});
});
router.get('/obtener/:id', async (req,res) => {
    const id = req.params.id;
    const emp = await con_cliente.findById(id);
    res.send(emp);
});
router.post('/editar/:id', async (req,res) => {
    const id = req.params.id;
    await con_cliente.update({'_id': id}, req.body).catch((error)=>{console.log(error);});
    res.status(200).send({ mensaje: `Registro ${id} editado con exito`});
});
router.get('/eliminar/:id', async (req,res) => {
    const id = req.params.id;
    await con_cliente.remove({'_id': id});
    res.status(200).send({ mensaje: 'Se elimino el registro!'});
});

module.exports = router;