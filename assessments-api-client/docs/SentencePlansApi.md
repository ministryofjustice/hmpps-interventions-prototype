# HmppsOffenderAssessmentApi.SentencePlansApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFullSentencePlanForOffenderUsingGET**](SentencePlansApi.md#getFullSentencePlanForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/fullSentencePlans/{oasysSetPk} | getFullSentencePlanForOffender
[**getFullSentencePlansForOffenderUsingGET**](SentencePlansApi.md#getFullSentencePlansForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/fullSentencePlans | getFullSentencePlansForOffender
[**getLatestBasicSentencePlanForOffenderUsingGET**](SentencePlansApi.md#getLatestBasicSentencePlanForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/basicSentencePlans/latest | getLatestBasicSentencePlanForOffender
[**getSentenceBasicPlansForOffenderUsingGET**](SentencePlansApi.md#getSentenceBasicPlansForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/basicSentencePlans | getSentenceBasicPlansForOffender
[**getSummarySentencePlansForOffenderUsingGET**](SentencePlansApi.md#getSummarySentencePlansForOffenderUsingGET) | **GET** /offenders/{identityType}/{identity}/fullSentencePlans/summary | getSummarySentencePlansForOffender


<a name="getFullSentencePlanForOffenderUsingGET"></a>
# **getFullSentencePlanForOffenderUsingGET**
> FullSentencePlanDto getFullSentencePlanForOffenderUsingGET(identity, identityType, oasysSetPk)

getFullSentencePlanForOffender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.SentencePlansApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var oasysSetPk = 789; // Number | oasysSetPk

apiInstance.getFullSentencePlanForOffenderUsingGET(identity, identityType, oasysSetPk).then(function(data) {
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
 **oasysSetPk** | **Number**| oasysSetPk | 

### Return type

[**FullSentencePlanDto**](FullSentencePlanDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getFullSentencePlansForOffenderUsingGET"></a>
# **getFullSentencePlansForOffenderUsingGET**
> [FullSentencePlanDto] getFullSentencePlansForOffenderUsingGET(identity, identityType, opts)

getFullSentencePlansForOffender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.SentencePlansApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getFullSentencePlansForOffenderUsingGET(identity, identityType, opts).then(function(data) {
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

[**[FullSentencePlanDto]**](FullSentencePlanDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getLatestBasicSentencePlanForOffenderUsingGET"></a>
# **getLatestBasicSentencePlanForOffenderUsingGET**
> BasicSentencePlanDto getLatestBasicSentencePlanForOffenderUsingGET(identity, identityType, opts)

getLatestBasicSentencePlanForOffender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.SentencePlansApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getLatestBasicSentencePlanForOffenderUsingGET(identity, identityType, opts).then(function(data) {
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

[**BasicSentencePlanDto**](BasicSentencePlanDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSentenceBasicPlansForOffenderUsingGET"></a>
# **getSentenceBasicPlansForOffenderUsingGET**
> [BasicSentencePlanDto] getSentenceBasicPlansForOffenderUsingGET(identity, identityType, opts)

getSentenceBasicPlansForOffender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.SentencePlansApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getSentenceBasicPlansForOffenderUsingGET(identity, identityType, opts).then(function(data) {
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

[**[BasicSentencePlanDto]**](BasicSentencePlanDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getSummarySentencePlansForOffenderUsingGET"></a>
# **getSummarySentencePlansForOffenderUsingGET**
> [FullSentencePlanSummaryDto] getSummarySentencePlansForOffenderUsingGET(identity, identityType, opts)

getSummarySentencePlansForOffender

### Example
```javascript
var HmppsOffenderAssessmentApi = require('hmpps_offender_assessment_api');
var defaultClient = HmppsOffenderAssessmentApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: spring_oauth
var spring_oauth = defaultClient.authentications['spring_oauth'];
spring_oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HmppsOffenderAssessmentApi.SentencePlansApi();

var identity = "identity_example"; // String | identity

var identityType = "identityType_example"; // String | identityType

var opts = { 
  'assessmentStatus': "assessmentStatus_example", // String | assessmentStatus
  'assessmentType': "assessmentType_example", // String | assessmentType
  'historicStatus': "historicStatus_example", // String | historicStatus
  'voided': true // Boolean | voided
};
apiInstance.getSummarySentencePlansForOffenderUsingGET(identity, identityType, opts).then(function(data) {
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

[**[FullSentencePlanSummaryDto]**](FullSentencePlanSummaryDto.md)

### Authorization

[spring_oauth](../README.md#spring_oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

