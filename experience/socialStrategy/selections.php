<?php // π‘πππ πππ ππ½π πππππΎπ·ππ ο½ο½ο½ο½ο½ο½ο½ο½ο½ο½ β 
    $dirImg = 'socialStrategy/img';
    $dirWU = 'socialStrategy/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="socialStrategySelectionCase superCentered selectionCase"><img class="socialStrategySelection" src="socialStrategy/img/',$filesImg[$i],'" alt=""><span class="hidden socialStrategyWriteUp hiddenWriteUp">',include("/socialStrategy/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



