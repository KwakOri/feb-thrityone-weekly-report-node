const doc = require("../spreadsheet");

const sendWeeklyReports = async (req, res) => {
  try {
    const batchSize = 50; // 한 번에 처리할 최대 요청 수
    const delay = 5000; // 각 배치 간 간격 (밀리초)
    let completedRequests = 0;

    const sheet = doc.sheetsByIndex[1];
    const rows = await sheet.getRows({
      offset: 0,
      limit: 1000,
    });
    const reports = rows.map((row) => {
      return row.toObject();
    });
    console.log("length => ", reports.length);

    for (let i = 0; i < reports.length; i += batchSize) {
      const batch = reports.slice(i, i + batchSize);
      console.log(`current range: ${i + 1} ~ ${i + batchSize - 1}`);

      // 배치 처리
      await Promise.all(
        batch.map(async (report) => {
          try {
            // 비동기 처리

            completedRequests++;
            console.log(`send report [${report.post_id}] successfully`);

            // sendProgressToClient(); // 진행률 업데이트
          } catch (error) {
            console.error(`Error processing request:`, error);
          }
        })
      );

      // 다음 배치 전 대기
      if (i + batchSize < reports.length) {
        console.log(`Waiting for ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    console.log("DONE!");

    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  sendWeeklyReports,
};
