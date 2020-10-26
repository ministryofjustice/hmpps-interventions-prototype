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
          },
        ],
      },
    ],
  },
  sprint4: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Adam Michaels",
          email: "Adam.Michaels@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
      },
    ].map(createReferral),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
    ],
  },
  sprint5: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/02/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/10/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Bob Brown",
          firstName: "Bob",
          title: "Mr",
          gender: "Male",
          email: "bob.brown@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Home Trust",
            assignedCaseworker: "Liam Johnson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "01/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Safe Living Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "3",
            name: "Independent living",
            providerName: "Home Trust",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Helping Hands",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Robert Watkins",
          firstName: "Robert",
          title: "Mr",
          gender: "Male",
          email: "robert.watkins@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Mary Moore",
          firstName: "Mary",
          title: "Ms",
          gender: "Female",
          email: "mary.moore@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Ready to Go London",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Anthony Hughes",
          firstName: "Anthony",
          title: "Mr",
          gender: "Male",
          email: "anthony.hughes@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Better Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Fernando Willis",
          firstName: "Fernando",
          title: "Mr",
          gender: "Male",
          email: "fernando.willis@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Live Well",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Marion Clemmons",
          firstName: "Marion",
          title: "Ms",
          gender: "Female",
          email: "marion.clemmons@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Ross Gutierrez",
          firstName: "Ross",
          title: "Mr",
          gender: "Male",
          email: "ross.g@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Louis Wing",
          firstName: "Louis",
          title: "Mr",
          gender: "Male",
          email: "l.wing@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Richard Smith",
          firstName: "Richard",
          title: "Mr",
          gender: "Male",
          email: "rich@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Alma Pearson",
          firstName: "Alma",
          title: "Ms",
          gender: "Female",
          email: "alma.pearson@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Natasha Mackey",
          firstName: "Natasha",
          title: "Ms",
          gender: "Female",
          email: "natasha@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
    ].map(createReferralWithoutInterventions),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
      {
        name: "Kelly Clarkson",
        firstName: "Kelly",
      },
      {
        name: "Samantha Jones",
        firstName: "Samantha",
      },
    ],
    notifications: [
      {
        date: "09/11/20",
        time: "12:43",
        type: "Approve service user action plan",
        serviceUser: "Alex River",
        priority: true,
        action: "review",
        unread: true,
      },
      {
        date: "09/11/20",
        time: "11:02",
        type: "Approve service user action plan",
        serviceUser: "Alex River",
        priority: true,
        action: "review",
        unread: true,
      },
      {
        date: "08/11/20",
        time: "10:12",
        type: "Attended Session 2",
        serviceUser: "Bob Brown",
        priority: false,
        action: "view",
        unread: false,
      },
      {
        date: "08/11/20",
        time: "09:51",
        type: "Safeguarding issues identified",
        serviceUser: "Alex River",
        priority: true,
        action: "view",
        unread: false,
      },
      {
        date: "08/11/20",
        time: "09:42",
        type: "Initial assessment completed",
        serviceUser: "Emma Thompson",
        priority: false,
        action: "view",
        unread: false,
      },
      {
        date: "08/11/20",
        time: "11:02",
        type: "Safeguarding issues identified",
        serviceUser: "Emma Thompson",
        priority: true,
        action: "view",
        unread: false,
      },
      {
        date: "07/11/20",
        time: "16:10",
        type: "Did not attend initial assessment",
        serviceUser: "Macy Flem",
        priority: true,
        action: "view",
        unread: false,
      },
      {
        date: "07/11/20",
        time: "15:23",
        type: "Approve end of service report",
        serviceUser: "Robert Watkins",
        priority: true,
        action: "review",
      },
      {
        date: "07/11/20",
        time: "11:35",
        type: "Initial assessment completed",
        serviceUser: "Richard Smith",
        priority: true,
        action: "view",
        unread: false,
      },
    ],
  },
  sprint6: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/02/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/10/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Bob Brown",
          firstName: "Bob",
          title: "Mr",
          gender: "Male",
          email: "bob.brown@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Home Trust",
            assignedCaseworker: "Liam Johnson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "01/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Safe Living Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "3",
            name: "Independent living",
            providerName: "Home Trust",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Helping Hands",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Robert Watkins",
          firstName: "Robert",
          title: "Mr",
          gender: "Male",
          email: "robert.watkins@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Mary Moore",
          firstName: "Mary",
          title: "Ms",
          gender: "Female",
          email: "mary.moore@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Ready to Go London",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Anthony Hughes",
          firstName: "Anthony",
          title: "Mr",
          gender: "Male",
          email: "anthony.hughes@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Better Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Fernando Willis",
          firstName: "Fernando",
          title: "Mr",
          gender: "Male",
          email: "fernando.willis@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Live Well",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Marion Clemmons",
          firstName: "Marion",
          title: "Ms",
          gender: "Female",
          email: "marion.clemmons@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Ross Gutierrez",
          firstName: "Ross",
          title: "Mr",
          gender: "Male",
          email: "ross.g@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Louis Wing",
          firstName: "Louis",
          title: "Mr",
          gender: "Male",
          email: "l.wing@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Richard Smith",
          firstName: "Richard",
          title: "Mr",
          gender: "Male",
          email: "rich@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Alma Pearson",
          firstName: "Alma",
          title: "Ms",
          gender: "Female",
          email: "alma.pearson@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Natasha Mackey",
          firstName: "Natasha",
          title: "Ms",
          gender: "Female",
          email: "natasha@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
    ].map(createReferralWithoutInterventions),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
      {
        name: "Kelly Clarkson",
        firstName: "Kelly",
      },
      {
        name: "Samantha Jones",
        firstName: "Samantha",
      },
    ],
    notifications: [
      {
        date: "09/11/20",
        time: "12:43",
        type: "Service user absent from Session 2",
        serviceUser: "Macy Flem",
        priority: true,
        action: "review",
        unread: true,
        href: "cases/NR0005/interventions/0/sessions/0/absence-review",
      },
      {
        date: "09/11/20",
        time: "12:43",
        type: "Approve service user action plan",
        serviceUser: "Alex River",
        priority: true,
        action: "review",
        unread: true,
        href: "cases/NR0001/interventions/0/action-plan",
      },
      {
        date: "08/11/20",
        time: "10:12",
        type: "Attended Session 2",
        serviceUser: "Bob Brown",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "09:51",
        type: "Safeguarding issues identified",
        serviceUser: "Alex River",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "09:42",
        type: "Initial assessment completed",
        serviceUser: "Mary Moore",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "11:02",
        type: "Safeguarding issues identified",
        serviceUser: "Robert Watkins",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "07/11/20",
        time: "16:10",
        type: "Did not attend initial assessment",
        serviceUser: "Macy Flem",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "07/11/20",
        time: "15:23",
        type: "Approve end of service report",
        serviceUser: "Robert Watkins",
        priority: true,
        action: "review",
        href: "#",
      },
      {
        date: "07/11/20",
        time: "11:35",
        type: "Initial assessment completed",
        serviceUser: "Richard Smith",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
    ],
    findAnIntervention: [
      {
        title: "Accommodation",
        description: "Accommodation description",
        id: "0",
        selected: false,
        provider: "Harmony Living",
      },
      {
        title: "Social inclusion",
        description: "Social inclusion description",
        id: "1",
        selected: false,
        provider: "Harmony Living",
      },
      {
        title: "Employment",
        description: "Employment description",
        id: "2",
        selected: false,
        provider: "Harmony Living",
      },
    ],
  },
  sprint7: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/02/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Burglary<br>Sub category: Theft act, 1968<br>End of sentence date: 01/04/2021<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: `Alex requires support to obtain accommodation, he is motivated to get his life back on track, however I am concerned that his current living arrangements and attempt to desist from association with offending peers will be short lived if he does not receive urgent support. In the past Alex has failed to attend appointments with the local council or when he has attended appointments failed to understand what was being shared and has become very frustrated resulted in him being verbally abusive to staff. He will require support to complete forms and to attend appointments.
            <br><br>
            He also has appointments with the local drug agency and I am also doing a referral for employment and training support. There is a need to ensure that appointments are co-ordinated.  Alex is in receipt of benefits and reported just spending money on what he needs and needing help with budgeting.  He is able to do his washing and gets food from his aunt whom he gives £25 per fortnight.`,
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "10/10/2020",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Burglary<br>Sub category: Theft act, 1968<br>End of sentence date: 01/04/2021<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Bob Brown",
          firstName: "Bob",
          title: "Mr",
          gender: "Male",
          email: "bob.brown@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Home Trust",
            assignedCaseworker: "Liam Johnson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "01/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Safe Living Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
          {
            id: "3",
            name: "Independent living",
            providerName: "Home Trust",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: false,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              initialAssessmentScheduled: false,
              initialAssessmentDate: "N/A",
              initialAssessmentCompleted: false,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Helping Hands",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Robert Watkins",
          firstName: "Robert",
          title: "Mr",
          gender: "Male",
          email: "robert.watkins@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Mary Moore",
          firstName: "Mary",
          title: "Ms",
          gender: "Female",
          email: "mary.moore@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Ready to Go London",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Anthony Hughes",
          firstName: "Anthony",
          title: "Mr",
          gender: "Male",
          email: "anthony.hughes@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Better Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Fernando Willis",
          firstName: "Fernando",
          title: "Mr",
          gender: "Male",
          email: "fernando.willis@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Live Well",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: true,
              endOfServiceReportSubmitted: true
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Marion Clemmons",
          firstName: "Marion",
          title: "Ms",
          gender: "Female",
          email: "marion.clemmons@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Ross Gutierrez",
          firstName: "Ross",
          title: "Mr",
          gender: "Male",
          email: "ross.g@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Louis Wing",
          firstName: "Louis",
          title: "Mr",
          gender: "Male",
          email: "l.wing@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Richard Smith",
          firstName: "Richard",
          title: "Mr",
          gender: "Male",
          email: "rich@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Alma Pearson",
          firstName: "Alma",
          title: "Ms",
          gender: "Female",
          email: "alma.pearson@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: false,
              completed: false,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Natasha Mackey",
          firstName: "Natasha",
          title: "Ms",
          gender: "Female",
          email: "natasha@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              actionPlanDate: "07/10/2020",
              dateStarted: "05/10/2020",
              assigned: true,
              inProgress: true,
              initialAssessmentScheduled: true,
              initialAssessmentDate: "06/10/2020",
              initialAssessmentCompleted: true,
              awaitingPostSessionQuestionnaire: true,
              completed: true,
              endOfServiceReportSubmitted: false
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes: [
              { text: "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.", activities: [] },
              { text: "Service user secures early post-release engagement with community based services.", activities: [] }
            ],
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformationHTML: "N/A",
          },
        ],
      },
    ].map(createReferralWithoutInterventions),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
      {
        name: "Kelly Clarkson",
        firstName: "Kelly",
      },
      {
        name: "Samantha Jones",
        firstName: "Samantha",
      },
    ],
    notifications: [
      {
        date: "09/11/20",
        time: "12:43",
        type: "Service user absent from Session 2",
        serviceUser: "Macy Flem",
        priority: true,
        action: "review",
        unread: true,
        href: "cases/NR0005/interventions/0/sessions/0/absence-review",
      },
      {
        date: "09/11/20",
        time: "12:43",
        type: "Approve service user action plan",
        serviceUser: "Alex River",
        priority: true,
        action: "review",
        unread: true,
        href: "cases/NR0001/interventions/0/action-plan",
      },
      {
        date: "08/11/20",
        time: "10:12",
        type: "Attended Session 2",
        serviceUser: "Bob Brown",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "09:51",
        type: "Safeguarding issues identified",
        serviceUser: "Alex River",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "09:42",
        type: "Initial assessment completed",
        serviceUser: "Mary Moore",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "08/11/20",
        time: "11:02",
        type: "Safeguarding issues identified",
        serviceUser: "Robert Watkins",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "07/11/20",
        time: "16:10",
        type: "Did not attend initial assessment",
        serviceUser: "Macy Flem",
        priority: true,
        action: "view",
        unread: false,
        href: "#",
      },
      {
        date: "07/11/20",
        time: "15:23",
        type: "Approve end of service report",
        serviceUser: "Robert Watkins",
        priority: true,
        action: "review",
        href: "#",
      },
      {
        date: "07/11/20",
        time: "11:35",
        type: "Initial assessment completed",
        serviceUser: "Richard Smith",
        priority: false,
        action: "view",
        unread: false,
        href: "#",
      },
    ],
    findAnIntervention: [
      {
        title: "Accommodation",
        description: "Accommodation description",
        id: "0",
        selected: false,
        provider: "Harmony Living",
      },
      {
        title: "Social inclusion",
        description: "Social inclusion description",
        id: "1",
        selected: false,
        provider: "Harmony Living",
      },
      {
        title: "Employment",
        description: "Employment description",
        id: "2",
        selected: false,
        provider: "Harmony Living",
      },
    ],
  },
};

