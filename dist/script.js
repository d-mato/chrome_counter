(function() {
  $(function() {
    return $('button.action').click(function() {
      return chrome.runtime.sendMessage({
        message: $(this).attr('id')
      });
    });
  });

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    var count_change, status_change;
    if (namespace === 'local') {
      if (count_change = changes['count']) {
        $('#counter').text(count_change.newValue);
      }
      if (status_change = changes['status']) {
        return $('#status').text(status_change.newValue);
      }
    }
  });

  chrome.storage.local.get('count', function(r) {
    return $('#counter').text(r['count']);
  });

  chrome.storage.local.get('status', function(r) {
    return $('#status').text(r['status']);
  });

}).call(this);
