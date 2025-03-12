# Guten Crust

Guten Crust is the API gateway layer for the Guten platform, acting as a middleware between the frontend (Guten Portal) and backend services like Guten Datalake. It facilitates authentication, request routing, logging, and communication with the Guten ecosystem.

## Features
- API Gateway for the Guten ecosystem
- Middleware for authentication and request validation
- Logging and monitoring with Winston
- Routes to interact with Guten Datalake and other services
- Secure, scalable, and modular architecture

## Project Structure
```
guten-crust/
│── src/
│   ├── routes/
│   │   ├── gutenDatalakeRoutes.ts
│   │   ├── gutenPublisherRoutes.ts
│   │   ├── gutenSitesRoutes.ts
│   │   ├── authRoutes.ts
│   │   └── index.ts
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   ├── errorHandler.ts
│   ├── services/
│   │   ├── gutenDatalakeService.ts
│   │   ├── gutenPublisherService.ts
│   │   ├── gutenSitesService.ts
│   ├── config/
│   │   ├── logger.ts
│   │   ├── dotenv.ts
│   ├── server.ts
│   ├── app.ts
│── .env
│── package.json
│── tsconfig.json
│── README.md
```

## Installation & Setup

### Prerequisites
- Node.js v16+ recommended
- npm or yarn installed
- A running instance of Guten Datalake

### Installation
```sh
git clone https://github.com/your-org/guten-crust.git
cd guten-crust
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add:
```
PORT=4000
GUTEN_DATALAKE_URL=http://localhost:8005/guten
JWT_SECRET=your_secret_key
```

### Running the Server
To start the Express server:
```sh
npm run dev  # Development mode with nodemon
```
Or in production mode:
```sh
npm start
```

## API Endpoints

### Site Management
- `GET /sites` - Fetch all sites
- `GET /sites/:site_name` - Fetch a specific site
- `POST /sites` - Create a new site
- `PUT /sites/:site_name` - Update a site
- `DELETE /sites/:site_name` - Delete a site

### Section Management
- `GET /sections?site=:site_name` - Fetch all sections of a site
- `POST /sections` - Create a section
- `PUT /sections/:section_id` - Update a section
- `DELETE /sections/:section_id` - Delete a section

### Page Management
- `GET /pages?section=:section_name` - Fetch all pages in a section
- `POST /pages` - Create a page
- `PUT /pages/:page_id` - Update a page
- `DELETE /pages/:page_id` - Delete a page

### Publishing
- `POST /publish/:site_name` - Publish a site
- `GET /published/pages/:page_name?site=:site_name` - Fetch published page

## Logging
Logging is handled using Winston. Log files are stored in `logs/` directory.

## Deployment
For deployment, use Docker or a process manager like PM2.
```sh
npm install -g pm2
pm run build
pm start
```
Or using Docker:
```sh
docker build -t guten-crust .
docker run -p 4000:4000 guten-crust
```

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-xyz`)
3. Commit changes (`git commit -m 'Added new feature xyz'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Guten Crust is part of the Guten ecosystem.

