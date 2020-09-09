# HmppsOffenderAssessmentApi.AuthenticationApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserAuthorisedForOffenderIdUsingGET**](AuthenticationApi.md#getUserAuthorisedForOffenderIdUsingGET) | **GET** /authentication/user/{oasysUserId}/offender/{offenderId}/{resource} | Verifies a user has access to an offender
[**getUserByUserIdUsingGET**](AuthenticationApi.md#getUserByUserIdUsingGET) | **GET** /authentication/user/{oasysUserId} | Gets a user by its user code
[**validateUserUsingPOST**](AuthenticationApi.md#validateUserUsingPOST) | **POST** /authentication/user/validate | Validates a users credentials


<a name="getUserAuthorisedForOffenderIdUsingGET"></a>
# **getUserAuthorisedForOffenderIdUsingGET**
> AuthorisationDto getUserAuthorisedForOffenderIdUsingGET(oasysUserId, offenderId, resource, sessionId)

Verifies a user has access to an offender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AuthenticationApi();

var oasysUserId = "oasysUserId_example"; // String | oasysUserId

var offenderId = 789; // Number | offenderId

var resource = "resource_example"; // String | resource

var sessionId = 789; // Number | sessionId

apiInstance.getUserAuthorisedForOffenderIdUsingGET(oasysUserId, offenderId, resource, sessionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oasysUserId** | **String**| oasysUserId | 
 **offenderId** | **Number**| offenderId | 
 **resource** | **String**| resource | 
 **sessionId** | **Number**| sessionId | 

### Return type

[**AuthorisationDto**](AuthorisationDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getUserByUserIdUsingGET"></a>
# **getUserByUserIdUsingGET**
> OasysUserAuthenticationDto getUserByUserIdUsingGET(oasysUserId)

Gets a user by its user code

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AuthenticationApi();

var oasysUserId = "oasysUserId_example"; // String | oasysUserId

apiInstance.getUserByUserIdUsingGET(oasysUserId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oasysUserId** | **String**| oasysUserId | 

### Return type

[**OasysUserAuthenticationDto**](OasysUserAuthenticationDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="validateUserUsingPOST"></a>
# **validateUserUsingPOST**
> AuthenticationDto validateUserUsingPOST(request)

Validates a users credentials

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.AuthenticationApi();

var request = new HmppsOffenderAssessmentApi.ValidateUserRequest(); // ValidateUserRequest | request

apiInstance.validateUserUsingPOST(request).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ValidateUserRequest**](ValidateUserRequest.md)| request | 

### Return type

[**AuthenticationDto**](AuthenticationDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