function createReferral(params, index) {
  return {
    reference: "NR" + (index + 1).toString().padStart(4, "0"),

    receivedAt: moment().subtract("1", "days").toDate(),

    relevantSentenceHTML:
      "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
    desiredOutcomes:
      "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
    requiredComplexityHTML:
      "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
    completionDateRequired: moment().add("2", "months").toDate(),
    maximumRARDays: "22",
    furtherInformation: "N/A",

    serviceUser: Object.assign(
      {
        name: "Alex River",
        firstName: "Alex",
        otherNames: "Shorty",
        gender: "Male",
        title: "Mr",
        addressHTML:
          "Flat 2<br>27 Test Walk<br>SY16 1AQ<br><br>Private rental</dd>",
        nationality: "British",
        ethnicGroup: "White: British",
        preferredLanguage: "English",
        sexuality: "Heterosexual",
        religionOrBelief: "None",
        disabilities: "Autism spectrum condition",
        email: "alex.river@gmail.com",
        phone: "07588 382 222",
        pncNumber: "2014/1234786A",
        crn: "D016868",
        nomisNumber: "0203394",
        risks: {
          OGRSScore: "50",
          RM2000Score: "Medium",
          ROSHAScore: "Medium",
          SARAScore: "Low",
          scoresInformation: "N/A",
        },
        needs: {
          criminogenicNeeds: [
            "Thinking and attitudes",
            "Relationships",
            "Accommodation",
          ],
          identifyNeeds: "N/A",
          otherNeeds: "N/A",
          interpreterNeeded: "No",
          languageNeeds: "English",
          responsibilities: "Yes",
          timesUnavailable: "N/A",
        },
      },
      params.serviceUser
    ),

    probationPractitioner: Object.assign(
      {
        name: "Jessica Reel",
        phone: "01909 234 567",
        email: "j.reel@justice.gov.uk",
        addressHTML: "44 Bouverie Road<br>Weston Lullingfields<br>SY4 0RE",
      },
      params.probationPractitioner
    ),

    interventions: [
      {
        id: "0",
        name: "Accommodation",
        actionPlanSubmitted: false,
        actionPlanApproved: false,
        assigned: false,
        goals: [],
        sessions: [],
        relevantSentenceHTML:
          "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
        desiredOutcomes:
          "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
        requiredComplexityHTML:
          "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
        completionDateRequired: moment().add("2", "months").toDate(),
        maximumRARDays: "22",
        furtherInformation: "N/A",
      },
      {
        id: "1",
        name: "Social inclusion",
        actionPlanSubmitted: false,
        actionPlanApproved: false,
        assigned: false,
        goals: [],
        sessions: [],
        relevantSentenceHTML:
          "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
        desiredOutcomes:
          "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
        requiredComplexityHTML:
          "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
        completionDateRequired: moment().add("2", "months").toDate(),
        maximumRARDays: "22",
        furtherInformation: "N/A",
      },
    ],
  };
}

