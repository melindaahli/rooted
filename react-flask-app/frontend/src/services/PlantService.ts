import axios from 'axios';

const API_URL = 'https://127.0.0.1';

// export const fetchData = async (endpoint) => {
//     try {
//         const response = await axios.get('${API_URL}/${endpoint}');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching plant data:', error);
//         throw error;
//     }
// }

async function getAll() {
    const endpoint = '/api/data';
    try {
        const result = await axios.get(endpoint);
        return result.data || [];
    } catch (error) {
        console.error('Error fetching plant data: ', error);
        throw error;
    }
}

export const PlantService = {
    getAll
};