<?php // π‘πππ πππ ππ½π πππππΎπ·ππ ο½ο½ο½ο½ο½ο½ο½ο½ο½ο½ β 
    $dirImg = 'branding/img';
    $dirWU = 'branding/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="brandingSelectionCase superCentered selectionCase"><img class="brandingSelection" src="branding/img/',$filesImg[$i],'" alt=""><span class="hidden brandingWriteUp hiddenWriteUp">',include("/branding/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



