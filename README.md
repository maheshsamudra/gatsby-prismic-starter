<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter for Prismic + Previews
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using this starter
    npx gatsby new my-prismic-starter https://github.com/maheshsamudra/gatsby-prismic-starter
    ```
    
2. **Setup Prismic**

   By default, this starter includes two sample templates:

   - Home Page - Single Type
   - Page - Repeatable type
    
   Create the custom types in Prismic.io using the schema available in `./initialSchemaSamples` folder.
   
   You can delete these files after this step.

3. **Update the `.env`**
   
   Add the `GATSBY_PRISMIC_REPO_NAME`, `PRISMIC_ACCESS_TOKEN`, `PRISMIC_CUSTOM_TYPES_API_TOKEN` to get started with Prismic.
   
   Add the `MAILGUN_DOMAIN`, `MAILGUN_API_KEY`, `EMAIL_RECIPIENTS` to get started with sending emails for the forms.

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-prismic-starter
    npm run develop
    ```

5. **New pages and components**

   You can create new templates with `plop`. Run `npm run create` to get started with Components and Page templates.
    
    ```
   Component: creates a new reusable component in ./src/components folder
   Page Template: creates a new page template in ./src/templates folder
    ```
   **Note:**
   When the page template is created, it will automatically add the related graph queries. However, you'll need to add them manually to `linkResolver` and `componentResolver` manually. They are located in `./config/prismic` folder.

6. **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Start editing the template pages to see your site update in real-time!

7.  **Learn more of Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)
