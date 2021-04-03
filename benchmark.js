module.exports = async function (context, commands) {
  await commands.navigate('https://react-benchmark.netlify.app');

  try {
    await commands.measure.start();

    // await commands.addText.bySelector('da', '.search-input');

    // await commands.click.bySelectorAndWait('.search-input__button');

    return commands.measure.stop();
  } catch (e) {
    throw e;
  }
};
