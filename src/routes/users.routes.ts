import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/users.controllers";
import { userValidator } from '../validations/user.validations';
import { idValidator } from '../validations/generic.validations';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id',idValidator, deleteUser);
router.post('/',userValidator, postUser);
router.put('/:id',idValidator,userValidator, updateUser);

export default router;