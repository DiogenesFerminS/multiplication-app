import { CreateTable } from "../domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../domain/use-cases/save-file.use-case.js";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    destination: string;
}

export class ServerApp {
    static async run({base, limit, showTable, fileName, destination}: RunOptions) {
        console.log('Server running...');
        
        const table = new CreateTable().execute({base, limit})
        const wasSaved = await new SaveFile().execute({fileContent: table, fileName, destination})
        showTable && console.log(table);

        wasSaved ? console.log('Archivo guardado') : console.error('Fallo al guardar el archivo');
    }
}