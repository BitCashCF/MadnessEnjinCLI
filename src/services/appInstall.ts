import { exec } from 'child_process';


export default function (folderPath, callback) {
  console.log('Now installing ...');
  exec('npm install', { cwd: folderPath }, (error, stdout, stderr) => {
    if (error) {
      console.log('Failed to run npm install!');
      return false;
    }
    if (!error && callback && typeof callback === 'function') {
      callback(stdout);
      return true;
    }
  });
};