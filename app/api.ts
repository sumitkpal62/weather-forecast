const axios = require('axios');

export const fetchGeolocation = async (offset_value: number, search: string) => { 
  const GEOLOCATION_URL = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records';
  try {
    const response = await axios.get(GEOLOCATION_URL, {
      
      headers: {
        'Content-Type': 'application/json',
      },
      params:{
        limit: 20,
        timezone: 'UTC',
        include_links: false,
        offset: offset_value,
        include_app_metas: false,
        where: `name LIKE '${search}*'`,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
