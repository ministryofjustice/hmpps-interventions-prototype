/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthenticationDto', 'model/AuthorisationDto', 'model/OasysUserAuthenticationDto', 'model/ValidateUserRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthenticationDto'), require('../model/AuthorisationDto'), require('../model/OasysUserAuthenticationDto'), require('../model/ValidateUserRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.HmppsOffenderAssessmentApi) {
      root.HmppsOffenderAssessmentApi = {};
    }
    root.HmppsOffenderAssessmentApi.AuthenticationApi = factory(root.HmppsOffenderAssessmentApi.ApiClient, root.HmppsOffenderAssessmentApi.AuthenticationDto, root.HmppsOffenderAssessmentApi.AuthorisationDto, root.HmppsOffenderAssessmentApi.OasysUserAuthenticationDto, root.HmppsOffenderAssessmentApi.ValidateUserRequest);
  }
}(this, function(ApiClient, AuthenticationDto, AuthorisationDto, OasysUserAuthenticationDto, ValidateUserRequest) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Verifies a user has access to an offender
     * @param {String} oasysUserId oasysUserId
     * @param {Number} offenderId offenderId
     * @param {module:model/String} resource resource
     * @param {Number} sessionId sessionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthorisationDto} and HTTP response
     */
    this.getUserAuthorisedForOffenderIdUsingGETWithHttpInfo = function(oasysUserId, offenderId, resource, sessionId) {
      var postBody = null;

      // verify the required parameter 'oasysUserId' is set
      if (oasysUserId === undefined || oasysUserId === null) {
        throw new Error("Missing the required parameter 'oasysUserId' when calling getUserAuthorisedForOffenderIdUsingGET");
      }

      // verify the required parameter 'offenderId' is set
      if (offenderId === undefined || offenderId === null) {
        throw new Error("Missing the required parameter 'offenderId' when calling getUserAuthorisedForOffenderIdUsingGET");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling getUserAuthorisedForOffenderIdUsingGET");
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling getUserAuthorisedForOffenderIdUsingGET");
      }


      var pathParams = {
        'oasysUserId': oasysUserId,
        'offenderId': offenderId,
        'resource': resource
      };
      var queryParams = {
        'sessionId': sessionId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = AuthorisationDto;

      return this.apiClient.callApi(
        '/authentication/user/{oasysUserId}/offender/{offenderId}/{resource}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Verifies a user has access to an offender
     * @param {String} oasysUserId oasysUserId
     * @param {Number} offenderId offenderId
     * @param {module:model/String} resource resource
     * @param {Number} sessionId sessionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthorisationDto}
     */
    this.getUserAuthorisedForOffenderIdUsingGET = function(oasysUserId, offenderId, resource, sessionId) {
      return this.getUserAuthorisedForOffenderIdUsingGETWithHttpInfo(oasysUserId, offenderId, resource, sessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a user by its user code
     * @param {String} oasysUserId oasysUserId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OasysUserAuthenticationDto} and HTTP response
     */
    this.getUserByUserIdUsingGETWithHttpInfo = function(oasysUserId) {
      var postBody = null;

      // verify the required parameter 'oasysUserId' is set
      if (oasysUserId === undefined || oasysUserId === null) {
        throw new Error("Missing the required parameter 'oasysUserId' when calling getUserByUserIdUsingGET");
      }


      var pathParams = {
        'oasysUserId': oasysUserId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = OasysUserAuthenticationDto;

      return this.apiClient.callApi(
        '/authentication/user/{oasysUserId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets a user by its user code
     * @param {String} oasysUserId oasysUserId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OasysUserAuthenticationDto}
     */
    this.getUserByUserIdUsingGET = function(oasysUserId) {
      return this.getUserByUserIdUsingGETWithHttpInfo(oasysUserId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validates a users credentials
     * @param {module:model/ValidateUserRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthenticationDto} and HTTP response
     */
    this.validateUserUsingPOSTWithHttpInfo = function(request) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling validateUserUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['spring_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = AuthenticationDto;

      return this.apiClient.callApi(
        '/authentication/user/validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validates a users credentials
     * @param {module:model/ValidateUserRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthenticationDto}
     */
    this.validateUserUsingPOST = function(request) {
      return this.validateUserUsingPOSTWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));