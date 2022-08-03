export const DINTALK_API = true
export const CORP_ID = ''
export const API = {
  DINGTALK_JSAPI: 'dingtalk/jsApi/getJsApiConf', // 鉴权

  DINGTALK_USERID: 'dingtalk/user/getUserId',
  DINGTALK_USERINFO: 'dingtalk/user/getUserInfo',

  DINGTALK_DEPARTMENT_POSITION: 'dingtalk/common/position', // 职位/部门选择器接口
  DINGTALK_DEPARTMENT_EMPLOYEE: 'dingtalk/common/employee/', // 人员选择器接口：获取下属部门以及员工：第一个参数 部门的fdId 第二个参数是部门的deptId
  DINGTALK_DEPARTMENT_WORKER: 'dingtalk/common/worker/', // 人员选择器查岗位工
  DINGTALK_FIND_USER_BY_CODE: 'dingtalk/common/person/detail/', // 根据员工号查找员工详情
  DINGTALK_FILEUPLOAD: 'dingtalk/common/fileupload' // 上传文件
}

export default {
  DINTALK_API,
  CORP_ID,
  API
}
