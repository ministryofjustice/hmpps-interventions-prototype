# HmppsOffenderAssessmentApi.ReferenceAssessmentApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReferenceAssessmentOfUsingGET**](ReferenceAssessmentApi.md#getReferenceAssessmentOfUsingGET) | **GET** /referenceassessments/type/{versionCode}/revision/{versionNumber} | getReferenceAssessmentOf


<a name="getReferenceAssessmentOfUsingGET"></a>
# **getReferenceAssessmentOfUsingGET**
> RefAssessmentDto getReferenceAssessmentOfUsingGET(versionCode, versionNumber)

getReferenceAssessmentOf

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.ReferenceAssessmentApi();

var versionCode = "versionCode_example"; // String | versionCode

var versionNumber = "versionNumber_example"; // String | versionNumber

apiInstance.getReferenceAssessmentOfUsingGET(versionCode, versionNumber).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCode** | **String**| versionCode | 
 **versionNumber** | **String**| versionNumber | 

### Return type

[**RefAssessmentDto**](RefAssessmentDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

