import fs from 'fs/promises';

interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

interface SaveFileUseCase {
    execute: (options: Options) => Promise<boolean>;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {}

    async execute({
        fileContent, 
        destination = 'outputs', 
        fileName = 'tabla'} : Options) {
        await fs.mkdir(destination, { recursive: true });
        try {
            await fs.writeFile(`${destination}/${fileName}.txt` , fileContent);
            return true
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

