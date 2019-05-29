const BookStore = require('../models/BookStoreModel');

const controller = {
  getAll: async (req, res) => {
    try {
      const books = await BookStore.find({});

      res.status(200).send({
        message: 'Busca bem sucedida!',
        books,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error,
      });
    }
  },
  getById: async (req, res) => {
    try {
      const { _id } = req.params;

      const books = await BookStore.findById(_id);

      res.status(200).send({
        message: 'Busca bem sucedida!',
        books,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error,
      });
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req;

      const books = await BookStore.create(body);

      res.status(200).send({
        message: 'Inserção bem sucedida!',
        books,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error,
      });
    }
  },
  putById: async (req, res) => {
    try {
      const { _id } = req.params;
      const { body } = req;

      const books = await BookStore.findByIdAndUpdate(_id, body);

      res.status(200).send({
        message: 'Atualização bem sucedida!',
        books,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error,
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { _id } = req.params;

      const books = await BookStore.findByIdAndRemove(_id);

      res.status(200).send({
        message: 'Removido com sucesso!',
        books,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição!',
        error,
      });
    }
  },
};

module.exports = controller;
