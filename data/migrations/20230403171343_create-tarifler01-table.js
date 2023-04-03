/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tarifler", (tbl) => {
      tbl.increments("tarif_id");
      tbl.string("tarif_adi").notNullable().unique();
      tbl.timestamp("kayit_tarihi").defaultTo(knex.fn.now);
    })
    .createTable("adimlar", (tbl) => {
      tbl.increments("adim_id");
      tbl.integer("adim_sirasi").unsigned().notNullable();
      tbl.string("adim_talimati").notNullable();
      tbl
        .integer("tarif_id")
        .unsigned()
        .notNullable()
        .references("tarif_id")
        .inTable("tarifler")
        .onDelete("CASCADE");
    })
    .createTable("icindekiler", (tbl) => {
      tbl.increments("icindekiler_id");
      tbl.string("icindekiler_adi");
      tbl.integer("miktar");
    })
    .createTable("icindekiler_adimlar", (tbl) => {
      tbl.increments("icindekiler_adimlar_id");
      tbl
        .integer("icindekiler_id")
        .references("icindekiler_id")
        .inTable("icindekiler")
        .onDelete("CASCADE");
      tbl
        .integer("adimlar_id")
        .references("adimlar_id")
        .inTable("adimlar")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("icindekiler_adimlar")
    .dropTableIfExists("icindekiler")
    .dropTableIfExists("adimlar")
    .dropTableIfExists("tarifler");
};
