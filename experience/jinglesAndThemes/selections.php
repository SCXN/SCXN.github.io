<?php // π‘πππ πππ ππ½π πππππΎπ·ππ ο½ο½ο½ο½ο½ο½ο½ο½ο½ο½ β 
    $dirImg = 'jinglesAndThemes/img';
    $dirWU = 'jinglesAndThemes/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="jinglesAndThemesSelectionCase superCentered selectionCase"><img class="jinglesAndThemesSelection" src="jinglesAndThemes/img/',$filesImg[$i],'" alt=""><span class="hidden jinglesAndThemesWriteUp hiddenWriteUp">',include("/jinglesAndThemes/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



