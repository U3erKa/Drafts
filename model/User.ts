import pg from 'pg';
import { mapUsers } from '../utils.js';
import type { User as UserType } from '../types';

export default class User {
  public static _client: pg.Client;
  private static _tableName = 'users';

  static async bulkCreate(users: UserType[]) {
    const { rows } = await this._client.query(`
INSERT INTO users
(first_name, last_name, email, password, phone_num,
birthday, is_male, height, weight)
VALUES
${mapUsers(users)}
RETURNING *;
`);
    return rows;
  }
}
