import { Router } from 'express';
import { deleteLanguage, getLanguage, getLanguages, postLanguage, updateLanguage } from '../controllers/languages.controllers';
import { languageValidator } from '../validations/languages.validations';
import { idValidator } from '../validations/generic.validations';

const router = Router();

router.get('/', getLanguages);
router.get('/:id', idValidator, getLanguage);
router.post('/language', languageValidator, postLanguage);
router.delete('/:id', idValidator, deleteLanguage);
router.put('/:id', languageValidator, updateLanguage);

export default router;