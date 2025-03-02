import { Router } from 'express';
import gutenDatalakeRoutes from './gutenDatalakeRoutes';

const router = Router();
router.use('/guten', gutenDatalakeRoutes);

export default router;



// import express from "express";
// import gutenDatalakeRoutes from "./gutenDatalakeRoutes";
// import gutenPublisherRoutes from "./gutenPublisherRoutes";
// import gutenSitesRoutes from "./gutenSitesRoutes";
// import authRoutes from "./authRoutes";

// const router = express.Router();

// // Route Handlers
// router.use("/datalake", gutenDatalakeRoutes);
// router.use("/publisher", gutenPublisherRoutes);
// router.use("/sites", gutenSitesRoutes);
// router.use("/auth", authRoutes);

// export default router;
