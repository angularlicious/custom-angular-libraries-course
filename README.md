# custom-angular-libraries-course

A course on developing, testing, integrating, and publishing custom Angular libraries.

## Getting Started with Libraries

Create a new workspace for developing libraries. This sample will use the Angular 6/Nrwl.io Nx workspace. The Nx workspace is an enhanced environment that extends some of the capabilities of the default Angular 6 workspace. 

```ts
create-nx-workspace getting-started-with-libs --npm-scope=angularlicious
```

The following files are created:

```ts
CREATE getting-started-with-libs/.prettierrc (25 bytes)
CREATE getting-started-with-libs/angular.json (307 bytes)
CREATE getting-started-with-libs/karma.conf.js (1012 bytes)
CREATE getting-started-with-libs/nx.json (205 bytes)
CREATE getting-started-with-libs/package.json (2485 bytes)
CREATE getting-started-with-libs/README.md (1874 bytes)
CREATE getting-started-with-libs/tsconfig.json (423 bytes)
CREATE getting-started-with-libs/tslint.json (2307 bytes)
CREATE getting-started-with-libs/.editorconfig (245 bytes)
CREATE getting-started-with-libs/.gitignore (503 bytes)
CREATE getting-started-with-libs/apps/.gitkeep (1 bytes)
CREATE getting-started-with-libs/libs/.gitkeep (0 bytes)
CREATE getting-started-with-libs/tools/tsconfig.tools.json (254 bytes)
CREATE getting-started-with-libs/tools/schematics/.gitkeep (0 bytes)
```

