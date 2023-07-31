import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import * as core from 'aws-cdk-lib';
import { VerifiedAccess } from '../test/va/va';

const app = new core.App();
const stack = new VerifiedAccess(app, 'VerifiedAccess', {

});

new integ.IntegTest(app, 'vatest', {
  testCases: [stack],
});

app.synth();