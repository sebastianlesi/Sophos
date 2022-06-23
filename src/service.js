import axios from "axios";

export const getCurrenty = async ({ to, from, amount }) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "YtqS2H9otW6huMEfsjvAsb0rDUlKJy69");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  let resultRequest = "";
  const request = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => resultRequest=result)
    .catch((error) => console.log("error", error));

  return resultRequest;
};
