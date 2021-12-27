function stripUrlParams(url, paramsToStrip=[]){
    let paramsNames = url.slice(url.indexOf('?') + 1).split('&').map(p => p.split('=')[0]),
        params = url.slice(url.indexOf('?') + 1).split('&').map(p => p.split('=')).filter((p, i) => {
            return paramsToStrip.indexOf(p[0]) === -1 && i === paramsNames.indexOf(p[0]);
        });
    return params.length ? url.slice(0, url.indexOf('?') + 1) + params.map(p => p.join('=')).join('&') : url.slice(0, url.indexOf('?'));
}