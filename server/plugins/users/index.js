import pkg from './package.json';
import searchFieldRoute from './routes/searchField';

export const plugin = {
  pkg,
  async register(server, options) {
    server.route([
      searchFieldRoute
    ])
  }
};