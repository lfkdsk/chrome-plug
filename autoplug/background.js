chrome.contextMenus.create({
    'type':'normal',
    'title':'我也不知道你搜出来的是什么？',
    'contexts':['selection'],
    'id':'cn',
    'onclick':translate
});

function translate(info, tab){
    var url = 'http://mymagnet.applinzi.com/'+info.selectionText ;
    window.open(url, '_blank');
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.contextMenus.update('cn',{
        'title':'奇妙的搜索“'+message+'”'
    });
});