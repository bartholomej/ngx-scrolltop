import { Rule, Tree, SchematicsException } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import * as ts from 'typescript';
import { addSymbolToNgModuleMetadata } from '../utility/ast-utils';
import { InsertChange } from '../utility/change';

export function addDeclarationToAppModule(appModule: string): Rule {
  return (host: Tree) => {
    if (!appModule) {
      return host;
    }

    // Part I: Construct path and read file
    const modulePath = normalize('/' + appModule);

    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(
      modulePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true
    );

    // Part II: Find out, what to change
    const changes = addSymbolToNgModuleMetadata(
      source,
      modulePath,
      'imports',
      'NgxScrolltopModule',
      'ngx-scrolltop'
    );

    // Part III: Apply changes
    const recorder = host.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}
