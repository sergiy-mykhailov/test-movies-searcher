
export default {
    name:       'Movies-searcher',
    version:    '0.0.2',
    env:        process.env.NODE_ENV || 'development',
    port:       process.env.PORT || 3000,
    base_url:   process.env.BASE_URL || 'http://localhost:3000',
    db: {
        name: process.env.MONGODB_NAME || "movies-searcher",
        host: process.env.MONGODB_HOST || "localhost",
        port: process.env.MONGODB_PORT || 27017
    }
}
