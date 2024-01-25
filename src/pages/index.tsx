import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Map from "@/components/Map";

import styles from "@/styles/Home.module.scss";

import countriesData from "@/data/countries.json";
import { fetchCountryInfo } from "@/services/graphql";

interface AdditionalInfo {
  capital?: string;
  continent?: {
    name?: string;
  };
  currency?: string;
  emoji?: string;
  phone?: string;
}

interface Country {
  Country: string;
  "ISO Code": string;
  Latitude: number;
  Longitude: number;
  additionalInfo?: AdditionalInfo;
}

export default function Home({updatedCountries}: Readonly<{updatedCountries: []}>): JSX.Element {
  const countries: Country[] = updatedCountries;
  if (!countries.length) {
    return (
      <Section>
          <h3 className={styles.title}>Something went wrong, please reload the page...</h3>
      </Section>
    ) 
  }

  const mapCenter: [number, number] = [countries[0].Latitude, countries[0].Longitude]

  return (
    <Layout>
      <Section>
        <Container>
          <h1 className={styles.title}>Countries Viewer</h1>

          <Map
            className={styles.homeMap}
            width={800}
            height={400}
            center={mapCenter}
            zoom={3}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                />

                {countries.map((country, index) => (
                  <Marker
                    key={index}
                    position={[country.Latitude, country.Longitude]}
                  >
                    <Popup>
                      <strong>{country.Country}{" "}{country.additionalInfo?.emoji || ""}</strong>
                      <br />
                      Capital: {country.additionalInfo?.capital || "N/A"}
                      <br />
                      Currency: {country.additionalInfo?.currency || "N/A"}
                      <br />
                      Continent: {country.additionalInfo?.continent?.name || "N/A"}
                      <br />
                      Phone Code: {country.additionalInfo?.phone || "N/A"}
                    </Popup>
                  </Marker>
                ))}
                
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const updatedCountries: any = await Promise.all(
      countriesData.map(async (country) => {
        const additionalInfo = await fetchCountryInfo(country["ISO Code"]);
        return { ...country, additionalInfo };
      })
    );
    return {
      props: {
        updatedCountries
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}
