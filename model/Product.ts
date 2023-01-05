import pg from 'pg';
import { TableNames } from '../constants.js';
import { mapProducts } from '../utils.js';

export default class Product {
  public static _client: pg.Client;
  private static _tableName = TableNames.PRODUCTS;

  static async bulkCreate(numberOfProducts?: number) {
    const { rows } = await this._client.query(`-- sql
    INSERT INTO ${this._tableName} (
      "name", "price", "quantity", "category", "manufacturer"
    )
    VALUES ${mapProducts(numberOfProducts)}
    RETURNING *;
`);

    return rows;
  }
}
