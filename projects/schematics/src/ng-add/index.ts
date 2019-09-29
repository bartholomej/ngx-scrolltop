import {
  branchAndMerge,
  chain,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import * as fs from 'fs';
import { addDeclarationToAppModule } from './add-declaration-to-module.rule';

// TODO hardcoded. Read from config.
const DEFAULT_NAME = 'app';
const ROOT_URL = '/src/app/';
const NGX_TEMPLATE = '<ngx-scrolltop></ngx-scrolltop>';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rootModule = `${ROOT_URL}${DEFAULT_NAME}.module.ts`;
    const rootComponent = `./${ROOT_URL}${DEFAULT_NAME}.component.html`;

    // TODO use schematics api if exists
    fs.appendFileSync(rootComponent, NGX_TEMPLATE);

    return chain([
      branchAndMerge(chain([addDeclarationToAppModule(rootModule)])),
    ])(tree, context);
  };
}
