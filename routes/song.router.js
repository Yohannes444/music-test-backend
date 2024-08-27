const express = require("express");
const router = express.Router();
const songController = require('../controllers/song.controller');

router.get('/', songController.listSongs);
router.post('/', songController.createSong);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.removeSong);
router.get('/stats', songController.returnStatistics);

module.exports = router;
