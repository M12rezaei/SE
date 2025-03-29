const db = require('../services/db');
const { Programme } = require('./programmes');

async function getAllProgrammes() {
    var sql = "SELECT * FROM Programmes"
    const results = await db.query(sql);
    var rows = [];
    for (var row of results) {
        // Use our Programme class to neatly format the object going to the template
        var prog = new Programme(row.id, row.name);
        await prog.getProgrammeName();
        rows.push(prog);
    }
    return rows;
}
module.exports = {
    getAllProgrammes,
}