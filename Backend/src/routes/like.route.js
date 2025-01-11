import { Router } from "express";
import {DoLike,DoUnlike} from '../controllers/like.controller.js'


export const likerouter=new Router()

router.route('/like').post(DoLike)
router.route('/unlike').post(DoUnlike)
