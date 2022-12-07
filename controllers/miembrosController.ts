import { Router } from 'express';
import { getMiembros, getMiembro, postMiembro, putMiembro, deleteMiembro } from '../routes/miembrosRoutes';


const router = Router();

router.get('/',         getMiembros);
router.get('/:id',      getMiembro);
router.post('/',        postMiembro);
router.put('/:id',      putMiembro);
router.delete('/:id',   deleteMiembro);



export default router;