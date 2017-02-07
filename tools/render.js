import path from 'path';
import fetch from 'node-fetch';
import { writeFile, makeDir } from './lib/fs';
import runServer from './runServer';

const routes = [
  '/',
  '/login',
  '/privacy',
  '/404', 
];

async function render() {
  const server = await runServer();

  // dynamic routes example
  // const firms = await fetch(`http://${server.host}/api/firms`).then(res => res.json());
  // firms.forEach(firm => routes.push(
  //   `/firm/${firm.uri}`,
  //   `/firm/${firm.uri}/d3`
  // ));

  await Promise.all(routes.map(async (route, index) => {
    const url = `http://${server.host}${route}`;
    const fileName = route.endsWith('/') ? 'index.html' : `${path.basename(route, '.html')}.html`;
    const dirName = path.join('build/public', route.endsWith('/') ? route : path.dirname(route));
    const dist = path.join(dirName, fileName);
    const timeStart = new Date();
    const response = await fetch(url);
    const timeEnd = new Date();
    const text = await response.text();
    await makeDir(dirName);
    await writeFile(dist, text);
    const time = timeEnd.getTime() - timeStart.getTime();
    console.log(`#${index + 1} ${dist} => ${response.status} ${response.statusText} (${time} ms)`);
  }));

  server.kill('SIGTERM');
}

export default render;
