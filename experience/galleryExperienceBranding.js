// 'π΄π‘ππππππππ - ππ«ππ§ππ’π§π ' gallery ο½ο½ο½ο½ο½ο½ο½ο½ο½}
let brandingSelection = document.querySelectorAll(".brandingSelection")
let brandingSelected = document.getElementById("brandingExhibitImg")
let brandingCap = document.getElementById("brandingExhibitCap")
let brandingButt = document.getElementById("brandingExhibitButt")
let brandingTorso = document.getElementById("brandingGalleryBackgroundImg_")
let brandingSelectionCase = document.querySelectorAll(".brandingSelectionCase")
let brandingWriteUp = document.querySelectorAll(".brandingWriteUp")
let brandingWriteUpCase = document.getElementById("brandingExhibitAside")
let brandingSwitcher = document.getElementById("brandingExhibitSwitch")
let brandingSwitcherClose = document.getElementById("brandingSwitcherClose")
let brandingWriteUpCaseClasses = document.getElementById("brandingExhibitAside")

for (i = 0; i < brandingSelection.length; i++) {//          πor every brandingSelection,
    let brandingSel = brandingSelection[i].src;              
    brandingSelection[i].onclick = function(){//            upon being brandingSelected:
        brandingCap.src = brandingSel,//                        1.) switch header bg
        brandingSelected.src = brandingSel,//                   2.) switch main exhibit
        brandingTorso.src = brandingSel,//                      3.) switch gallery bg
        brandingButt.src = brandingSel;//                       4.) switch footer bg..
    }//                                                         Β·Β·α΅α΅ Λ’α΅Λ‘α΅αΆα΅β±α΅βΏ
}
for (i = 0; i < brandingSelectionCase.length; i++) {//      πor every brandingSelection,
    let brandingWU = brandingWriteUp[i].innerHTML;            
    brandingSelectionCase[i].onclick = function(){//        upon being brandingSelected:
        brandingWriteUpCase.innerHTML = brandingWU;//       Insert write-up into exhibit
    }//                                                    β½α΅Λ‘α΅Κ°α΅α΅α΅Κ° Κ·Κ³β±α΅α΅β»α΅α΅ Κ³α΅α΅α΅β±βΏΛ’ Κ°β±α΅α΅α΅βΏβΎ
}
// make writ-up visible or hidden & switch out button text ββ
brandingSwitcher.onclick = function(){
    if (brandingWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        brandingWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        brandingSwitcher.className="hidden",
        brandingSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        brandingWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
brandingSwitcherClose.onclick = function(){
    brandingWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    brandingSwitcher.className="vertCentered textRight h100 whiteText",
    brandingSwitcherClose.className="hidden";
}