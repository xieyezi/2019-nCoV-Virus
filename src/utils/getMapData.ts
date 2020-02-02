
// 将数据格式化为地图所需格式
export function getMapData(staticList:[]) {
   let mapList = [] as any
   staticList.forEach((item:any) => {
       let mapItem = {
           name: item.provinceShortName,
           value: item.confirmedCount,
           ...item
       }
       mapList.push(mapItem)
   })
   return mapList
}
// 将数据格式化为地图所需格式
export function getMapProvinceData(staticList:[]) {
    let mapList = [] as any
    staticList.forEach((item:any) => {
        let mapItem = {
            name: item.cityName,
            value: item.confirmedCount,
            ...item
        }
        mapList.push(mapItem)
    })
    return mapList
 }