// 'π΄π‘ππππππππ - π π«ππ©π‘π’ππ¬' gallery ο½ο½ο½ο½ο½ο½ο½ο½ο½}
let graphicsSelection = document.querySelectorAll(".graphicsSelection")
let graphicsSelected = document.getElementById("graphicsExhibitImg")
let graphicsCap = document.getElementById("graphicsExhibitCap")
let graphicsButt = document.getElementById("graphicsExhibitButt")
let graphicsTorso = document.getElementById("graphicsGalleryBackgroundImg_")
let graphicsSelectionCase = document.querySelectorAll(".graphicsSelectionCase")
let graphicsWriteUp = document.querySelectorAll(".graphicsWriteUp")
let graphicsWriteUpCase = document.getElementById("graphicsExhibitAside")
let graphicsSwitcher = document.getElementById("graphicsExhibitSwitch")
let graphicsSwitcherClose = document.getElementById("graphicsSwitcherClose")
let graphicsWriteUpCaseClasses = document.getElementById("graphicsExhibitAside")

for (i = 0; i < graphicsSelection.length; i++) {//          πor every graphicsSelection,
    let graphicsSel = graphicsSelection[i].src;              
    graphicsSelection[i].onclick = function(){//            upon being graphicsSelected:
        graphicsCap.src = graphicsSel,//                        1.) switch header bg
        graphicsSelected.src = graphicsSel,//                   2.) switch main exhibit
        graphicsTorso.src = graphicsSel,//                      3.) switch gallery bg
        graphicsButt.src = graphicsSel;//                       4.) switch footer bg..
    }//                                                         Β·Β·α΅α΅ Λ’α΅Λ‘α΅αΆα΅β±α΅βΏ
}
for (i = 0; i < graphicsSelectionCase.length; i++) {//      πor every graphicsSelection,
    let graphicsWU = graphicsWriteUp[i].innerHTML;            
    graphicsSelectionCase[i].onclick = function(){//        upon being graphicsSelected:
        graphicsWriteUpCase.innerHTML = graphicsWU;//       Insert write-up into exhibit
    }//                                                    β½α΅Λ‘α΅Κ°α΅α΅α΅Κ° Κ·Κ³β±α΅α΅β»α΅α΅ Κ³α΅α΅α΅β±βΏΛ’ Κ°β±α΅α΅α΅βΏβΎ
}
// make writ-up visible or hidden & switch out button text ββ
graphicsSwitcher.onclick = function(){
    if (graphicsWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        graphicsWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        graphicsSwitcher.className="hidden",
        graphicsSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        graphicsWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
graphicsSwitcherClose.onclick = function(){
    graphicsWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    graphicsSwitcher.className="vertCentered textRight h100 whiteText",
    graphicsSwitcherClose.className="hidden";
}