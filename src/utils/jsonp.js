import OriginJsonp from "jsonp";

/**
 * 对 jsonp 库进行封装,返回 Promise
 *
 * @export
 * @param {*} url
 * @param {*} data
 * @param {*} options
 * @returns
 */
export default function jsonp(url, data, options) {
  return new Promise((resolve, reject) => {
    url += (url.indexOf("?") !== -1 ? "&" : "?") + buildUrl(data);
    OriginJsonp(url, options, (err, res) => {
      if (!err) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  });
}
/**
 * 拼接 url 参数
 *
 * @param {*} data
 */
function buildUrl(data) {
  let url = "";
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : "";
    url += `&${k}=${encodeURIComponent(value)}`;
    return url ? url.substring(1) : "";
  }
}
