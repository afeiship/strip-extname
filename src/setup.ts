import '@/types';
import argsParser from 'args-parser';
import RailsSiteApi from '@afeiship/rails-site-api';
import '@jswork/next-require';

nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

const $args = argsParser(process.argv);
const $conf = new nx.YamlConfiguration({ path: `./config/${$args.name}.yml` });
const $api = RailsSiteApi.get(
  $conf.get('api.app'),
  $conf.get('api.environment')
);

nx.sets({ $args, $conf, $api });
