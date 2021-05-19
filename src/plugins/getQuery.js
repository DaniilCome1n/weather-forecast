function getQuery(object) {
  const keys = Object.keys(object);
  let resultString = [];
  if (keys.length !== 0) {
    keys.map((key) => {
      if (object[key] !== "") {
        resultString.push(`${key}=${object[key]}`);
      }
    });
  }
  return resultString.join("&");
}

export default getQuery;
