// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET || "mystrongsecret";

// export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
//   const token = req.header("Authorization");

//   if (!token) {
//     res.status(401).json({ message: "Unauthorized access" });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };
