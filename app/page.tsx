'use client'
import { useState, useEffect } from "react";
import { fetchGeolocation } from "./api";

interface GeolocationItem {
  geoname_id: string;
  name: string;
  ascii_name: string;
  alternate_names: string[];
  label_en: string;
  country_code: string;
  timezone: string;
  population: number;
  coordinates: {
    lat: number;
    lon: number;
  };
}


export default function Home() {
  const [data, setData] = useState<GeolocationItem[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    fetchGeolocation(offset).then((response) => {
      setData((prevData) => [...prevData, ...response?.results]);
    })
  }, [offset])



  const handleOnScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setOffset((prevOffset) => prevOffset + 200);
    }
  }

  return (
    <div className="border border-black m-2">
      <div className="h-[85vh] overflow-x-auto" onScroll={handleOnScroll}>
        <table className="min-w-full">
          <thead className="sticky top-0 bg-gray-100 border-b-2 border-black">
            <tr>
              <th className="px-4 py-2">Geoname ID</th>
              <th className="px-4 py-2">City Name</th>
              <th className="px-4 py-2">Ascii name</th>
              <th className="px-4 py-2">Alternate names</th>
              <th className="px-4 py-2">Country Name</th>
              <th className="px-4 py-2">Country Code</th>
              <th className="px-4 py-2">TimeZone</th>
              <th className="px-4 py-2">Population</th>
              <th className="px-4 py-2">Latitude</th>
              <th className="px-4 py-2">Longitude</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: GeolocationItem, index: number) => (
              <tr key={index}>
                <td>{item?.geoname_id}</td>
                <td>{item?.name}</td>
                <td>{item?.ascii_name}</td>
                <td>{item?.alternate_names ? item.alternate_names.slice(0, 3).join(',') : ''}</td>
                <td>{item?.label_en}</td>
                <td>{item?.country_code}</td>
                <td>{item?.timezone}</td>
                <td>{item?.population}</td>
                <td>{item?.coordinates?.lat}</td>
                <td>{item?.coordinates?.lon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
