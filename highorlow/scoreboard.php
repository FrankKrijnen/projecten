<?php
require'connect.php';

error_reporting(E_ALL);
ini_set('display_error', 1);

echo '<link rel="stylesheet" href="style.css" type="text/css"/>';

$sql = "SELECT * FROM score ORDER BY punten DESC LIMIT 5";
$result = $conn->query($sql);
$plaats = 1;
echo '<div id="scoreboardRand">
            <span id="scoreboardSpan">Top 5 Highscores</span>
            <table id="scoreboard">';

foreach ($result as $row) {
        
        echo "<tr>". "<td class='scorePlaats'>" . $plaats . "." . "</td>" .
        "<td class='scoreNaam'>" . $row["speler"] . "</td>" . 
        "<td class='scorePunten'>" . $row["punten"] . "</td>" . "</tr>";
        $plaats++;
    }   
                
echo '</table></div>';

?>