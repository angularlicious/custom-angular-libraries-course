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

### Workspace Updates When a Library is Generated

The following `devDependencies are added to the workspace to support building the library using `ng-packagr`. 

```json
"@angular-devkit/build-ng-packagr": "~0.10.0",
"ng-packagr": "^4.2.0",
"tsickle": ">=0.29.0",
"tslib": "^1.9.0",
```

tsconfig.json
```json
"paths": {
    "@angularlicious/logging": [
    "libs/logging/src/index.ts"
    ]
}
```

angular.json
```json
 "projects": {
    "logging": {
      "root": "libs/logging",
      "sourceRoot": "libs/logging/src",
      "projectType": "library",
      "prefix": "angularlicious",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-ng-packagr:build",
          "options": {
            "tsConfig": "libs/logging/tsconfig.lib.json",
            "project": "libs/logging/ng-package.json"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "libs/logging/src/test.ts",
            "tsConfig": "libs/logging/tsconfig.spec.json",
            "karmaConfig": "libs/logging/karma.conf.js"
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "libs/logging/tsconfig.lib.json",
              "libs/logging/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  ```

  ### Anatomy of an Angular Library

Notice the package contains a `peerDependencies` section. The `dependencies` and/or the `devDependencies` are contained in the workspace `package.json`. You will need to specify any `peer` dependencies using this section in the library source - this will provide consumers of your library a message regarding the dependencies when the `npm install` the library (if published).

  package.json
```json
{
    "name": "@angularlicious/logging",
    "version": "0.0.1",
        "peerDependencies": {
        "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
        "@angular/core": "^6.0.0-rc.0 || ^6.0.0"
        }
}
```

ng-package.json
```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/libs/logging",
  "lib": {
    "entryFile": "src/index.ts"
  }
}
```

tsconfig.lib.json
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc/libs/logging",
    "target": "es2015",
    "module": "es2015",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "inlineSources": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "types": [],
    "lib": [
      "dom",
      "es2018"
    ]
  },
  "angularCompilerOptions": {
    "annotateForClosureCompiler": true,
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true,
    "enableResourceInlining": true
  },
  "exclude": [
    "src/test.ts",
    "**/*.spec.ts"
  ]
}
```

### Library Project Source (`src`)

All libraries need an entry point. The `index` barrel file contains a list of all 
items in the library that are accessible by consumers of the library. If it *ain't* in 
this file, no one will see it. By default the template names this file `index`.

index.ts
```ts
export * from './lib/logging.module';
```

The `@NgModule` for the library.

logging.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class LoggingModule {}
```

### Build an Angular Library

Build a specified library by using the `npm run build` command with the `--project` option to 
specify the project that you want to build. It is going to kick-off the `ng-build` for the specified project. 

```ts
npm run build --project=logging
```

The configuration for the project in the `angular.json` contains the `build` information. Notice, that the library project is setup to use the `@angular-devkit/build-ng-packagr:build` package with the command to `build`. Remember, the library project contains additional `ng-packagr` configuration information. 

```json
"build": {
    "builder": "@angular-devkit/build-ng-packagr:build",
    "options": {
    "tsConfig": "libs/logging/tsconfig.lib.json",
    "project": "libs/logging/ng-package.json"
    }
},
```

The `ng-packagr` outputs the build to the specified `outDir` as defined in the library's `ng-package.json` file. It uses the Angular Package Format guidelines to create builds for different types of consumers. Things to note:

* uses the npm scope name for the entry point
* uses the `ngc` compiler
* creates bundles for different consumer types
    * FESM2015
    * FESM5
    * UMD with minification
* cleans up the `package.json` file - required to publishing to npm
* outputs to destination directory

```ts
Building Angular Package
Building entry point '@angularlicious/logging'
Compiling TypeScript sources through ngc
Bundling to FESM2015
Bundling to FESM5
Bundling to UMD
Minifying UMD bundle
Copying declaration files
Writing package metadata
Removing scripts section in package.json as it's considered a potential security vulnerability.
Built @angularlicious/logging
Built Angular Package!
 - from: D:\development\github\custom-angular-libraries-course\getting-started-with-libs\libs\logging
 - to:   D:\development\github\custom-angular-libraries-course\getting-started-with-libs\dist\libs\loggingng
 ```

> Use the `ngc` compiler against the library directly to get more precise error messages if you require more details.

### Adding a Service to Angular Libraries

Add a new `service` to the library project. Angular services are `@Injectable` - therefore, the library should be responsible for providing a service for any applications. Consumers of the library should do this. The new service should be added to the library's `index.ts` file (manifest) to indicate it is accessible to consumers.

```ts
ng generate service -help
ng generate service --name=logging --project=logging --spec=false --dry-run
```

### Using the Library

Create a new `application` project to consume/use the `library` project.

```ts
ng generate application --help # to see options for application project
ng generate application logging-consumer --routing --style=scss --dry-run # remote --dry-run to add/update workspace files
```

```ts
CREATE apps/logging-consumer-e2e/protractor.conf.js (752 bytes)
CREATE apps/logging-consumer-e2e/tsconfig.e2e.json (247 bytes)
CREATE apps/logging-consumer-e2e/src/app.e2e-spec.ts (312 bytes)
CREATE apps/logging-consumer-e2e/src/app.po.ts (219 bytes)
CREATE apps/logging-consumer/browserslist (388 bytes)
CREATE apps/logging-consumer/karma.conf.js (493 bytes)
CREATE apps/logging-consumer/tsconfig.app.json (229 bytes)
CREATE apps/logging-consumer/tsconfig.spec.json (292 bytes)
CREATE apps/logging-consumer/tslint.json (269 bytes)
CREATE apps/logging-consumer/src/favicon.ico (5430 bytes)
CREATE apps/logging-consumer/src/index.html (324 bytes)
CREATE apps/logging-consumer/src/main.ts (372 bytes)
CREATE apps/logging-consumer/src/polyfills.ts (3234 bytes)
CREATE apps/logging-consumer/src/test.ts (642 bytes)
CREATE apps/logging-consumer/src/styles.scss (80 bytes)
CREATE apps/logging-consumer/src/assets/.gitkeep (0 bytes)
CREATE apps/logging-consumer/src/environments/environment.prod.ts (51 bytes)
CREATE apps/logging-consumer/src/environments/environment.ts (662 bytes)
CREATE apps/logging-consumer/src/app/app.module.ts (485 bytes)
CREATE apps/logging-consumer/src/app/app.component.html (602 bytes)
CREATE apps/logging-consumer/src/app/app.component.spec.ts (1103 bytes)
CREATE apps/logging-consumer/src/app/app.component.ts (232 bytes)
CREATE apps/logging-consumer/src/app/app.component.scss (0 bytes)
UPDATE angular.json (5665 bytes)
UPDATE package.json (2614 bytes)
UPDATE nx.json (352 bytes)
```