import Glue from 'glue';
import manifest from './manifest';
import chalk from 'chalk';

const options = {
  relativeTo: __dirname
};

const startServer = async function () {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();
    console.log(chalk.greenBright(`\n\n\nServer running at ${server.info.uri}/`))
    const routes = server.table();
    routes.forEach(route => {
      console.log(chalk.greenBright(`${route.method.toUpperCase()} ${route.path}`))
    });
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
