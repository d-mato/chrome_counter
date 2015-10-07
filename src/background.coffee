#メッセージ受信
chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
  console.log request
  switch request.message
    when 'start'
      if status == 'start'
        break
      #既にスタートならブレーク
      chrome.alarms.create alarm_name,
        delayInMinutes: 1 / 60
        periodInMinutes: 1 / 60
    when 'stop'
      chrome.alarms.clear alarm_name
      chrome.storage.local.set status: 'stop'
      status = 'stop'
    when 'clear'
      chrome.storage.local.set count: 0
      count = 0

chrome.alarms.onAlarm.addListener (alarm) ->
  if alarm.name == alarm_name
    count++
    chrome.storage.local.set
      count: count
      status: 'start'
    status = 'start'
    chrome.browserAction.setBadgeText text: count.toString()
    console.log count

#初期設定
console.log 'background started'
count = 0
alarm_name = 'counter'
status = 'stop'
chrome.storage.local.set
  count: count
  status: 'stop'
chrome.alarms.clear alarm_name
