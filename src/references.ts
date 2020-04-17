import { Reference } from "./types";

// Records should be added here to be indexed / made searchable
const references: Array<Reference> = [
  {
    collection: 'classifiedIncidents',
    type: 'incidents',
    index: 'incidents',
    exclude: ["whois", "similarity"],
    mappings: {
      score: {
        type: "long"
      }
    }
  },

]

export default references;
