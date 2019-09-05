export default {
  server: {
    port: 8000,
  },
  register: {
    plugins: [
      {
        plugin: './plugins/users',
        routes: {
          prefix: '/users'
        }
      },
    ],
  }
};