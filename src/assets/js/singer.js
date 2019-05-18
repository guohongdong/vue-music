export default class Singer {
  constructor({ id, name }) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}

/**
 * 创建歌手对象
 *
 * @export
 * @param {*} singer
 * @returns
 */
export function createSinger(singer) {
  return new Singer({
    id: singer.id,
    name: singer.name
  })
}
