"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
const router = express_1.Router();
router.get('/', indexControllers_1.indexController.index);
router.get('/add', (req, res) => { res.send('Adding'); });
exports.default = router;
