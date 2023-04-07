module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    },
    async rewrites() {
      return rewrites;
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/menu',
            permanent: true,
          },
        ]
      }

}
//proxy: backend domain → frontend domain
const rewrites = process.env.NODE_ENV === 'development' ? [
  {
    source: '/api_haha/:path*',
    destination: 'https://ec-warehouse-et76x6ix4q-an.a.run.app/:path*',
  },
] : [];