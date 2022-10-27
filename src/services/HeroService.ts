import { AppDataSource } from "../data-source";
import { Hero } from "../models/interfaces/HeroInterface";

/**
 * Le role du service est d'aller chercher les données,
 * pour les mettre à disposition de controlleur.
 */
export class HeroService {
  getAllHeros(): Promise<Hero[]> {
    return AppDataSource.query(`SELECT * FROM hero;`);
  }

  getOneHeroById(id: number): Promise<Hero> {
    console.log(id);
    return AppDataSource.query(`SELECT name FROM hero where id=${id}`);
  }

  createNewHero(newHero: Hero): Promise<any> {
    console.log(newHero);
    console.log(newHero.name);
    return AppDataSource.query(
      `insert into hero (name, power, life) values ('${newHero.name}', ${newHero.power}, ${newHero.life})`
    );
  }

  updateOneHero(id: number, changes: Hero): Promise<any> {
    console.log(id);
    console.log(changes);
    return AppDataSource.query(
      `UPDATE hero SET name = '${changes.name}', power = ${changes.power}, life = ${changes.life} where id =${id}`
    );
  }

  deleteOneHero(id: number): Promise<any> {
    console.log(id);
    return AppDataSource.query(`DELETE FROM hero where id=${id}`);
  }
}
