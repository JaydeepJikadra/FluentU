# FluentU

## Installation

Download or clone this project. Open the project in Terminal. Run below command to install dependency. Make sure you are in your project's root folder

```
 yarn install
```

Start the app.

```
yarn start
```

Run On iOS

```
yarn ios
```

Run On Android

```
yarn android-dev
```

Linting

```
yarn lint
yarn lint:fix
```

## Project Structure

```sh
├── android
├── app.json
├── assets // All assets: images, fonts, ...
├── index.js // Root File
├── tsconfig.json // Typescript Configuration File
├── app.json // Inbuilt Application Configuration File
├── .prettierrc.js // Prettierrc File Formatter Configuration
├── .eslintrc.js // ESLint Configuration
├── package.json // Dependancy Mangamenet
├── ios
└── src
├── components // Components, Shared/Child Componenet
├── constants // Global Constant,Colors...
│ └── index.ts // Global Constant
│ └── theme.ts // Color Management (Dark Model, Light Mode)
├── containers // Screens, pages,...
├── i18 // Multi Language Management
├── routes // React Navigation Route Management
├── lib // Libraries, Services,...
├── index.tsx // Root Component
├── styles // StyleD Compoenent Styles
├── types // Type Declarations
│ └── index.d.ts

```

## TypeScript

- [TypeScript] enhance code quality, understandability and scalability with Interface oriented development

## Video

- [react-native-video] help to playing video

## Text to speech recognition

- [react-native-voice/voice] help to convert text to speech

## Navigation

- [React Navigation] easy-to-use navigation solution based on Javascript

## Linting

Eslint configured for React Native

VSCode Prettier compatible

Useful plugins installed (see .eslintrc.js)

## Internationalization and localization

- [react-i18next] easy to use package for i18n

## Others

Absolute import from src: Before:

```sh
import HomePage from '../../../../containers/HomePage'

After:

import HomePage from 'src/containers/HomePage'
```

- [react-native-size-matters] make your app responsive easily

- [Cocoapods] iOS dependencies manager

- [jetifier] transition tool for React Native 0.60 AndroidX migration

## Run linting pre-commit and pre-push with husky's hooks

Happy Coding ..🎃 🥳
