const doc = require("../spreadsheet");

const getReports = async (req, res) => {
  const sheet = doc.sheetsByIndex[1];
  const rows = await sheet.getRows({
    offset: 0,
    limit: 1000,
  });
  const result = rows.map((row) => {
    return row.toObject();
  });
  return res.send(JSON.stringify({ data: result }));
};

const getReport = async (req, res) => {
  try {
    const reportUUID = req.params.id;

    const sheet = doc.sheetsByIndex[1];
    const rows = await sheet.getRows({
      offset: 0,
      limit: 1000,
    });
    const result = rows
      .map((row) => {
        return row.toObject();
      })
      .find((row) => row.post_id === reportUUID);
    return res.send(JSON.stringify({ data: result }));
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getReports, getReport };
