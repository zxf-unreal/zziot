const local_url = process.env.VUE_APP_BASE_URL  ||
    (document.location.protocol + "//" + document.location.host);

const ws_url = process.env.VUE_APP_WEBSOCKET_URL || ('ws://' + document.location.host + '/ws')

const red_url = process.env.VUE_APP_RED_BASE_URL ||
    (document.location.protocol + "//" + document.domain + ":1880/");

export {local_url, red_url, ws_url}
