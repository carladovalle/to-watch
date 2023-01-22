import express from "express";
import * as seriesControllers from '../Controllers/series.controller.js';

const router = express.Router();

router.post('/series/add', seriesControllers.addSerie);
router.get('/series/view', seriesControllers.viewSerie);
router.put('/series/edit/:id', seriesControllers.updateSerie);

export default router;