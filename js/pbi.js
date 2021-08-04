let pagesTest;
// useless async here
async function start() {
    // useless await here
    pagesTest = await report.getPages();
    return await myfunction();
  }

alert(pagesTest);