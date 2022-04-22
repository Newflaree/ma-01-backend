import { Request } from 'express';

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
	code: string;
	status: boolean;
	img?: string;
	user: UserProps;
}

export interface UserAuthRequest extends Request {
  user?: any;
}
