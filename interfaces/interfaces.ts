import { User } from '../models';

export interface ApiPaths {		
	auth: string;
	users: string;
	categories: string;
} 

export interface UserProps {
	name: string;
	email: string;
	password: string;
	img?: string;
	role: string;
	status: boolean;
}

export interface CategoryProps {
	name: string;
	status: boolean;
	user: UserProps;
}
