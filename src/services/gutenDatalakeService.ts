import axios from 'axios';
import { GUTEN_DATALAKE_URL } from '../config/dotenv';

const client = axios.create({
    baseURL: `${GUTEN_DATALAKE_URL}/guten`,
    timeout: 15000
});

export const gutenDatalakeService = {
    getLanding: async (site: string, section?: string) =>
        (await client.get(`/sites/${encodeURIComponent(site)}/landing`, { params: { section } })).data,
    reorderSections: async (site: string, order: object) =>
        (await client.put(`/sites/${encodeURIComponent(site)}/sections/order`, order)).data,
    reorderPages: async (site: string, section: string, order: object) =>
        (await client.put(`/sites/${encodeURIComponent(site)}/sections/${encodeURIComponent(section)}/pages/order`, order)).data,

    getSites: async () => (await client.get('/sites')).data,
    getSite: async (siteName: string) => (await client.get(`/sites/${siteName}`)).data,
    createSite: async (site: object) => (await client.post('/sites', site)).data,
    updateSite: async (siteName: string, site: object) => 
        (await client.put(`/sites/${siteName}`, site)).data,
    deleteSite: async (siteName: string) => (await client.delete(`/sites/${siteName}`)).data,

    getSections: async (site: string) => (await client.get(`/sections`, { params: { site } })).data,
    getSection: async (sectionName: string, site: string) => (await client.get(`/sections/${sectionName}`, { params: { site } })).data,
    getSectionById: async (sectionId: string) => (await client.get(`/section_by_id/${sectionId}`)).data,
    createSection: async (section: object) => (await client.post('/sections', section)).data,
    updateSection: async (sectionId: number, section: object) => 
        (await client.put(`/sections/${sectionId}`, section)).data,
    deleteSection: async (sectionId: number) => (await client.delete(`/sections/${sectionId}`)).data,

    getPages: async (site: string, section: string) => 
        (await client.get('/pages', { params: { site, section } })).data,
    getPage: async (site: string, section: string, pageName: string) => 
        (await client.get(`/pages/${pageName}`, { params: { site, section } })).data,
    getSitePages: async (site: string) => 
        (await client.get(`/pages_all/${site}`)).data,
    getPageById: async (pageId: string) => 
        (await client.get(`/page_by_id/${pageId}`)).data,
    createPage: async (page: object) => (await client.post('/pages', page)).data,
    updatePage: async (pageName: string, page: object) => 
        (await client.put(`/pages/${pageName}`, page)).data,
    // updatePage: async (pageId: number, page: object) => 
    //     (await client.put(`/pages/${pageId}`, page)).data,
    deletePage: async (pageId: number) => (await client.delete(`/pages/${pageId}`)).data,

    getRefs: async (site: string, section: string, page: string) => 
        (await client.get('/refs', { params: { site, section, page } })).data,
    createRef: async (ref: object) => (await client.post('/refs', ref)).data,

    updateRef: async (refId: number, ref: object) => 
        (await client.put(`/refs/${refId}`, ref)).data,

    deleteRef: async (refId: number, scope: object) => (await client.delete(`/refs/${refId}`, { params: scope })).data,

    getNotes: async (site: string, section: string, page: string) => 
        (await client.get('/notes', { params: { site, section, page } })).data,
    createNote: async (note: object) => (await client.post('/notes', note)).data,

    updateNote: async (noteId: number, note: object) => (await client.put(`/notes/${noteId}`, note)).data,

    deleteNote: async (noteId: number, scope: object) => (await client.delete(`/notes/${noteId}`, { params: scope })).data,

    publishSite: async (siteName: string) => (await client.post(`/publish/${siteName}`)).data,
    getPublishedPage: async (site: string, pageName: string) => 
        (await client.get(`/published/pages/${pageName}`, { params: { site } })).data
};



// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const GUTEN_DATALAKE_URL = process.env.GUTEN_DATALAKE_URL || "http://localhost:8005";

// export const fetchPageData = async (name: string): Promise<any> => {
//   try {
//     const response = await axios.get(`${GUTEN_DATALAKE_URL}/guten/contents?name=${name}`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch page data");
//   }
// };
