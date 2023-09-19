# JEST

This is an example about unittest using NodeJs and **jest**.

There is a function named **calculateSum** inside the file **calculator.js** which will calculate the sum of two integers and  returns the sum.

You can start the application with the command **npm start**

And then in browser navigate to the page http://localhost:3000

You can excute the tests with the command **npm test**

You can find the test-code from the file **calculator.test.js**

## GitHub Actions

In GitHub you can activate the test. For NodeJs applications, you can do it like this
<ol>
<li>in GitHub click **Actions**</li>
<li>choose the Node.js and click Configure</li>
<li>check that the node-versions are right and edit if needed (example 18.x, 19.x)</li>
<li>click Commit Changes</li>
<li>in local-repo **pull** and you should have a new folder **.github** </li>
</ol>
Then you can test to push with test which will fail and then with a test which will pass. You can see the results in the Action section.

## Deploy from GitHub 

In some cloudservices, you can enable the "CI-system". So, it means that everytime your main-branch(or the branch you choose) is changing, the system will Deploy the new version, but only if the tests have been passed in GitHub.

You can enable the option "Wait for CI to pass before deploy in **Heroku**.

In **Render** you can use the deploy hook, which is described in the page https://render.com/docs/deploy-hooks.

And then every time you push to GitHub, it runs the test and if the tests fails, Heroku application is not updated.