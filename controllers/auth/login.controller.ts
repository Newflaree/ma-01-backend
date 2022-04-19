import { Request, Response } from "express";

export const authLogin = async( req: Request, res: Response ) => {
	res.json({
		ok: true,
		msg: 'Login success'
	});
}
