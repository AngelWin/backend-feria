import {Router} from 'express';

import {getListUsers, getUser, addUser, deleteUser, updateUser, getRouteMain} from '../controllers/users.controllers.js';

const router = Router();

router.get("/", getRouteMain);

router.get("/users", getListUsers);

router.get("/users/:id", getUser);

router.post("/users",addUser);

router.delete("/users/:id",deleteUser);

router.put("/users/:id",updateUser);

export default router;
