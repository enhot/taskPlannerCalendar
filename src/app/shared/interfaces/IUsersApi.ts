
type UID = string;
export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegistr extends IUserLogin{
    name: string;
    photoURL?: string;
}

export interface IUser{
    uid: UID;
    email: string;
    name: string;
    photoURL?: string;
    createdAt: number;
}