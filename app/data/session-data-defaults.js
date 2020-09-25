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
  }
}
