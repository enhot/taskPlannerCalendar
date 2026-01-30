export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegistr extends IUserLogin{
    id?: string;        
    name: string;      
    photoURL?: string;
    createdAt: number;
}