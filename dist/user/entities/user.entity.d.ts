export declare class User {
    id: string;
    nome: string;
    email: string;
    password: string;
    status: boolean;
    confirmationToken: string;
    salt: string;
    createAt: Date;
    updateAt: Date;
    checkPassword(password: string): Promise<boolean>;
}
