var _vds = _vds || [];
(function(){
       //_vds.push(['setTrackerHost', 'vds-api.herokuapp.com']);
    _vds.push(['setAccountId', '2222-2222-2222-2222']);
       //_vds.push(['set', 'user', 'ktong']);

    (function() {
        var vds = document.createElement('script'); vds.type =
'text/javascript'; vds.async = true;
        vds.src = ('https:' == document.location.protocol ?
'https://' : 'http://') + 'vds.polyforms.org.s3-website-us-east-1.amazonaws.com/vds.js';
        var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(vds, s);
    })();
})();
