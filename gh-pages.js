import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/colobas/gripp.engineering.git', 
  user: {
   name: 'Guilherme Pires', // update to use your name
   email: 'mail@gpir.es' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
