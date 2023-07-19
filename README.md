# dltHub website

Built with vanilla HTML and CSS

# Stack

- Content hosted on contentful
- Website hosted on netlify
- Theme hosted in this repository
- Content in /docs is generated from the docs in our dlt repository

# Deployment

- Updating content on the master environment in contentful will automatically trigger a rebuild on netlify and the changes will be deployed within a couple of minutes. Please remember to publish your changes on contentful, if you forget that, no build will be triggered. If you add new sections or content blocks to sections, remember that the parent content module must also be published.
- Making changes to the them on the main branch in the repository will also trigger a rebuild on netlify and the changes will be deployed within minutes

# Development

For local development:

- Check out this repository and install dependencies with yarn, by running `yarn`.
- Make sure there is an .env.development file present in the root, you can copy .env.development.example
- The `CONTENTFUL_SPACE_ID` is provided in the example, the `CONTENTFUL_ACCESS_TOKEN` must be aquired from 1password or contentful. With `CONTENTFUL_ENVIRONMENT` you can select from which contentful environment the content gets loaded
- Run `yarn start` to start up the local webserver. If you do changes in contentful while developing, you can run `yarn clean && yarn start` to make sure the local caches are cleared, otherwise some changes will not be available.

# Developing on a staging environment

If there is a bigger change to the website which should be reviewed by other team member before deployment you will have to create a new environment in contentful (this will clonse the current master environment) and work there until you are satisfied that you can deploy the changes to production. Unfortunately there is no way to merge all changes you did on your staging environment back into the master environment on contentful. So the development workflow for a staging environment is as follows:

### Setup local staging development:

- Go to contentful -> settings -> environments and click add environment
- You can name the new environment prod-(current-date), you can see the convention on the existing environments. This will clone the master environment and create a new copy.
- In the top right in contentful you can switch to the new environment, all changes to the content model and the actual content will remain on your new branch.
- Go to settings -> api keys in contentful and make sure that the existing api key has access to the new environment, so you can pull that data locally and on netlify
- Locally switch to the staging branch in this repo and set the `CONTENTFUL_ENVIRONMENT` to your new environment
- If you now run `yarn start`, you will have the theme changes from your staging branch as well as the content from your staging environment.

### Setup automatic staging deploys:

- Go to settings->webhooks->Netflify staging deploy in contentful and set the filter of the webhook to the name of your new staging environment, this will trigger rebuilds on the netlify staging deployment if you change stuff in your new contentful environment.
- Go to our netlify website project. There go to site configuration->environment variables. Find the `CONTENTFUL_ENVIRONMENT` variable and change the value for the staging branch to point to your new staging environment on contentful. This will make sure that the netlify staging deployments acquire the right content.
- Updating the theme on your staging branch in this repository will automatically trigger a new staging deployment, there are no changes needed here.
- Now make a change and see the deployment results on https://staging--dlt-hub.netlify.app

You can now make changes in the code and the content in the staging environments and work together with the team on the staging website. When you're done:

### Migrating staging to production:

- In contentful go to settings->environments and change the master alias to your staging environment, this will now be the new master
- In this repository, either merge the staging branch into the main branch, or reset the main branch to the commit the staging branch is on to keep a nice history
- After a few minutes you will see the production deployment updated to the staging version.
- You will now still have the old production environment in contentful. It is best practice to keep it around until the next bigger update to ensure nothing gets lost.
