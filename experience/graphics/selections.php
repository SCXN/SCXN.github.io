<?php // π‘πππ πππ ππ½π πππππΎπ·ππ ο½ο½ο½ο½ο½ο½ο½ο½ο½ο½ β 
    $dirImg = 'graphics/img';
    $dirWU = 'graphics/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="graphicsSelectionCase superCentered selectionCase"><img class="graphicsSelection" src="graphics/img/',$filesImg[$i],'" alt=""><span class="hidden graphicsWriteUp hiddenWriteUp">',include("/graphics/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



