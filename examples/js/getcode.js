if (window.isMSIE55) fixalpha();
function getcode() {
    var obj = document.getElementById(id);
    obj.syle.display = "block";
}
function DisplayCode() {
    var source = "view-source:" + window.location.href;
    window.open(source, "DisplayCode", "location=0,scrollbars=1,titlebar=0,fullscreen=0");
}
function displaycodeie() {
   document.documentElement.outerHTML();
}

    function createXmlHttp() {
        //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
        
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();                  //FireFox、Opera等浏览器支持的创建方式
        } else {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE浏览器支持的创建方式
        }
    }
    //直接通过XMLHttpRequest对象获取远程网页源代码
    function getSource() {
       // var url = document.getElementById("url").value;             //获取目标地址信息
        //地址为空时提示用户输入
        ////if (url == "") {
         //   alert("请输入网页地址。");
         //   return;
      //  }
        var source = window.location.href;
        var xmlHttp;
        //document.getElementById("source").value = "正在加载……";   //提示正在加载
        createXmlHttp();                                            //创建XMLHttpRequest对象
        //xmlHttp.onreadystatechange = writeSource;                   //设置回调函数
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
        
    }

    function writeSource() {
        getSource();
        var url;
        if (xmlHttp.readyState == 4) {
            document.getElementById("source").value = xmlHttp.responseText;
        }
       // var newOperaPage = window.open(sourceInOpera, "sourceInOpera", 'toolbar=no,menubar=no,scrollbars=yes');
    }
