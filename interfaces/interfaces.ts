import { Request } from 'express';

export interface ApiPaths {		
	auth: string;
	categories: string;
	exercises: string;
	users: string;
} 

export interface UserAuthRequest extends Request {
  user?: any;
}

export interface UserProps {
	email: string;
	name: string;
	password: string;
	img?: string;
	role: string;
	status: boolean;
}

export interface CategoryProps {
	code: string;
	name: string;
	img?: string;
	status: boolean;
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
