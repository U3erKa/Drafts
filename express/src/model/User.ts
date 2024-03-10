import pg from 'pg';
import { mapUsers } from '../utils.js';
import { TableNames } from '../constants.js';
import type { User as UserType } from '../types.js';

export default class User {
  public static _client: pg.Client;
  private static _tableName = TableNames.USERS;

  public static async bulkCreate(users: UserType[]) {
    const { rows } = await this._client.query(`-- sql
    INSERT INTO ${this._tableName} (
      first_name, last_name, email, password, phone_num, birthday, is_male, height, weight
    )
    VALUES ${mapUsers(users)}
    RETURNING *;
`);
    return rows;
  }
}
