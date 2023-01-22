import express from "express";
import * as seriesControllers from '../Controllers/series.controller.js';

const router = express.Router();

router.post('/series/add', seriesControllers.addSerie);
router.get('/series/view', seriesControllers.viewSerie);
router.put('/series/edit/:id', seriesControllers.updateSerie);
router.delete('/series/delete/:id', seriesControllers.deleteSerie);
router.get('/series/quantityPerPlatform', seriesControllers.quantityPerPlatformSerie);

export default router;