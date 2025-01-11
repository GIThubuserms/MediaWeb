import { Router } from "express";
import {login,logout,signup} from '../controllers/user.controller.js'


export const userrouter=new Router()

router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/signup').post(signup)