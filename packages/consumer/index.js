import { globby } from 'glob';
import dependency from '@scoped/dependency';
import aliasedDependency from 'aliased-dependency';

console.log(dependency);
console.log(aliasedDependency);
console.log(await globby(['*']));
