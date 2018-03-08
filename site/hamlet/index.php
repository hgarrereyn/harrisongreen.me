<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link type="text/css" rel="stylesheet" href="/hamlet/css/bootstrap.min.css"/>
        <link type="text/css" rel="stylesheet" href="/hamlet/css/main.css"/>
        <title>Hamlet Generator</title>
    </head>
    <body>
        <div class="container container-fluid">
            <div class="row">
                <h1 class="text-center">Hamlet Generator</h1>
            </div>

            <?php if (!isset($_GET['data'])){ ?>

            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <h4>What is this?</h4>
                    <p>
                        This is a Markov text generator that uses content in Shakespeare's Hamlet to generate text.
                    </p>
                    <h4>How do I use it?</h4>
                    <p>
                        First, select some or all of the scenes in Hamlet to use as source content. Then, select some characters that you would like to be present in the generated scene. Characters that appear red do not have any lines in the selected scenes. If you would like, you can change the settings in the generation panel. To restore the settings to the default, simply press the reset button next to the generate button.
                    </p>
                    <h4>How does it work?</h4>
                    <p>
                        A Markov chain is a process that provides transitions from one state to another based soley on the current state. In terms of text generation, the state is the previous <b>n</b> words where <b>n</b> is <b>chain length - 1</b>. For example, consider the following example:

                        If we want to take the sentence: <b>"I have a dog and I have a cat."</b> and create a state diagram to use for text generation, we would first decide on the chain length. Say we choose a length of <b>3</b>. This means each group of words would be 3 words long and the last two words of the current tuple would be used as the state. Now, we would split the sentence into a table that looks like this:</p>
                        <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                        <table class="table table-condensed text-center">
                            <thead>
                                <th colspan="2" class="text-center">State</th>
                                <th class="text-center">Prediction</th>
                            </thead>
                            <tr>
                                <td>I</td>
                                <td>have</td>
                                <td>a</td>
                            </tr>
                            <tr>
                                <td>have</td>
                                <td>a</td>
                                <td>dog</td>
                            </tr>
                            <tr>
                                <td>a</td>
                                <td>dog</td>
                                <td>and</td>
                            </tr>
                            <tr>
                                <td>dog</td>
                                <td>and</td>
                                <td>I</td>
                            </tr>
                            <tr>
                                <td>and</td>
                                <td>I</td>
                                <td>have</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>have</td>
                                <td>a</td>
                            </tr>
                            <tr>
                                <td>have</td>
                                <td>a</td>
                                <td>cat.</td>
                            </tr>
                        </table>
                        </div>
                        <div class="col-sm-2"></div>
                        </div>
                    <p>
                        Now, we would pick a starting point. Let's start with <b>I</b> and <b>have</b>. Using the state table, we can see that the only prediction is <b>a</b> with two rows containing this prediction. After adding <b>a</b>, we now have the sentence <b>I have a</b>. However, to continue we will only use the last two words, <b>have</b> and <b>a</b>. This time, there is a 50% chance of choosing <b>dog</b> and a 50% chance of chosing <b>cat.</b> (notice how the punctuation is included). We will choose one of these using a weighted random (1/1 in this case). The chain continues until we decide to stop. In this manner, text that sounds relatively correct and appropriate can be created from source text with no other human input.
                    </p>
                    <i>
                        In this generator, additional techniques are used in order to generate speeches of various lengths, with multiple characters, and with relatively correct grammar.
                    </i>
                </div>
                <div class="col-sm-2"></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12" id="scenes">
                    <div class="content-pane">
                    <h3 class="text-center">1. Select Scenes:</h3>
                    <ul>
                        <li><label class="checkbox-inline"><input type="checkbox" id="all" value="all"> All</label></li>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="act1" value="act1" class="all"> Act I</label></li>
                            <ul>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene1" value="scene1" actscene=11 class="all act1"> Scene I</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene2" value="scene2" actscene=12 class="all act1"> Scene II</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene3" value="scene3" actscene=13 class="all act1"> Scene III</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene4" value="scene4" actscene=14 class="all act1"> Scene IV</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene5" value="scene5" actscene=15 class="all act1"> Scene V</label></li>
                            </ul>
                        </ul>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="act2" value="act2" class="all"> Act II</label></li>
                            <ul>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene1" value="scene1" actscene=21 class="all act2"> Scene I</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene2" value="scene2" actscene=22 class="all act2"> Scene II</label></li>
                            </ul>
                        </ul>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="act3" value="act3" class="all"> Act III</label></li>
                            <ul>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene1" value="scene1" actscene=31 class="all act3"> Scene I</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene2" value="scene2" actscene=32 class="all act3"> Scene II</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene3" value="scene3" actscene=33 class="all act3"> Scene III</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene4" value="scene4" actscene=34 class="all act3"> Scene IV</label></li>
                            </ul>
                        </ul>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="act4" value="act4" class="all"> Act IV</label></li>
                            <ul>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene1" value="scene1" actscene=41 class="all act4"> Scene I</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene2" value="scene2" actscene=42 class="all act4"> Scene II</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene3" value="scene3" actscene=43 class="all act4"> Scene III</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene4" value="scene4" actscene=44 class="all act4"> Scene IV</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene5" value="scene5" actscene=45 class="all act4"> Scene V</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene6" value="scene6" actscene=46 class="all act4"> Scene VI</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene7" value="scene7" actscene=47 class="all act4"> Scene VII</label></li>
                            </ul>
                        </ul>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="act5" value="act5" class="all"> Act V</label></li>
                            <ul>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene1" value="scene1" actscene=51 class="all act5"> Scene I</label></li>
                                <li><label class="checkbox-inline"><input type="checkbox" id="scene2" value="scene2" actscene=52 class="all act5"> Scene II</label></li>
                            </ul>
                        </ul>
                    </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12" id="characters">
                    <div class="content-pane">
                    <h3 class="text-center">2. Select Characters:</h3>
                    <ul>
                        <li><label class="checkbox-inline"><input type="checkbox" id="allCharacters" value=""> All</label></li>
                        <ul>
                            <li><label class="checkbox-inline"><input type="checkbox" id="bernardo" value="bernardo" class="allCharacters"> Bernardo</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="claudius" value="claudius" class="allCharacters"> Claudius</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="firstClown" value="firstClown" class="allCharacters"> First Clown</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="secondClown" value="secondClown" class="allCharacters"> Second Clown</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="fortinbras" value="fortinbras" class="allCharacters"> Fortinbras</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="francisco" value="francisco" class="allCharacters"> Francisco</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="gertrude" value="gertrude" class="allCharacters"> Gertrude</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="ghost" value="ghost" class="allCharacters"> Ghost</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="guildenstern" value="guildenstern" class="allCharacters"> Guildenstern</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="hamlet" value="hamlet" class="allCharacters"> Hamlet</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="horatio" value="horatio" class="allCharacters"> Horatio</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="laertes" value="laertes" class="allCharacters"> Laertes</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="marcellus" value="marcellus" class="allCharacters"> Marcellus</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="ophelia" value="ophelia" class="allCharacters"> Ophelia</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="osric" value="osric" class="allCharacters"> Osric</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="firstPlayer" value="firstPlayer" class="allCharacters"> First Player</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="playerKing" value="playerKing" class="allCharacters"> Player King</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="playerQueen" value="playerQueen" class="allCharacters"> Player Queen</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="polonius" value="polonius" class="allCharacters"> Polonius</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="reynaldo" value="reynaldo" class="allCharacters"> Reynaldo</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="rosencrantz" value="rosencrantz" class="allCharacters"> Rosencrantz</label></li>
                            <li><label class="checkbox-inline"><input type="checkbox" id="voltimand" value="voltimand" class="allCharacters"> Voltimand</label></li>
                        </ul>
                    </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" id="generate">
                    <div class="content-pane">
                    <h3 class="text-center">3. Generate</h3>
                    <div class="form-group">
                        <label class="sr-only" for="lines">Lines</label>
                        <div class="input-group">
                            <div class="input-group-addon">Lines: </div>
                            <input type="number" class="form-control" id="lines" value="100" placeholder="Number of lines">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="chainLength">Chain Length</label>
                        <div class="input-group">
                            <div class="input-group-addon">Chain Length: </div>
                            <input type="number" class="form-control" id="chainLength" value="3" placeholder="Chain length">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="speechSize">Speech Size</label>
                        <div class="input-group">
                            <div class="input-group-addon">Speech Size: </div>
                            <input type="number" class="form-control" id="speechSize" value="10" placeholder="Lines in a speech">
                        </div>
                        <label class="sr-only" for="speechSizeMod">Speech Size Randomness</label>
                        <div class="input-group">
                            <div class="input-group-addon">+/-</div>
                            <input type="number" class="form-control" id="speechSizeMod" value="90" placeholder="Randomness">
                            <div class="input-group-addon">%</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="lineLength">Line Length</label>
                        <div class="input-group">
                            <div class="input-group-addon">Line Length: </div>
                            <input type="number" class="form-control" id="lineLength" value="5" placeholder="Words in a line">
                        </div>
                        <label class="sr-only" for="lineLengthMod">Line Length Randomness</label>
                        <div class="input-group">
                            <div class="input-group-addon">+/-</div>
                            <input type="number" class="form-control" id="lineLengthMod" value="20" placeholder="Randomness">
                            <div class="input-group-addon">%</div>
                        </div>
                    </div>
                    <button id="resetButton" type="button" class="btn btn-default">Reset Settings</button>
                    <button id="generateButton" type="button" class="btn btn-success">Generate</button>
                    </div>
                </div>
            </div>

            <?php } else { ?>

            <div class="row">
                <h4 class="text-center"><a href="/hamlet">Return to main page</a></h4>
            </div>

            <?php } ?>

            <div id="generatedLink">
                <hr/>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                        <h4 class="text-center"><a id="permalink" href="/hamlet">Permalink</a></h4>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <hr/>
            </div>

            <div class="row">
                <div class="col-sm-2"></div>
                <div id="generated" class="col-sm-8"></div>
                <div class="col-sm-2"></div>
            </div>
        </div>

        <script src="/hamlet/js/jquery-1.8.3.min.js"></script>
        <script src="/hamlet/js/text.js"></script>
        <script src="/hamlet/js/main.js"></script>

        <script>
            $(document).ready(function(){
        <?php
        if (isset($_GET['data'])) {
            echo('loadData('.$_GET['data'].');');
            echo('generate(Math.data);');
        }
        ?>
            });
        </script>

    </body>
</html>
