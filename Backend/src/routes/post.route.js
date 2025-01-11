import { Router } from "express";
import {createPost} from '../controllers/post.controller.js'


export const postrouter=new Router()

router.route('/upload').post(createPost)
