const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  const desiredResult = record.find(({ result }) => result === 'W');
  return (desiredResult ? desiredResult.year : undefined);
};
