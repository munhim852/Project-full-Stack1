import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// localhost:5000/
//localhost:5000/posts <--- this
router.get('/', getPosts);
router.post('/', createPost);



export default router;