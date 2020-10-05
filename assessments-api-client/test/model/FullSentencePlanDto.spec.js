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
    describe('FullSentencePlanDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.FullSentencePlanDto();
      });

      it('should create an instance of FullSentencePlanDto', function() {
        // TODO: update the code to test FullSentencePlanDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.FullSentencePlanDto);
      });

      it('should have the property completedDate (base name: "completedDate")', function() {
        // TODO: update the code to test the property completedDate
        expect(instance).to.have.property('completedDate');
        // expect(instance.completedDate).to.be(expectedValueLiteral);
      });

      it('should have the property createdDate (base name: "createdDate")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property oasysSetId (base name: "oasysSetId")', function() {
        // TODO: update the code to test the property oasysSetId
        expect(instance).to.have.property('oasysSetId');
        // expect(instance.oasysSetId).to.be(expectedValueLiteral);
      });

      it('should have the property objectives (base name: "objectives")', function() {
        // TODO: update the code to test the property objectives
        expect(instance).to.have.property('objectives');
        // expect(instance.objectives).to.be(expectedValueLiteral);
      });

      it('should have the property questions (base name: "questions")', function() {
        // TODO: update the code to test the property questions
        expect(instance).to.have.property('questions');
        // expect(instance.questions).to.be(expectedValueLiteral);
      });

    });
  });

}));