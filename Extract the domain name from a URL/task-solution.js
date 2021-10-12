/* function domainName(url){
    let urlParse;

    if (url.indexOf('www.') !== -1)
        urlParse = url.slice(url.indexOf('www.') + 4).split('.')[0];
    else {
        urlParse = url.split('.')[0].split('/');
        if (urlParse[0].indexOf('http') === 0)
            urlParse = urlParse[2];
        else  urlParse = urlParse[0]
    }

    return urlParse;
} */

// New, better solution

function domainName(url){
    return  url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0];
}