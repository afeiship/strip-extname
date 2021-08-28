import '@/types';
import argsParser from 'args-parser';
import '@jswork/next-require';

const args = argsParser(process.argv);

nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

console.log('path:', `./config/${args.name}.yml`);


nx.global({
  args,
  conf: new nx.YamlConfiguration({ path: `./config/${args.name}.yml` })
});

// console.log('nx', nx);
