"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miembrosRoutes_1 = require("../routes/miembrosRoutes");
const router = (0, express_1.Router)();
router.get('/', miembrosRoutes_1.getMiembros);
router.get('/:id', miembrosRoutes_1.getMiembro);
router.post('/', miembrosRoutes_1.postMiembro);
router.put('/:id', miembrosRoutes_1.putMiembro);
router.delete('/:id', miembrosRoutes_1.deleteMiembro);
exports.default = router;
//# sourceMappingURL=miembrosController.js.map