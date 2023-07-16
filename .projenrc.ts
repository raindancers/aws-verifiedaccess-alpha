import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Andrew Frazer',
  authorAddress: 'andrew.frazer@raindancers.cloud',
  cdkVersion: '2.87.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'aws-verifiedaccess-alpha',
  projenrcTs: true,
  repositoryUrl: 'https://mrpackethead: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@github.com/raindancers/aws-verifiedaccess-alpha.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();