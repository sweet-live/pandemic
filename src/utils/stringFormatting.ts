const getResultNumber: any = (result: String) => {
  const numbers = "0123456789$";
  var resultingstring = "";
  result.split("").forEach((element) => {
    if (numbers.includes(element)) {
      resultingstring = resultingstring + element;
    }
  });
  return resultingstring;
};

const getResultText: any = (result: String) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz ";
  var resultingstring = "";
  result.split("").forEach((element) => {
    if (alpha.includes(element)) {
      resultingstring = resultingstring + element;
    }
  });
  return resultingstring;
};

const secondsToString: any = (timeLeft: number) => {
  var hrs = ~~(timeLeft / 3600);
  var mins = ~~((timeLeft % 3600) / 60);
  var secs = ~~timeLeft % 60;

  var string = hrs + "h " + mins + "m " + secs + "s";

  return string;
};

const formatPrice: any = (price: number) => {
  var i = 0;
  var neededString = "";
  String(price)
    .split("")
    .reverse()
    .forEach((element) => {
      if (i == 3) {
        neededString = neededString + "," + element;
        i = 1;
      } else {
        neededString = neededString + element;
        i = i + 1;
      }
    });
  console.log((neededString + "$").split("").reverse().join(""));
  return (neededString + "$").split("").reverse().join("");
};

export { getResultNumber, getResultText, secondsToString, formatPrice };
