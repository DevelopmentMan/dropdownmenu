var plugin = requirePlugin("myPlugin")
const app = getApp()
Page({
  data: {
    dropDownMenuTitle: ['地区', '标签1', '标签2', '排序'],
    dropDownMenuFourthData: [{ id: 1, title: '智能排序' }, { id: 2, title: '发布时间' }, { id: 3, title: '距离优先' }],//排序数据
    dropDownMenuFirstData:[
        { id: 1, title: '北京', 
          childModel: [
            { id: '11', title: '海淀区' }, 
            { id: '12', title:'朝阳区'}]},
        { id: 2, title: '上海', 
          childModel: [
            { id: '21', title: '虹口区' }, 
            { id: '22', title: '闵行区' }]},
        { id: 3, title: '广州'},
        { id: 4, title: '天津'},
        { id: 5, title: '重庆'},
      ],
    dropDownMenuSecondData: [
      { id: 1, title: '标签11' },
      { id: 2, title: '标签12' }],
    dropDownMenuThirdData: [
      { id: 1, title: '标签11' }, 
      { id: 2, title: '标签12' }]
  },
  onLoad: function () {
    
  },
  /**
* 生命周期函数--监听页面初次渲染完成
*/
  onReady: function () {
    
  },
  selectedFourth:function(e){
    console.log("选中第" + e.detail.index + "个标签，选中的id：" + e.detail.selectedId + "；选中的内容：" + e.detail.selectedTitle);
  },
  showDialog:function(e) {
    
  },
  //取消事件
  _cancelEvent: function (e)  {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent: function (e)  {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})