import { get, post } from './http';
import { getStore } from "../config/mUtils";

/*获取首页数据*/
export const getHomeData = (params) => get('/', params);

/*
   * 登录
   * parmas:
   *   mobile: 电话号码
   *   password: 密码
   * */
export const postLogin = parmas => post('/auth/loginByMobile', parmas);

/*
  *  获取专题数据
  *  parmas:
  *   page: 当前页数
  *   size: 每页数据量
  * */
export const getTopicData = params => get('/topic/list', params);

/*
 * 获取用户购物车数据
 * /api/cart/index
 * parmas:
 * */
export const getCartData = (parmas = {}) => get('/cart/index', parmas);

/*
  * 购物车商品是否选中
  * /api/cart/checked
  * parmas:
  *   isChecked: 是否选中(1:是，0否)
  *   productIds： 商品产品Id
  * */
export const postCartCheck = (parmas = {}) => post('/cart/checked', parmas);

/*
   * 删除购物车商品
   * /api/cart/update
   * parmas:
   *   productIds： 商品产品Id
   * */
export const postCartUpdate = (parmas = {}) => post('/cart/update', parmas);


/*
   * 删除购物车商品
   * /api/cart/delete
   * parmas:
   *   productIds： 商品产品Id
   * */
export const postCartDelete = (parmas = {}) => post('/cart/delete', parmas);

/*
   * 分类页初始化信息获取
   * */
export const getCatalogInitData = parmas => get('/catalog/index', parmas);

/*
  * 根据分类ID获取当前分类信息和子分类
  * parmas:
  *   id: 分类Id
  * */
export const getCatalogMsg = parmas => get('/catalog/current', parmas);

/*
  * 获取在售商品数量
  * */
export const getSellGoodsCount = parmas => get('/goods/count', parmas);

/*
*  根据分类Id或者制造商Id获取商品
*  parmas:
*   brandId: 制造商Id（非必填）
*   categoryId: 分类Id（非必填）
*   sort: id(默认排序)、price(价格排序)
*   order: 排序方式
*   page: 当前页数
*   size: 每页数据量
* */
export const getGoodsData = parmas => get('/goods/list', parmas);
