import axios from "axios";

export const getCurrenty = async ({ to, from, amount }) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "{API-KEY}");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const request = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return request;
};
