module.exports = {
  probationPractitioners: [
    {
      referralNumber: "NR0001",
      name: "Josie Bart",
    },
    {
      referralNumber: "NR0002",
      name: "Emma Thompson",
    },
    {
      referralNumber: "NR0003",
      name: "Rosie Palma",
    },
    {
      referralNumber: "NR0004",
      name: "Richard Step",
    },
  ],
  serviceUsers: [
    {
      personalDetails: {
        otherNames: "Shorty",
        address: {
          line1: "Flat 2",
          line2: "27 Test Walk",
          city: "London",
          postcode: "SY16 1AQ",
          type: "Private rental",
        },
        nationality: "British",
        ethnicGroup: "White British",
        preferredLanguage: "English",
        sexualOrientation: "Heterosexual",
        religion: "None",
        disabilities: "Autism spectrum condition",
      },
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
      responsibleOfficer: {
        fullName: "Adam Michaels",
        email: "Adam.Michaels@justice.gov.uk",
        address: {
          line1: "44 Bouverie Road",
          city: "Weston Lullingfields",
          postcode: "SY4 0RE",
        },
      },
      interventions: [
        {
          name: "accommodation",

          sentence: {
            category: "Misuse of Drugs Act 1971 s.4(3)",
            subcategory: "Misuse of Drugs Act 1971 s.5(3)",
            date: "01/01/2020",
            order: "Suspended sentence",
          },
          desiredOutcomes:
            "Service user is helped to secure social or supported housing",
          requiredComplexity: {
            type: "Low complexity",
            description:
              "Service user has some capacity and means to secure and/or maintain suitable accommodation but requires some support and guidance to do so.",
          },
          completionDate: "10/01/2021",
          maxRARDays: "10",
          furtherInformation: "N/A",
        },
        {
          name: "social inclusion",

          sentence: {
            category: "Misuse of Drugs Act 1971 s.4(3)",
            subcategory: "Misuse of Drugs Act 1971 s.5(3)",
            date: "01/01/2020",
            order: "Suspended sentence",
          },
          desiredOutcomes:
            "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
          requiredComplexity: {
            type: "Low complexity",
            description:
              "[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
          },
          completionDate: "10/01/2021",
          maxRARDays: "22",
          furtherInformation: "N/A",
        },
        {
          name: "accommodation",

          sentence: {
            category: "Misuse of Drugs Act 1971 s.4(3)",
            subcategory: "Misuse of Drugs Act 1971 s.5(3)",
            date: "01/01/2020",
            order: "Suspended sentence",
          },
          desiredOutcomes:
            "Service user is helped to secure social or supported housing",
          requiredComplexity: {
            type: "Low complexity",
            description:
              "Service user has some capacity and means to secure and/or maintain suitable accommodation but requires some support and guidance to do so.",
          },
          completionDate: "10/01/2021",
          maxRARDays: "10",
          furtherInformation: "N/A",
        },
      ],
    },
  ],
  caseworkers: [
    {
      name: "Liam Johnson",
    },
    {
      name: "Jenny Thompson",
    },
  ],
};
