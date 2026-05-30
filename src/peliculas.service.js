import Pelicula from '../models/pelicula.js';

class PeliculasService {
  async getAll()       { return await Pelicula.findAll(); }
  async getById(id)    { return await Pelicula.findByPk(id); }
  async create(data)   { return await Pelicula.create(data); }
  async update(id, data) {
    const peli = await Pelicula.findByPk(id);
    return peli ? await peli.update(data) : null;
  }
  async delete(id) {
    const peli = await Pelicula.findByPk(id);
    return peli ? await peli.destroy() : null;
  }
}

export default new PeliculasService();