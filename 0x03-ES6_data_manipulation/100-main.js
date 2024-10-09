import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };

try {
    queryAPI(endpoint);
    console.log(weakMap.get(`${endpoint.protocol}://${endpoint.name}`)); // Should print 1
    queryAPI(endpoint);
    console.log(weakMap.get(`${endpoint.protocol}://${endpoint.name}`)); // Should print 2
    queryAPI(endpoint);
    console.log(weakMap.get(`${endpoint.protocol}://${endpoint.name}`)); // Should print 3
    queryAPI(endpoint);
    console.log(weakMap.get(`${endpoint.protocol}://${endpoint.name}`)); // Should print 4
    queryAPI(endpoint); // Should throw an error
} catch (error) {
    console.error(error.message);
}
