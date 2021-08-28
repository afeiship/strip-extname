import '@/setup';


class App {
  public static start() {
    console.log(nx.$args, nx.$conf.gets());
    const { name } = nx.$args;
    const App = require(`./apps/${name}`).default;
    const app = new App();
    app.start();
  }
}

App.start();
