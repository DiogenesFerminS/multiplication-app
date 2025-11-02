interface CreateTableOptions {
    base: number;
    limit?: number;
}

interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {}

    execute({base, limit = 10} : CreateTableOptions) {
        let template = `
            =========================
                  Tabla del ${base}
            =========================
        `;

        for(let i = 1; i <= limit; i++) {
            let multiple = `
            ${base} * ${i} = ${base * i}
            `;
            template = template + multiple;
        }

        return template
    }
}