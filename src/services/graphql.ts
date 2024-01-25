import { request, gql } from "graphql-request";

const API_ENDPOINT = "https://countries.trevorblades.com/";

interface CountryInfo {
  capital: string;
  continent: {
    name: string;
  };
  currency: string;
  emoji: string;
  phone: string;
}

export const fetchCountryInfo = async (isoCode: string): Promise<CountryInfo | null> => {
  const query = gql`
    query GetCountryInfo($isoCode: ID!) {
      country(code: $isoCode) {
        capital
        continent {
          name
        }
        currency
        emoji
        phone
      }
    }
  `;

  const variables = { isoCode };

  try {
    const data = await request(API_ENDPOINT, query, variables) as any;
    return data.country as CountryInfo;
  } catch (error) {
    console.error("Error fetching country info:", error);
    return null;
  }
};
