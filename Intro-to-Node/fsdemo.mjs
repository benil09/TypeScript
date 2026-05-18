import { name } from 'ejs';
import {readFile} from 'fs/promises';

const filePath = new URL('./index.html', import.meta.url);
const file = await  readFile(filePath,{encoding: 'utf-8'});
console.log(file);


const data = {
    title : "My Page",
    name : "John Doe"
}

