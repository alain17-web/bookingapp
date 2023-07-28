import express from "express"
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms } from "../controllers/roomControllers.js"
import Room from "../models/Room.js"
import { verifyAdmin } from "../utils/verifyToken.js"


const router = express.Router()

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)

//UPDATE
router.put("/:id",verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

//GET
router.get("/:id", getRoom)

//GET ALL
router.get("/", getRooms)



export default router