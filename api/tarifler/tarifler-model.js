const db = require("../../data/db-config");

const icindekileriGetir = async function (adim_id) {
  const icindekiler = await db("icindekiler_adimlar as ia")
    .leftJoin("icindekiler as i", "ia.icindekiler_id", "i.icindekiler_id")
    .select("i*")
    .where("adim_id", adim_id);
  return icindekiler;
};

const idyeGoreGetir = async function (tarif_id) {};

module.exports = {
  icindekileriGetir,
  idyeGoreGetir,
};
