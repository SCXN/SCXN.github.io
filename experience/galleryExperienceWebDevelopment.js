// 'π΄π‘ππππππππ - π°ππ πππ―ππ₯π¨π©π¦ππ§π­' gallery ο½ο½ο½ο½ο½ο½ο½ο½ο½}
let webDevelopmentSelection = document.querySelectorAll(".webDevelopmentSelection")
let webDevelopmentSelected = document.getElementById("webDevelopmentExhibitImg")
let webDevelopmentCap = document.getElementById("webDevelopmentExhibitCap")
let webDevelopmentButt = document.getElementById("webDevelopmentExhibitButt")
let webDevelopmentTorso = document.getElementById("webDevelopmentGalleryBackgroundImg_")
let webDevelopmentSelectionCase = document.querySelectorAll(".webDevelopmentSelectionCase")
let webDevelopmentWriteUp = document.querySelectorAll(".webDevelopmentWriteUp")
let webDevelopmentWriteUpCase = document.getElementById("webDevelopmentExhibitAside")
let webDevelopmentSwitcher = document.getElementById("webDevelopmentExhibitSwitch")
let webDevelopmentSwitcherClose = document.getElementById("webDevelopmentSwitcherClose")
let webDevelopmentWriteUpCaseClasses = document.getElementById("webDevelopmentExhibitAside")

for (i = 0; i < webDevelopmentSelection.length; i++) {//          πor every webDevelopmentSelection,
    let webDevelopmentSel = webDevelopmentSelection[i].src;              
    webDevelopmentSelection[i].onclick = function(){//            upon being webDevelopmentSelected:
        webDevelopmentCap.src = webDevelopmentSel,//                        1.) switch header bg
        webDevelopmentSelected.src = webDevelopmentSel,//                   2.) switch main exhibit
        webDevelopmentTorso.src = webDevelopmentSel,//                      3.) switch gallery bg
        webDevelopmentButt.src = webDevelopmentSel;//                       4.) switch footer bg..
    }//                                                         Β·Β·α΅α΅ Λ’α΅Λ‘α΅αΆα΅β±α΅βΏ
}
for (i = 0; i < webDevelopmentSelectionCase.length; i++) {//      πor every webDevelopmentSelection,
    let webDevelopmentWU = webDevelopmentWriteUp[i].innerHTML;            
    webDevelopmentSelectionCase[i].onclick = function(){//        upon being webDevelopmentSelected:
        webDevelopmentWriteUpCase.innerHTML = webDevelopmentWU;//       Insert write-up into exhibit
    }//                                                    β½α΅Λ‘α΅Κ°α΅α΅α΅Κ° Κ·Κ³β±α΅α΅β»α΅α΅ Κ³α΅α΅α΅β±βΏΛ’ Κ°β±α΅α΅α΅βΏβΎ
}
// make writ-up visible or hidden & switch out button text ββ
webDevelopmentSwitcher.onclick = function(){
    if (webDevelopmentWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        webDevelopmentWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        webDevelopmentSwitcher.className="hidden",
        webDevelopmentSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        webDevelopmentWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
webDevelopmentSwitcherClose.onclick = function(){
    webDevelopmentWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    webDevelopmentSwitcher.className="vertCentered textRight h100 whiteText",
    webDevelopmentSwitcherClose.className="hidden";
}