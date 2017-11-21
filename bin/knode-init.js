#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const dir = process.cwd();
const basedir = path.resolve(__dirname, '../');

const serverName = process.argv[2];

if (!serverName) {
  console.log('serverName need');
  process.exit();
}

// 创建Server目录
const serverDir = path.join(dir, serverName)
fs.mkdirSync(serverDir);

// 创建cgi目录
fs.mkdirSync(path.join(serverDir, './cgi'));
fs.copyFileSync(path.resolve(basedir, './demo/cgi/home.js'), path.resolve(serverDir, './cgi/home.js'));

// 创建view目录
fs.mkdirSync(path.join(serverDir, './view'));


// 创建public目录
fs.mkdirSync(path.join(serverDir, './public'));


// 创建config目录
fs.mkdirSync(path.join(serverDir, './config'));
fs.copyFileSync(path.resolve(basedir, './demo/config/config.default.js'), path.resolve(serverDir, './config/config.default.js'));

fs.copyFileSync(path.resolve(basedir, './demo/router.js'), path.resolve(serverDir, './router.js'));

fs.copyFileSync(path.resolve(basedir, './demo/package.json'), path.resolve(serverDir, './package.json'));

process.chdir(serverDir);

exec('tnpm install');
