# HmppsOffenderAssessmentApi.AssessmentsApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssessmentUsingGET**](AssessmentsApi.md#getAssessmentUsingGET) | **GET** /assessments/oasysSetId/{oasysSetId} | Gets an Assessment by its identity
[**getAssessmentUsingGET1**](AssessmentsApi.md#getAssessmentUsingGET1) | **GET** /offenders/{identityType}/{identity}/assessments/latest | Gets the latest assessment for an offender
[**getAssessmentsForOffenderUsingGET**](AssessmentsApi.md#getAssessmentsForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/assessments/summary | Gets a list of assessments for an offender


<a name="getAssessmentUsingGET"></a>
# **getAssessmentUsingGET**
> AssessmentDto getAssessmentUsingGET(oasysSetId)

Gets an Assessment by its identity

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AssessmentsApi();

var oasysSetId = 789; // Number | oasysSetId

apiInstance.getAssessmentUsingGET(oasysSetId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oasysSetId** | **Number**| oasysSetId | 

### Return type

[**AssessmentDto**](AssessmentDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAssessmentUsingGET1"></a>
# **getAssessmentUsingGET1**
> AssessmentDto getAssessmentUsingGET1(identity, identityType, opts)

Gets the latest assessment for an offender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AssessmentsApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getAssessmentUsingGET1(identity, identityType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identity** | **String**| identity | 
 **identityType** | **String**| identityType | 
 **assessmentStatus** | **String**| assessmentStatus | [optional] 
 **assessmentType** | **String**| assessmentType | [optional] 
 **historicStatus** | **String**| historicStatus | [optional] 
 **voided** | **Boolean**| voided | [optional] 

### Return type

[**AssessmentDto**](AssessmentDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAssessmentsForOffenderUsingGET"></a>
# **getAssessmentsForOffenderUsingGET**
> [AssessmentSummaryDto] getAssessmentsForOffenderUsingGET(identity, identityType, opts)

Gets a list of assessments for an offender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AssessmentsApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getAssessmentsForOffenderUsingGET(identity, identityType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identity** | **String**| identity | 
 **identityType** | **String**| identityType | 
 **assessmentStatus** | **String**| assessmentStatus | [optional] 
 **assessmentType** | **String**| assessmentType | [optional] 
 **historicStatus** | **String**| historicStatus | [optional] 
 **voided** | **Boolean**| voided | [optional] 

### Return type

[**[AssessmentSummaryDto]**](AssessmentSummaryDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

