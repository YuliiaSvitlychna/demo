import { MigrationInterface, QueryRunner } from 'typeorm';

export class Posts1737060644364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "public"."post" (
        "title" character varying NOT NULL,
        "body" character varying NOT NULL,
        "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
        "authorId" uuid,
        CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
      ) WITH (oids = false);
    `);

    await queryRunner.query(`
      ALTER TABLE ONLY "public"."post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") 
      REFERENCES "user"(id) ON UPDATE SET NULL ON DELETE SET NULL NOT DEFERRABLE;
    `);

    await queryRunner.query(`
      INSERT INTO "post" ("title", "body", "id", "authorId") VALUES
        ('Hello wold',	'lorem ipsum-1',	'1822d846-187c-4ef2-b8d3-3369f41914cf',	'dab84833-b360-46de-81f5-7182fcb0a26f'),
        ('Hello wold',	'lorem ipsum-2',	'6b451fc7-c454-4376-b60f-050fd240d606',	'dab84833-b360-46de-81f5-7182fcb0a26f');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "post";`);
  }
}
