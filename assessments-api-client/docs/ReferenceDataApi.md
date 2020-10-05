# HmppsOffenderAssessmentApi.ReferenceDataApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReferenceDataByCategoryCodeUsingGET**](ReferenceDataApi.md#getReferenceDataByCategoryCodeUsingGET) | **GET** /referencedata/{category} | Gets reference data for a category


<a name="getReferenceDataByCategoryCodeUsingGET"></a>
# **getReferenceDataByCategoryCodeUsingGET**
> [RefElementDto] getReferenceDataByCategoryCodeUsingGET(category)

Gets reference data for a category

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.ReferenceDataApi();

var category = "category_example"; // String | category

apiInstance.getReferenceDataByCategoryCodeUsingGET(category).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | 

### Return type

[**[RefElementDto]**](RefElementDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

