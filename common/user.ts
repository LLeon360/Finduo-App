export interface UserData {
    _id: string;
	username: string;
    email: string;
    password: string;

    friends?: string[];
}