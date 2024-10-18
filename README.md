# Incubyte-TDD-Assesment

## How TDD work?
Test-driven development (TDD) is a software development approach where you write tests before writing the actual code:

Write a failing test case that describes the desired functionality.
Write the minimum code necessary to make the test pass.
Refactor the code to improve its structure while ensuring the test continues to pass.
Repeat steps 1-3 for each new piece of functionality.
TDD helps ensure code quality, maintainability, and that software meets its requirements.
![flow](https://github.com/dhruv2x/Incubyte_TDD_Assessment/assets/84621641/5349913e-8be9-4936-859c-d3a190a3fccc)

## Setup TDD Environment

To set up the Test-Driven Development (TDD) environment for this project, follow these steps:

1. Create an NPM project:
   ```bash
   $ npm init
   ```

2. Create `example.js` and add it to the project’s root.

3. Install Mocha for testing:
   ```bash
   $ npm install mocha --save-dev
   ```

4. Update the `package.json` test script to run Mocha tests:
   ```json
   "scripts": {
     "test": "mocha"
   }
   ```

5. Create test files using the `.test.js` extension to write your tests.

6. To run tests, use the following command:
   ```bash
   $ npm run test
   ```

### How to download and install required libraries

 Run the following commands to start using this repository:

1- Clone the repository using the following command:

```bash
git clone https://github.com/Shashank02051997/Incubyte-TDD-Assesment.git
```

2- Run the following command:

```bash
npm install or npm i
```

### How to Run the tests

Use one of the following commands to run your tests:

```bash
npm run test