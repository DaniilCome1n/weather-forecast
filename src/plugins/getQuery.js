function getQuery(object) {
  if (!object) {
    return "";
  }
  const keys = Object.keys(object);
  let resultString = [];
  keys.map((key) => {
    if (object[key] !== "") {
      resultString.push(`${key}=${object[key]}`);
    }
  });
  return resultString.join("&");
}

export default getQuery;
