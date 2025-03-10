import { Router } from 'express';
import { gutenDatalakeService } from '../services/gutenDatalakeService';

const router = Router();

// Site routes
router.get('/sites', async (req, res, next) => {
    try {
        console.log('GET /sites called');
        res.json(await gutenDatalakeService.getSites());
    } catch (err) { next(err); }
});

router.get('/sites/:site_name', async (req, res, next) => {
    try {
        res.json(await gutenDatalakeService.getSite(req.params.site_name));
    } catch (err) { next(err); }
});

router.post('/sites', async (req, res, next) => {
    try {
        res.json(await gutenDatalakeService.createSite(req.body));
    } catch (err) { next(err); }
});

// Update Site
router.put('/sites/:site_name', async (req, res, next) => {
    try {
      const siteName = req.params.site_name;
      console.log('Called /sites/:site_name called with site name: ', siteName);
      const data = await gutenDatalakeService.updateSite(siteName, req.body);
      console.log('service.updateSite returned data: ', data)
      res.json(data.data);
    } catch (error) {
        console.log('Exception with errro: ', error);
        next(error);
    }
  });
  
// Update Site
// router.put('/sites/:site_name', async (req, res, next) => {
//     try {
//       const siteName = req.params.site_name;
//       const data = await gutenDatalakeService.updateSite(`/guten/sites/${siteName}`, req.body);
//       res.json(data.data);
//     } catch (error) {
//       next(error);
//     }
//   });
    
  // Delete Site
  router.delete('/sites/:site_name', async (req, res, next) => {
    try {
      const siteName = req.params.site_name;
      const data = await gutenDatalakeService.deleteSite(`/guten/sites/${siteName}`);
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });
    
// router.put('/sites:site_name', async (req, res, next) => {
//     try {
//         res.json(await gutenDatalakeService.updateSite(req.params.site_name, req.body));
//     } catch (err) { next(err); }
// });

// Delete Site
// router.delete('/sites/:site_name', async (req, res, next) => {
//     try {
//       const siteName = req.params.site_name;
//       const data = await gutenDatalakeService.deleteSite(`/guten/sites/${siteName}`);
//       res.json(data.data);
//     } catch (error) {
//       next(error);
//     }
//   });
  
// Sections routes
router.get('/sections', async (req, res, next) => {
    try {
        console.log('GET /sections called');
        const { site } = req.query;
        res.json(await gutenDatalakeService.getSections(site as string));
    } catch (err) { next(err); }
});

router.get('/sections/:section_name', async (req, res, next) => {
    try {
        console.log('GET /sections/:section_name called');
        const { site } = req.query;
        res.json(await gutenDatalakeService.getSection(req.params.section_name, site as string));
    } catch (err) { next(err); }
});

// Get a section by its ID only
router.get('/section_by_id/:section_id', async (req, res, next) => {
    try {
        console.log('GET /sections_by_id/:section_id called');
        res.json(await gutenDatalakeService.getSectionById(req.params.section_id));
    } catch (err) { next(err); }
});

router.post('/sections', async (req, res, next) => {
    try {
        console.log('POST /sections called with', req.body);
        res.json(await gutenDatalakeService.createSection(req.body));
    } catch (err) { next(err); }
});


// Update Section
router.put('/sections/:section_id', async (req, res, next) => {
    try {
      const sectionId = Number(req.params.section_id); // Convert string to number
    //   if (isNaN(sectionId)) {
    //       return res.status(400).json({ error: "Invalid section_id format" });
    //   }
      console.log('Called /sections/:section_id called with section id: ', sectionId);
      const data = await gutenDatalakeService.updateSection(sectionId, req.body);
      console.log('service.updateSection returned data: ', data)
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });
  
  // Delete Section
  router.delete('/sections/:section_id', async (req, res, next) => {
    try {
      const sectionId = Number(req.params.section_id);
      console.log('router.delete called with section id: ', sectionId);
      const data = await gutenDatalakeService.deleteSection(sectionId);
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });
  
// Pages routes
router.get('/pages', async (req, res, next) => {
    try {
        const { site, section } = req.query;
        res.json(await gutenDatalakeService.getPages(site as string, section as string));
    } catch (err) { next(err); }
});

router.get('/pages/:page_name', async (req, res, next) => {
    try {
        const { site, section } = req.query;
        res.json(await gutenDatalakeService.getPage(site as string, section as string, req.params.page_name));
    } catch (err) { next(err); }
});

router.get('/pages_all/:site_name', async (req, res, next) => {
  try {
      // const { site } = req.query;
      res.json(await gutenDatalakeService.getSitePages(req.params.site_name as string));
  } catch (err) { next(err); }
});

router.get('/page_by_id/:page_id', async (req, res, next) => {
    try {
        res.json(await gutenDatalakeService.getPageById(req.params.page_id));
    } catch (err) { next(err); }
});

router.post('/pages', async (req, res, next) => {
    try {
        res.json(await gutenDatalakeService.createPage(req.body));
    } catch (err) { next(err); }
});

// Update Page
router.put('/pages/:page_name', async (req, res, next) => {
    try {
      const pageName = req.params.page_name;
      console.log('Called /pages/:page_name called with page: ', pageName, req.body);
      const data = await gutenDatalakeService.updatePage(pageName, req.body);
      console.log('service.updatePage returned data: ', data)
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });

  // Update Page
// router.put('/pages/:page_id', async (req, res, next) => {
//     try {
//       const pageId = Number(req.params.page_id); // Convert string to number
//     //   if (isNaN(pageId)) {
//     //       return res.status(400).json({ error: "Invalid page format" });
//     //   }
//       console.log('Called /pages/:page_id called with page id: ', pageId);
//       const data = await gutenDatalakeService.updatePage(pageId, req.body);
//       console.log('service.updatePage returned data: ', data)
//       res.json(data.data);
//     } catch (error) {
//       next(error);
//     }
//   });

  // Delete Page
  router.delete('/pages/:page_id', async (req, res, next) => {
    try {
      const pageId = Number(req.params.page_id);
      console.log('router.delete called with page id: ', pageId);
      const data = await gutenDatalakeService.deletePage(pageId);
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });

// Refs routes
router.get('/refs', async (req, res, next) => {
    try {
        const { site, section, page } = req.query;
        res.json(await gutenDatalakeService.getRefs(site as string, section as string, page as string));
    } catch (err) { next(err); }
});

router.post('/refs', async (req, res, next) => {
    try {
        console.log('$$$$$$$$$$$$$ post /refs called with data: ', req.body)
        res.json(await gutenDatalakeService.createRef(req.body));
    } catch (err) { next(err); }
});

// Update Ref
router.put('/refs/:ref_id', async (req, res, next) => {
    try {
      const refId = Number(req.params.ref_id);
      console.log('Called /refs/:ref_id called with ref: ', refId, req.body);
      const data = await gutenDatalakeService.updateRef(refId, req.body);
      console.log('service.updateRef returned data: ', data)
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });

// Delete Ref
router.delete('/refs/:ref_id', async (req, res, next) => {
try {
    const refId = Number(req.params.ref_id);
    console.log('router.delete called with ref id: ', refId);
    const data = await gutenDatalakeService.deleteRef(refId);
    res.json(data.data);
} catch (error) {
    next(error);
}
});

// Notes routes
router.get('/notes', async (req, res, next) => {
    try {
        const { site, section, page } = req.query;
        res.json(await gutenDatalakeService.getNotes(site as string, section as string, page as string));
    } catch (err) { next(err); }
});

router.post('/notes', async (req, res, next) => {
    try {
        console.log('$$$$$$$$$$$$$ post /notes called with data: ', req.body)
        res.json(await gutenDatalakeService.createNote(req.body));
    } catch (err) { next(err); }
});

  // Delete Note
  router.delete('/notes/:note_id', async (req, res, next) => {
    try {
      const noteId = Number(req.params.note_id);
      console.log('router.delete called with note id: ', noteId);
      const data = await gutenDatalakeService.deleteNote(noteId);
      res.json(data.data);
    } catch (error) {
      next(error);
    }
  });

// Publish route
router.post('/publish/:site_name', async (req, res, next) => {
    try {
        console.log("Calling /publish site with request: ", req.params.site_name);
        res.json(await gutenDatalakeService.publishSite(req.params.site_name));
    } catch (err) { next(err); }
});

export default router;






// import express, { Request, Response } from "express";
// import { fetchPageData } from "../services/gutenDatalakeService";

// const router = express.Router();

// // GET Page Content
// router.get("/contents", async (req: Request, res: Response) => {
//   try {
//     const { name } = req.query as { name: string };
//     const data = await fetchPageData(name);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

// export default router;

