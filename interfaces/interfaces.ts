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

export interface UserAuthRequest extends Request {
  user?: any;
}

export interface CategoryProps {
	name: string;
	code: string;
	status: boolean;
	img?: string;
	user: UserProps;
}

export interface ExerciseProps {
	code: string;
	status: boolean;
	user: UserProps;
	category: CategoryProps;
	desc: string;
	a: string;
	b: string;
	c: string;
	d: string;
	e: string;
	correctAlt: string;
}
