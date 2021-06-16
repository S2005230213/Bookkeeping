// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  // env: 'test-gp4ml'
});
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let id = event.id;
  delete event.id;
  delete event.userInfo;
  let date = new Date(new Date().getTime() + 28800000);
  event.updTs = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return await db.collection('bookList').doc(id).update({
    data:event
  });
}