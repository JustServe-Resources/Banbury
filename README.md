# Banbury Zendesk Theme

This repository contains the custom Zendesk Help Center theme used by JustServe. It is built using [Handlebars] (.hbs), [SCSS], [TypeScript], and JavaScript (bundled via [Rollup]).

## Required Tools

To work on this theme, you must acquire the following tools:

<table>
  <tr>
    <td width="20%"><strong>Git</strong></td>
    <td>Install <a href="https://git-scm.com/">Git</a> and configure your local <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh">SSH</a> credentials on <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account">GitHub</a>. <a href="https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa">MFA</a> must be enabled on your GitHub account in order to join the JustServe-Resources GitHub organization.</td>
  </tr>
  <tr>
    <td><strong>IDE</strong></td>
    <td>Install Visual Studio Code, a JetBrains IDE, or a similarly decent IDE.</td>
  </tr>
  <tr>
    <td><strong>Node.js</strong></td>
    <td>Refer to <a href="https://nodejs.org/">nodejs.org</a> to find how to install this for your OS.</td>
  </tr>
  <tr>
    <td><strong>Yarn</strong></td>
    <td>Install globally via npm (<code>npm install -g yarn</code>). (npm is installed when you install Node.js)</td>
  </tr>
  <tr>
    <td><strong>ZCLI (Zendesk CLI)</strong></td>
    <td>Refer to the <a href="https://developer.zendesk.com/documentation/zendesk-command-line-interface/zcli-themes/">Zendesk ZCLI Documentation</a> for setup, authentication, and preview usage.</td>
  </tr>
  <tr>
    <td><strong>Firefox Extension</strong></td>
    <td>Install <a href="https://addons.mozilla.org/en-US/firefox/addon/export-cookies-txt/">Export Cookies</a> on Firefox. This is required for end-to-end testing.</td>
  </tr>
</table>

## How to contribute

1. Install local project dependencies:
   ```bash
   yarn install
   ```

2. Start the local development server:
   ```bash
   yarn start
   ```
   This command continuously watches `/src/` and `/styles/` folders and runs Rollup to compile them into the `/assets/` directory.

##### Important Folder Rules
- `templates/`: Edit your Handlebars (.hbs) HTML structural files here.
- `src/` and `styles/`: Edit raw JavaScript and CSS source code here.
- `assets/`: Do not edit files here. They are automatically generated and overwritten by Rollup.

## Testing

### Run Tests Against Sandbox Only

__DO NOT RUN TESTS AGAINST PRODUCTION__ (`justserve.zendesk.com`). Tests are to only run against a Sandbox environment. Attempts to run tests against production will fail and your access to the JustServe GitHub repository and Zendesk may be removed. 

> [!NOTE]
> Checkout the [Zendesk Developer Sandbox Documentation] to procure and configure your own sandbox. Alternatively, you can email `support@justserve.org` to request access to the current shared Sandbox we are using, and we can provision you a test account with which you can login to the sandbox.

### Playwright Tests

We use Playwright for automated UI tests. You must manually set your active browser cookies to bypass Zendesk and Cloudflare bot protection. We use the firefox extension [Export Cookies] to get these. 

1. Copy `.env.example` to `.env` and configure `ZENDESK_TEST_HOST` with your assigned Sandbox domain.
2. Open Firefox, log into the JustServe Zendesk Sandbox securely, and pass any captchas.
3. Click the Export Cookies extension and select "Export as cookies.txt".
4. Copy or save the downloaded file into the root folder of this repository, ensuring it is named exactly `cookies-zendesk-com.txt`.
5. Run the test suite:
   ```bash
   yarn test:e2e
   ```

### Jest Tests

We use Jest for unit testing the javascript and typescript files. When running these tests, it is normal to see red text and warnings in the console output. 

You should ignore these warnings and refer to the final test summary at the bottom of the output. Verify that the count of tests passing matches the total count of tests ran to ensure your tests are successful.



[nodejs.org]: https://nodejs.org/
[Git]: https://git-scm.com/
[SSH]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
[GitHub]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
[MFA]: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa
[Zendesk ZCLI Documentation]: https://developer.zendesk.com/documentation/zendesk-command-line-interface/zcli-themes/
[Export Cookies]: https://addons.mozilla.org/en-US/firefox/addon/export-cookies-txt/
[Handlebars]: https://handlebarsjs.com/
[SCSS]: https://sass-lang.com/
[TypeScript]: https://www.typescriptlang.org/
[Rollup]: https://rollupjs.org/
[Zendesk Developer Sandbox Documentation]: https://developer.zendesk.com/documentation/developer-tools/getting-started/getting-a-trial-or-sponsored-account-for-development/