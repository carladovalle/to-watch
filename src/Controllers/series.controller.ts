import { Request, Response } from "express";
import { connection } from "../Config/database.js";

export interface Serie{
  id: number,
  name: string,
  platform: string,
  genre: string,
  status: string,
  note: string,
}

export async function addSerie (req: Request, res: Response) {

  const { id, name, platform, genre, status, note } = req.body;

  try {

    await connection.query<Serie>(
      `INSERT INTO series (id, name, platform, genre, status, note) VALUES ($1, $2, $3, $4, $5, $6);`, [id, name, platform, genre, status, note]
    );

  } catch (error) {
    return res.send(error.message);
}

  res.sendStatus(201);

}

export async function viewSerie (req: Request, res: Response) {

    const list =  await connection.query<Serie>(
      `SELECT * FROM series;`
    );

    res.send(list.rows);

}

export async function updateSerie (req: Request, res: Response) {

  const { note } = req.body;
  
  const { id } = req.params;

  try {
  
    await connection.query<Serie>(
      `UPDATE series SET note = $1 WHERE id = $2;`, [note, id]
    );
  
  } catch (error) {
    return res.send(error.message);
  }
  
  res.sendStatus(201);
  
}