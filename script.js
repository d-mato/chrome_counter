$(function(){

  $('button.action').click(function(){
    chrome.runtime.sendMessage({message: $(this).attr('id')});
  });

});
chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (namespace=='local') {
    if (count_change = changes['count'])
      $('#counter').text(count_change.newValue);
    if (status_change = changes['status'])
      $('#status').text(status_change.newValue);
  }
});

//初期設定
chrome.storage.local.get('count', function(r){
  $('#counter').text(r['count']);
});
chrome.storage.local.get('status', function(r){
  $('#status').text(r['status']);
});
