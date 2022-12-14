// hot reload module
var __hot_reload = new WebSocket(`ws://${  location.host  }/__socket__`);

__hot_reload.onmessage = (ev) => {
  if(ev.data === 'reload'){
    window.location.reload();
  }
};