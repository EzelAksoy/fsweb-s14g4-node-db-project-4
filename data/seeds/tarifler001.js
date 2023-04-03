/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("tarifler").insert({
    tarif_adi: "Spagetti Bolonez",
  });
  await knex("adimlar").insert([
    {
      adim_id: 11,
      adim_sirasi: 1,
      adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
    },
    {
      adim_id: 12,
      adim_sirasi: 2,
      adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
    },
  ]);
  await knex("icindekiler").insert({
    icindekiler_adi: "zeytinyağı",
    miktar: 0.014,
  });
  await knex("icindekiler_adimlar").insert([
    { icindekiler_id: 1, adim_id: 11 },
    { icindekiler_id: 1, adim_id: 12 },
  ]);
};
