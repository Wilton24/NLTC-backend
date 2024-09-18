import multer from "multer";
import { Request, Response, NextFunction } from "express";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads') 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

export const handleProfilePicUpload = multer({ storage }).single('profile_pic');