function createReferralWithoutInterventions(params, index) {
  return {
    reference: "NR" + (index + 1).toString().padStart(4, "0"),

    receivedAt: moment().subtract("1", "days").toDate(),

    serviceUser: Object.assign(
      {
        name: "Alex River",
        firstName: "Alex",
        otherNames: "Shorty",
        gender: "Male",
        title: "Mr",
        dateOfBirth: "03/05/1984",
        addressHTML:
          "Flat 2<br>27 Test Walk<br>SY16 1AQ<br><br>Private rental</dd>",
        nationality: "British",
        ethnicGroup: "White: British",
        preferredLanguage: "English",
        sexuality: "Heterosexual",
        religionOrBelief: "None",
        disabilities: "Autism spectrum condition",
        email: "alex.river@gmail.com",
        phone: "07588 382 222",
        pncNumber: "2014/1234786A",
        crn: "D016868",
        nomisNumber: "0203394",
        risks: {
          OGRSScore: "50",
          RM2000Score: "Medium",
          ROSHAScore: "Medium",
          SARAScore: "Low",
          scoresInformation: "N/A",
        },
        needs: {
          criminogenicNeeds: [
            "Accommodation",
            "Social inclusion"
          ],
          identifyNeedsHTML: `
            Alex has been rough sleeping and sofa surfing for the past two years, following the breakdown of his long-term relationship due to his substance misuse and failure to contribute financially to living expenses.  Following his last stint in prison (12 months ago) he shared that he was determined to address his substance misuse and was able to abstain during his sentence, however on release having no accommodation he resumed association with peers and fell back into chaotic substance misuse, resulting in his current conviction for Burglary.
            <br><br>
            For the past three weeks Alex has been staying in the garage of his aunt’s home as she is unable to accommodate him in her home due to being fearful of his associates or that he may steal from her. His aunt has supported him to get help and Alex has reported making contact with the local drug treatment agency which he has been attending during the current court matter. He also reported that he is trying to stay away from his peers as they ‘get him into trouble’.
            <br><br>
            Having lived at the family home prior to moving in with his ex-partner Alex has never had accommodation of his own. In addition to needing somewhere to live Alex is likely to benefit from independent living and tenancy sustainment skills.
          `,
          otherNeeds: "N/A",
          interpreterNeeded: "No",
          languageNeeds: "English",
          responsibilities: "No",
          timesUnavailable: "N/A",
        },
      },
      params.serviceUser
    ),
    interventions: params.interventions,
    probationPractitioner: Object.assign(
      {
        name: "Jessica Reel",
        phone: "01909 234 567",
        email: "j.reel@justice.gov.uk",
        team: "OMU Team1",
        addressHTML: "44 Bouverie Road<br>Weston Lullingfields<br>SY4 0RE",
      },
      params.probationPractitioner
    ),
  };
}
