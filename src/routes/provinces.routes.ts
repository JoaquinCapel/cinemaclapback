import { Router } from 'express';
import { getProvinces, getProvince, postProvince, deleteProvince, updateProvince } from '../controllers/provinces.controllers';
import { postProvinceValidation, updateProvinceValidation } from '../validations/provinces.validations';

const router = Router();

router.get('/', getProvinces);
router.get('/:id', getProvince);
router.post('/', postProvinceValidation, postProvince);
router.delete('/:id', deleteProvince);
router.put('/:id', updateProvinceValidation, updateProvince);

export default router;