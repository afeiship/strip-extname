import '@/setup';


class App {
  public static start() {
    console.log(nx.$global.args, nx.$global.conf.gets());
    console.log('[hello app] 🐶:', nx.VERSION);
  }
}

App.start();
