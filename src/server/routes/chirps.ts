import * as express from "express";
import { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp } from "../utils/chirpstore";

let router = express.Router();

router.get('/', (req, res) => {
  let data = GetChirps()
  let chirps = Object.keys(data).map(key => {
      return {
          id: key,
          name: data[key].name,
          text: data[key].text
      }
  })
  chirps.pop();
  res.json(chirps)

});

router.get('/:id', (req, res) => {
    let id = req.params.id
    let oneChirp = GetChirp(id)
    res.send({id: id, ...oneChirp});
})

router.post('/', (req, res) => {
    let chirp = {
        name: req.body.name,
        text: req.body.text
    }
    CreateChirp(chirp);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id
    UpdateChirp(id, {
        name: req.body.name,
        message: req.body.message})
    res.json(id);
});

router.delete('/:id?', (req, res) => {
        DeleteChirp(req.params.id)
        res.sendStatus(200);
});

export default router;