(function() {
  var alarm_name, count, status;

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var count, status;
    console.log(request);
    switch (request.message) {
      case 'start':
        if (status === 'start') {
          break;
        }
        return chrome.alarms.create(alarm_name, {
          delayInMinutes: 1 / 60,
          periodInMinutes: 1 / 60
        });
      case 'stop':
        chrome.alarms.clear(alarm_name);
        chrome.storage.local.set({
          status: 'stop'
        });
        return status = 'stop';
      case 'clear':
        chrome.storage.local.set({
          count: 0
        });
        return count = 0;
    }
  });

  chrome.alarms.onAlarm.addListener(function(alarm) {
    var status;
    if (alarm.name === alarm_name) {
      count++;
      chrome.storage.local.set({
        count: count,
        status: 'start'
      });
      status = 'start';
      chrome.browserAction.setBadgeText({
        text: count.toString()
      });
      return console.log(count);
    }
  });

  console.log('background started');

  count = 0;

  alarm_name = 'counter';

  status = 'stop';

  chrome.storage.local.set({
    count: count,
    status: 'stop'
  });

  chrome.alarms.clear(alarm_name);

}).call(this);
