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
        //����window.XMLHttpRequest�����Ƿ����ʹ�ò�ͬ�Ĵ�����ʽ
        
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();                  //FireFox��Opera�������֧�ֵĴ�����ʽ
        } else {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE�����֧�ֵĴ�����ʽ
        }
    }
    //ֱ��ͨ��XMLHttpRequest�����ȡԶ����ҳԴ����
    function getSource() {
       // var url = document.getElementById("url").value;             //��ȡĿ���ַ��Ϣ
        //��ַΪ��ʱ��ʾ�û�����
        ////if (url == "") {
         //   alert("��������ҳ��ַ��");
         //   return;
      //  }
        var source = window.location.href;
        var xmlHttp;
        //document.getElementById("source").value = "���ڼ��ء���";   //��ʾ���ڼ���
        createXmlHttp();                                            //����XMLHttpRequest����
        //xmlHttp.onreadystatechange = writeSource;                   //���ûص�����
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
