export interface PackageJson {
  name: string;
  description: string;
  version: string;
  author: string;
  homepage: string;
  license: string;
  repository: PackageJsonRepository;
  bugs: PackageJsonBugs;
  keywords: string[];
  funding: PackageJsonFundings;
  publishConfig: PackageJsonFundingsPublishConfig;
  // [k: string]: any;
}

interface PackageJsonRepository {
  url: string;
  type: string;
}

interface PackageJsonBugs {
  url: string;
}

interface PackageJsonFundingsPublishConfig {
  registry: string;
}

interface PackageJsonFundings {
  type: string;
  url: string;
}
