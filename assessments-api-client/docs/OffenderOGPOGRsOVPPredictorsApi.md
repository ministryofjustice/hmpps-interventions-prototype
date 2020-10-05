# HmppsOffenderAssessmentApi.OffenderOGPOGRsOVPPredictorsApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPredictorScoresForOasysOffenderIdUsingGET**](OffenderOGPOGRsOVPPredictorsApi.md#getPredictorScoresForOasysOffenderIdUsingGET) | **GET** /offenders/{identityType}/{identity}/predictors | getPredictorScoresForOasysOffenderId


<a name="getPredictorScoresForOasysOffenderIdUsingGET"></a>
# **getPredictorScoresForOasysOffenderIdUsingGET**
> [PredictorDto] getPredictorScoresForOasysOffenderIdUsingGET(identity, identityType)

getPredictorScoresForOasysOffenderId

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.OffenderOGPOGRsOVPPredictorsApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

apiInstance.getPredictorScoresForOasysOffenderIdUsingGET(identity, identityType).then(function(data) {
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

### Return type

[**[PredictorDto]**](PredictorDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

