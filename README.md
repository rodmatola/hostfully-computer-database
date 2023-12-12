# Hostfully QA Engineer Cypress exercise


## Running the project

To run this project, you can choose the 3 ways below:

1. [GitHub Actions](#github-actions)
1. [Locally in your machine](#locally-in-your-machine)
1. [GitHub Codespaces](#github-codespaces) (not working)
1. [Devcontainer in VS Code](#devcontainer-in-vs-code) (not tested)

### GitHub Actions

This is the easiest way because you can run the project basically with only one click.

1. Go to the Actions tab
1. Click on `Hostfully Exercise` on the left menu
1. Click on `Run workflow` button on the right in the blue bar
1. Click on the `Run workflow` green button.

After the workflow finishes, an zip file will be generated containing the Cypress run videos. You can download it at the button of the chosen run.

### Locally in your machine

Prerequisites:

- NodeJS, preferentially installed through a node version manage, like [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n)

If you already have NodeJS installed via nvm, type

```sh
nvm use
```

to install the NodeJS version used in this repository (v18.14.0). Having other NodeJS version should not be a problem.

To install dependencies, type

```sh
npm i
```

### Running in headless mode

For run in headless mode, just type

```sh
npm test
```

The run videos will be stored in `cypress/videos` folder (default folder)

### Running in interactive mode

First, you need to open Cypress by typing

```sh
npx cypress open
```

then

1. Choose E2E Tests
1. Select a browser and click on `Start E2E testing in [selected browser] (tested with Chrome and Electron)
1. Click on the play button to run all specs, or select one spec to run from the table.

### GitHub Codespaces

**PLEASE, read Notes/Improvements section item 2**

When you click the `<> Code` button on GitHub do clone the project, you will see the `Codespaces` tab. Click on it. Then choose `Create a Codespace on main`.

Everything needed to run this project will be installed and a web version of VS Code will be open. Just type, in terminal

```sh
npm test
```

### Devcontainer in VS Code

**ATTENTION**: you MUST have docker installed to run this way

In VS Code, at the bottom left corner, you will see a green icon with these signs `><`. Click on it then choose `Reopen in container` and wait the process end.

Everything needed to run this project will be installed and VS Code will be open inside a Docker container. Just type, in terminal

```sh
npm test
```

**PLEASE, read Notes/Improvements section item 3**

## Issues

Some issues found on website during exploratory tests were registered on this [repository issues tab](https://github.com/rodmatola/hostfully-computer-database/issues)

## Notes/Improvements on this repo

1. JSCPD linter was complaining about a code duplication. A custom command was started to fix it. It is commented in code.
1. Xvfb is missing on devcontainer/codespace config. Tests will not run
1. Didn't test devcontainer locally (poor machine)


