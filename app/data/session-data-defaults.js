/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]
 {id: "EN000001", name: "Bob", phone: "02011122333"}

============================================================================

*/

const moment = require("moment");

module.exports = {
  sprint3: {
    referrals: [
      {
	reference: "NR0001",

	interventions: [
	  {
	    name: "Accommodation",
	    actionPlanSubmitted: false,
	    actionPlanApproved: false,
	    goals: [],
	    sessions: [],
	  },
	  {
	    name: "Social inclusion",
	    actionPlanSubmitted: false,
	    actionPlanApproved: false,
	    goals: [],
	    sessions: [],
	  }
	]
      }
    ],
  },
  sprint4: {
    referrals: [
      { serviceUser: { name: "Alex River", firstName: "Alex" }, probationPractitioner: { name: "Jessica Reel" } },
      { serviceUser: { name: "Emma Thompson", firstName: "Emma" }, probationPractitioner: { name: "Josie Bart" } },
      { serviceUser: { name: "Rosie Palma", firstName: "Rosie" }, probationPractitioner: { name: "Josie Bart" } },
    ].map(createReferral)
  }
}

function createReferral(params, index) {
  return {
    reference: "NR" + (index + 1).toString().padStart(4, "0"),

    receivedAt: moment().subtract('1', 'days').toDate(),

    relevantSentenceHTML: "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
    desiredOutcomes: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
    requiredComplexityHTML: "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
    completionDateRequired: moment().add('2', 'months').toDate(),
    maximumRARDays: "22",
    furtherInformation: "N/A",

    serviceUser: Object.assign({
      name: "Alex River",
      firstName: "Alex",
      otherNames: "Shorty",
      addressHTML: "Flat 2<br>27 Test Walk<br>SY16 1AQ<br><br>Private rental</dd>",
      nationality: "British",
      ethnicGroup: "White: British",
      preferredLanguage: "English",
      sexuality: "Heterosexual",
      religionOrBelief: "None",
      disabilities: "Autism spectrum condition"
    }, params.serviceUser),

    probationPractitioner: Object.assign({
      name: "Jessica Reel"
    }, params.probationPractitioner),

    interventions: [
      {
	name: "Accommodation",
	actionPlanSubmitted: false,
	actionPlanApproved: false,
	goals: [],
	sessions: [],
      },
      {
	name: "Social inclusion",
	actionPlanSubmitted: false,
	actionPlanApproved: false,
	goals: [],
	sessions: [],
      }
    ]
  }
}
