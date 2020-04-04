import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param {
//  page     int
//	pageSize int
// }
// @Router /authority/getAuthorityList [post]
export const getAuthorityList = (data) => {
    return service({
        url: "/authority/getAuthorityList",
        method: 'post',
        data
    })
}


// @Summary 删除角色
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body {authorityId uint} true "删除角色"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /authority/deleteAuthority [post]
export const deleteAuthority = (data) => {
    return service({
        url: "/authority/deleteAuthority",
        method: 'post',
        data
    })
}

// @Summary 创建角色
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.CreateAuthorityPatams true "创建角色"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /authority/createAuthority [post]
export const createAuthority = (data) => {
    return service({
        url: "/authority/createAuthority",
        method: 'post',
        data
    })
}

// @Summary 设置角色资源权限
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body sysModel.SysAuthority true "设置角色资源权限"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"设置成功"}"
// @Router /authority/setDataAuthority [post]
export const setDataAuthority = (data) => {
    return service({
        url: "/authority/setDataAuthority",
        method: 'post',
        data
    })
}