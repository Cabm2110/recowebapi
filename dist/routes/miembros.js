"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMiembro = exports.putMiembro = exports.postMiembro = exports.getMiembro = exports.getMiembros = void 0;
const getMiembros = (req, res) => {
    res.json({
        msg: 'getMiembros'
    });
};
exports.getMiembros = getMiembros;
const getMiembro = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getMiembro',
        id
    });
};
exports.getMiembro = getMiembro;
const postMiembro = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postMiembro',
        body
    });
};
exports.postMiembro = postMiembro;
const putMiembro = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postMiembro',
        body
    });
};
exports.putMiembro = putMiembro;
const deleteMiembro = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'postMiembro'
    });
};
exports.deleteMiembro = deleteMiembro;
//# sourceMappingURL=miembros.js.map