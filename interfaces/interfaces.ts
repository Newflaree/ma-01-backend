export interface ApiPath {		
	auth: string;
	users: string;
} 

export interface UserProps {
	name: string;
	email: string;
	password: string;
	img?: string;
	role: string;
	status: boolean;
}
