const config = {
  "property": {
    "streetAddress": "505 Main Street ",
    "city": "NaN",
    "cityStateZip": "NaN, K0G 1N0",
    "heroSubtitle": "Boyd Block! Vintage charm in the heart of Merrickville. Waterfront living in a charming town. Register to receive the full info package, virtual tour, floor plans, and comparables.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/048250db9d358e6c7c9cbac1c251d52b53e624ead032a9b0237e8cbf324f9dd6/9_web_or_mls_DSC09806.jpg"
  },
  "realtor": {
    "fullName": "Trevor Beaudry",
    "title": "REALTOR®",
    "phone": null,
    "email": "trevor@driscollpeca.com",
    "bio": "",
    "photoUrl": null,
    "social": {
      "facebook": null,
      "instagram": null,
      "website": null
    }
  },
  "brokerage": {
    "name": null,
    "logoUrl": null,
    "address": ""
  },
  "openHouse": {
    "eventDate": "2025-10-26",
    "bundleItems": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Architectural Floor Plan"
      },
      {
        "icon": "fas fa-star",
        "text": "Neighbourhood Guide"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "Market Stats"
      },
      {
        "icon": "fas fa-car",
        "text": "School District Information"
      },
      {
        "icon": "fas fa-key",
        "text": "Financing Resources"
      },
      {
        "icon": "fas fa-home",
        "text": "Utility Cost Estimates"
      },
      {
        "icon": "fas fa-map-location-dot",
        "text": "Property Feature List"
      },
      {
        "icon": "fas fa-image",
        "text": "Home Inspection Tips"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Trevor Beaudry Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": null
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-311",
    "repoUrl": "https://github.com/arslvn93/Open-House-311",
    "tag": "Open House 505 Main Street",
    "netlifyUrl": null,
    "siteId": "6f88c26d-0fed-49cc-a318-3d482d46f2a0"
  }
};