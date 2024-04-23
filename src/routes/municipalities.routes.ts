import { Router } from 'express';
import { getMunicipalities, getMunicipality, postMunicipality, deleteMunicipality, updateMunicipality } from '../controllers/municipalities.controllers';
import { updateMunicipalityValidation, postMunicipalityValidation } from '../validations/municipalities.validations';

const router = Router();

router.get('/', getMunicipalities);
router.get('/:id', getMunicipality);
router.post('/', postMunicipalityValidation, postMunicipality);
router.delete('/:id', deleteMunicipality);
router.put('/:id', updateMunicipalityValidation, updateMunicipality);

export default router;