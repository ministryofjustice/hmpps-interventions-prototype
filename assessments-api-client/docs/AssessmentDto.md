# HmppsOffenderAssessmentApi.AssessmentDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessmentId** | **Number** | Assessment primary key (OASysSetPK) | [optional] 
**assessmentStatus** | **String** | Assessment Status | [optional] 
**assessmentType** | **String** | Assessment Type | [optional] 
**assessorName** | **String** | AssessorName | [optional] 
**childSafeguardingIndicated** | **Boolean** | Child Safeguarding flat | [optional] 
**completedDateTime** | **Date** | Completed Date | [optional] 
**createdDateTime** | **Date** | Created Date | [optional] 
**historicStatus** | **String** | Assessment Group Historic Status | [optional] 
**layer3SentencePlanNeeds** | [**[AssessmentNeedDto]**](AssessmentNeedDto.md) | Criminogenic Needs | [optional] 
**refAssessmentId** | **Number** | Assessment Reference Version | [optional] 
**refAssessmentOasysScoringAlgorithmVersion** | **Number** | Assessment Scoring Algorithm Version | [optional] 
**refAssessmentVersionCode** | **String** | Assessment Reference Version Code | [optional] 
**refAssessmentVersionNumber** | **String** | Assessment Reference Version | [optional] 
**sections** | [**[SectionDto]**](SectionDto.md) | Assessment Sections | [optional] 
**sentence** | [**[SentenceDto]**](SentenceDto.md) | Sentences | [optional] 
**voidedDateTime** | **Date** | Voided Date | [optional] 


