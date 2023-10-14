import { Router } from "express";
import { getAplicaciones, postAplicacion, putAplicacion } from "../controller/aplicaciones.js";

export const routerAplicaciones = Router();


routerAplicaciones.get('/',getAplicaciones);

routerAplicaciones.post('/', postAplicacion);

routerAplicaciones.put('/:id', putAplicacion);


