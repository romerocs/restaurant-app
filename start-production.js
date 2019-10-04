const reactBuild = require('child_process').spawn;
const startServer = require('child_process').spawn;

reactBuild('npm', ['run build'], {
  stdio: 'inherit',
  cwd: 'client',
  shell: true
});

startServer('npm', ['start'], { stdio: 'inherit', cwd: 'server', shell: true });
