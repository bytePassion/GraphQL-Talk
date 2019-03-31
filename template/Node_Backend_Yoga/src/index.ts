import { DataService } from 'dataService';
import { DataGenerator } from 'data-generator';

const dataGenerator = new DataGenerator();
const dataService = new DataService(dataGenerator);

console.log(`Server has ${dataService.getAllPosts().length} posts`);