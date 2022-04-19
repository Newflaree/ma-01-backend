import { Request, Response } from "express";

export const authRegister = async( req: Request, res: Response ) => {
	res.json({
		ok: true,
		msg: 'User registered'
	});
}
