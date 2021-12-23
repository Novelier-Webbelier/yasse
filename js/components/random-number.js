export function randomNumber(maxNumber) {
  return Math.random() * maxNumber;
}

export function randomNumberInRange(minNumber, maxNumber) {
  return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}

export function randomBool() {
  return Boolean(Math.round(Math.random()));
};

export function percent(percent) {
  let percentNum = Math.floor(randomNumber(100))

  if (percentNum < percent) {
    return true
  } else if (percentNum >= percent) {
    return false
  }
}

export function randomYasseSpan(percentNumber) {
  const yasseSpansList = ['Y', 'A', 'S', 'S', 'E'];
  let returnYasse = '';
  let today = new Date();
  let dateList = [today.getMonth(), today.getDate()];
  let percentBool = percent(percentNumber);

  if (dateList[0] === 1 && dateList[1] === 11) {
    return 'MY BIRTH DAY!!!!!!';
  } if (dateList[0] === 1 && dateList[1] === 1) {
    return 'HAPPY NEW YEAR!!!!!!';
  } else if (dateList[0] === 12 && dateList[1] === 25) {
    return 'HAPPY CHRISTMAS!!!!!!';
  } else if (percentBool) {
    for (let i = 0; i < 3; i++) {
      let index = Math.floor(randomNumber(yasseSpansList.length + 1));
      yasseSpansList.splice(index, 0, '!');
    }

    for (let i = 0; i < yasseSpansList.length; i++) {
      returnYasse += yasseSpansList[i];
    }
    return returnYasse;

  } else {
    return 'YASSE!!!';
  }
};
