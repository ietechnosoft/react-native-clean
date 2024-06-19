# react-native-clean

[![Download](https://img.shields.io/badge/Download-v0.0.3-ff69b4.svg) ](https://www.npmjs.com/package/react-native-clean)

A simple tool to clean up your React Native project by removing unnecessary folders and files, reducing the size of the project before sharing.

## Installation

To use `react-native-clean`, you don't need to install it globally. You can run it directly using `npx`.

```sh
npx react-native-clean
```

## How to use
Navigate to the root directory of your React Native project:

```sh
cd path/to/your/react-native-project
```

Run the clean command:

```sh
npx react-native-clean
```

This will remove the specified folders and files from your project

## What It Does
The script will delete the following folders and files from your React Native project:

### Folders:
* `node_modules` 
* `ios/build` 
* `ios/Pods` 
* `*.xcworkspace` 
* `android/build` 
* `android/app/build` 
* `android/.gradle` 
* `android/.idea` 
* `.git` 
* `.buildkite` 
* `.vscode` 
* `.yarn/cache`

### Files:
* `yarn.lock` 
* `package.lock` 
* `ios/Podfile.lock`

## Example
After running `npx react-native-clean`, your project structure will be cleaned by removing the specified folders and files, which helps in reducing the project size for sharing or archiving purposes.

## Repository
You can find the source code and report any issues on the [GitHub repository](https://github.com/ietechnosoft/react-native-clean.git)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the **ISC License** - see the [LICENSE](https://github.com/ietechnosoft/react-native-clean/blob/master/LICENSE) file for details. 

## Author
Nikhil Sharma

## Bugs and Issues
If you encounter any bugs or issues, please report them at [GitHub repository Issues](https://github.com/ietechnosoft/react-native-clean/issues.)

## Keywords
- react-native-clean
- react-native-folder-clean
- react-native-project-resize