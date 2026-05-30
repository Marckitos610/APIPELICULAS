import express from 'express';
import service from './peliculas.service.js'; // sin el *

const router = express.Router();

router.get('/', async (req, res) => res.json(await service.getAll()));
router.get('/:id', async (req, res) => {
  const p = await service.getById(req.params.id);
  p ? res.json(p) : res.status(404).json({ error: "No existe" });
});
router.post('/', async (req, res) => res.status(201).json(await service.create(req.body)));
router.put('/:id', async (req, res) => {
  const p = await service.update(req.params.id, req.body);
  p ? res.json(p) : res.status(404).json({ error: "No existe" });
});
router.delete('/:id', async (req, res) => {
  const r = await service.delete(req.params.id);
  r ? res.json({ msg: "Eliminada" }) : res.status(404).json({ error: "No existe" });
});

export default router;