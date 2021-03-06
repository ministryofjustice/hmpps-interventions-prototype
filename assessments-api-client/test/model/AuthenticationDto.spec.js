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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AuthenticationDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.AuthenticationDto();
      });

      it('should create an instance of AuthenticationDto', function() {
        // TODO: update the code to test AuthenticationDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.AuthenticationDto);
      });

      it('should have the property authenticated (base name: "authenticated")', function() {
        // TODO: update the code to test the property authenticated
        expect(instance).to.have.property('authenticated');
        // expect(instance.authenticated).to.be(expectedValueLiteral);
      });

    });
  });

}));
