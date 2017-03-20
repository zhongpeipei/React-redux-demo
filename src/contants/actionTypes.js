// action类型: 添加新的todo项
export const ADD_TODO = 'ADD_TODO';

// action类型: 删除一个todo项
export const REMOVE_TODO = 'REMOVE_TODO';

// action类型: 搜索和过滤todo项列表
export const SETCH_FILTER = 'SETCH_FILTER';

// action类型: 若input框没有值搜索和过滤todo项列表
export const SETCH_VALUE = 'SETCH_VALUE';


// --------------------- request actions ------------------------------
// action类型: 发送一个ajax请求
export const API_REQUEST = 'API_REQUEST';

// action类型: 接受到一个ajax响应
export const API_SUCCESS = 'API_SUCCESS';

// action类型: ajax请求失败时.
export const API_FAILURE = 'API_FAILURE';



// --------------------- system actions ------------------------------
// action类型: 显示modal
export const SHOW_MODAL = 'SHOW_MODAL';

// action类型: 关闭modal
export const CLOSED_MODAL = 'CLOSED_MODAL';

// action类型: 关闭alert
export const CLOSED_ALERT = 'CLOSED_ALERT';

// action类型: 显示alert
export const SHOW_ALERT = 'SHOW_ALERT';

// action类型：添加上传图片列表
export const ADD_IMAGES = 'ADD_IMAGES';

// action类型：更新ImageId
export const UPDATE_IMAGEID = 'UPDATE_IMAGEID';

// action类型：更新percent
export const UPDATE_PERCENT = 'UPDATE_PERCENT';

// action类型：上传成功
export const UPLOAD_COMPLETE = 'UPLOAD_COMPLETE';

// action类型：清空上传图片列表
export const CLEAR_IMAGES = 'CLEAR_IMAGES';

// action类型： 取消指定图片上传
export const DELETE_IMAGE = 'DELETE_IMAGE';

// action类型： 重新排序上传成功的图片
export const SORT_IMAGE = 'SORT_IMAGE';

// action类型： 删除图片列表中的图片
export const DELETE_PROJECT_IMAGE = 'DELETE_PROJECT_IMAGE';

// action类型： 更新图片使用次数
export const UPDATE_IMAGE_USED_COUNT = 'UPDATE_IMAGE_USED_COUNT';

// action类型： 将上传失败的图片放到第一个
export const ERROR_TO_FIRST = 'ERROR_TO_FIRST';

// action类型： 重新上传指定图片
export const RETRY_IMAGE = 'RETRY_IMAGE';

// aciton类型： 更新指定字段数据
export const UPDATE_FIELDS = 'UPDATE_FIELDS';

// action类型: 登录成功
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// action类型: 登录失败
export const LOGIN_FAIL = 'LOGIN_FAIL';

// 显示图片编辑弹窗
export const SHOW_IMAGE_EDIT_MODAL = 'SHOW_IMAGE_EDIT_MODAL';

// 隐藏图片编辑弹窗
export const HIDE_IMAGE_EDIT_MODAL = 'HIDE_IMAGE_EDIT_MODAL';


// action类型：弹出右上角提示框
export const SHOW_NOTIFY = 'SHOW_NOTIFY';

// action 类型：关闭右上角提示框
export const HIDE_NOTIFY = 'HIDE_NOTIFY';

// action 类型：弹出中间确认弹框
export const SHOW_CONFIRM = 'SHOW_CONFIRM';

// action 类型：关闭中间确认弹框
export const HIDE_CONFIRM = 'HIDE_CONFIRM';

// action 类型: 显示 item  loading
export const SHOW_LOADING = 'SHOW_LOADING';

// action 类型: 隐藏 item loading
export const HIDE_LOADING = 'HIDE_LOADING';

// action 类型: 保存文字设置
export const SAVE_TEXT_OPTIONS = 'SAVE_TEXT_OPTIONS';

// action 类型: 更新文字位置
export const UPDATE_TEXT_POSITION = 'UPDATE_TEXT_POSITION';

export const NEED_LEAVE_CONFIRM = 'NEED_LEAVE_CONFIRM';

export const NO_NEED_LEAVE_CONFIRM = 'NO_NEED_LEAVE_CONFIRM';

