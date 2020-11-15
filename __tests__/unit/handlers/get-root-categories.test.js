// Import all functions from hello-from-lambda.js
const lambda = require('../../../src/handlers/get-root-categories.js');

describe('Test get-root-categories', () => {
    // This test invokes the hello-from-lambda Lambda function and compares the result
    it('Returrns an array of categories', async () => {
        // Invoke helloFromLambdaHandler
        const result = await lambda.getRootCategoriesHandler();

        /*
            The expected result should match the return from your Lambda function.
        */
        // Compare the result with the expected result
        expect(result).to.be.array();
    });
});
