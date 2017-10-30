/**
 * Service Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'service',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A service with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../app/services/{{name}}/index.js',
        templateFile: './service/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/actions.js',
        templateFile: './service/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/tests/actions.test.js',
        templateFile: './service/actions.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/constants.js',
        templateFile: './service/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/reducer.js',
        templateFile: './service/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/tests/reducer.test.js',
        templateFile: './service/reducer.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/sagas.js',
        templateFile: './service/sagas.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/tests/sagas.test.js',
        templateFile: './service/sagas.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/selectors.js',
        templateFile: './service/selectors.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/services/{{name}}/tests/selectors.test.js',
        templateFile: './service/selectors.test.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
