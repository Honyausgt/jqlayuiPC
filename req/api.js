var baseUrl = "http://192.168.3.148:8080" // 测试环境

// 引入ajax
document.write("<script type='text/javascript' src='../req/ajax.js'></script>");



// ========== 首页 ============
// 获取首页数据
function getTopNavMenu() {
    console.log('getTopNavMenu被调用了');
    return new Promise(resolve => {
        post(`${baseUrl}/type/getmenu`, {}, (res) => { resolve(res) })
    })
}
// 轮播图数据
function getCarouselLists() {
    return new Promise(resolve => {
        post(`${baseUrl}/lunbotu/lunbotu`, {}, (res) => { resolve(res) })
    })
}
