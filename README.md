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

### Generate a Library Project

Use the following command to generate a new project of type `library`. There are (2) project types supported by the Angular Workspace.

```ts
ng generate lib logging --publishable
```

>Note the use of the `--publishable` option. This is an exclusive feature of the `Nx` Workspace from [https://www.nrwl.io](Nrwl.io).

The output of the CLI command:

```ts
CREATE libs/logging/karma.conf.js (484 bytes)
CREATE libs/logging/ng-package.json (157 bytes)
CREATE libs/logging/package.json (184 bytes)
CREATE libs/logging/tsconfig.lib.json (740 bytes)
CREATE libs/logging/tsconfig.spec.json (259 bytes)
CREATE libs/logging/tslint.json (269 bytes)
CREATE libs/logging/src/test.ts (700 bytes)
CREATE libs/logging/src/index.ts (55 bytes)
CREATE libs/logging/src/lib/logging.module.ts (252 bytes)
CREATE libs/logging/src/lib/logging.module.spec.ts (431 bytes)
UPDATE angular.json (1392 bytes)
UPDATE package.json (2614 bytes)
UPDATE nx.json (248 bytes)
UPDATE tsconfig.json (502 bytes)
```