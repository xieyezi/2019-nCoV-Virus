import axios from 'axios'
const APIKEY = '964dc226dd5b57e892e6199735b6c55f'
// 获取疫情实时数据
export function getVirusDataOnTime() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/ncov/index?key=${APIKEY}`
  })
}
// 获取疫情统计数据
export function getVirusDataStatic() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/ncovcity/index?key=${APIKEY}`
  })
}

// 获取疫情统计数据
export function getRumor() {
  return axios({
    method: 'get',
    url: `http://api.tianapi.com/txapi/rumour/index?key=${APIKEY}`
  })
}

// 获取地图json文件
export function getChinaJson() {
  return axios({
    method: 'get',
    url: `../map/china.json`
  })
}
// 获取地图json文件
export function getProvinceJson(pinyinName) {
  return axios({
    method: 'get',
    url: `../map/province/${pinyinName}.json`
  })
}
