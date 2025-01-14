module.exports = (container) => {
  /**
   * Register read only dependencies.
   */
  container.constant('glob', require('glob'));
  container.constant('repository', require('./repository'));
  container.constant('controller', require('./controller'));
  container.constant('config', require('../config/app'));
  container.constant('relations', require('../config/relations'));
  container.constant('mysql', require('mysql'));
  container.constant('knex', require('../config/db').knex);
  container.constant('Model', require('../config/db').Model);
  container.constant('transaction', require('../config/db').transaction);
  container.constant('util', require('util'));
  container.constant('bodyParser', require('body-parser'));
  container.constant('sprintf', require('sprintf-js').sprintf);
  container.constant('noCase', require('no-case'));
  container.constant('moment', require('moment'));
  container.constant('logger', require('../helpers/logger'));
  container.constant('asyncWrapper', require('../config/exception-handler').asyncWrapper);
  container.constant('objectMapper', require('object-mapper'));
  container.constant('mapper', require('../helpers/mappers'));
  container.constant('joi', require('@hapi/joi'));
  container.constant('mung', require('express-mung'));
  container.constant('validator', require('express-joi-validation')({
    'joi': container.joi,
    'passError': true,
  }));

  /**
   * Register object dependencies.
   */
  container.service('ErrorHandlers', require('../helpers/ErrorHandlers'));
};
