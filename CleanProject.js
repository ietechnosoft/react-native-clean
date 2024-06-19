#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


const rootDirectory = process.cwd()
// Specify the path to the folder containing the folders and files you want to delete
const folderPath = rootDirectory;

// Delete folders
const foldersToDelete = [
    'node_modules',
    'ios/build',
    'ios/Pods',
    '*.xcworkspace',
    'android/build',
    'android/app/build',
    'android/.gradle',
    'android/.idea',
    '.git',
    '.buildkite',
    '.vscode',
    '.yarn/cache'
];

foldersToDelete.forEach(folderName => {
    const fullPath = path.join(folderPath, folderName);
    fs.rm(fullPath, { recursive: true, force: true }, (err) => {
        if (err) {
            console.error(`Error deleting folder ${fullPath}:`, err);
        } else {
            console.log(`Deleted folder: ${fullPath}`);
        }
    });
});

// Delete files
const filesToDelete = [
    'yarn.lock',
    'package.lock',
    'ios/Podfile.lock'
];

filesToDelete.forEach(fileName => {
    const fullPath = path.join(folderPath, fileName);
    fs.rm(fullPath, { force: true }, (err) => {
        if (err) {
            console.error(`Error deleting file ${fullPath}:`, err);
        } else {
            console.log(`Deleted file: ${fullPath}`);
        }
    });
});
