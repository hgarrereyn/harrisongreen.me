/* Hamlet info vars */
var characters = {
    'bernardo' : [11,12],
    'claudius' : [12,22,31,32,33,41,43,45,47,51,52],
    'firstClown' : [51],
    'secondClown' : [51],
    'fortinbras' : [44,52],
    'francisco' : [11],
    'gertrude' : [12,22,31,32,34,41,45,47,51,52],
    'ghost' : [15,34],
    'guildenstern' : [22,31,32,33,42],
    'hamlet' : [12,14,15,22,31,32,33,34,42,43,44,51,52],
    'horatio' : [11,12,14,15,32,45,46,51,52],
    'laertes' : [12,13,45,47,51,52],
    'marcellus' : [11,12,14,15],
    'ophelia' : [13,21,31,32,45],
    'osric' : [52],
    'firstPlayer' : [22,32],
    'playerKing' : [32],
    'playerQueen' : [32],
    'polonius' : [12,13,21,22,31,32,33,34],
    'reynaldo' : [21],
    'rosencrantz' : [22,31,32,33,42,43,44],
    'voltimand' : [12,22]
}

var displayName = {
    'bernardo' : 'BERNARDO',
    'claudius' : 'KING CLAUDIUS',
    'firstClown' : 'FIRST CLOWN',
    'secondClown' : 'SECOND CLOWN',
    'fortinbras' : 'PRINCE FORTINBRAS',
    'francisco' : 'FRANCISCO',
    'gertrude' : 'QUEEN GERTRUDE',
    'ghost' : 'GHOST',
    'guildenstern' : 'GUILDENSTERN',
    'hamlet' : 'HAMLET',
    'horatio' : 'HORATIO',
    'laertes' : 'LAERTES',
    'marcellus' : 'MARCELLUS',
    'ophelia' : 'OPHELIA',
    'osric' : 'OSRIC',
    'firstPlayer' : 'FIRST PLAYER',
    'playerKing' : 'PLAYER KING',
    'playerQueen' : 'PLAYER QUEEN',
    'polonius' : 'POLONIUS',
    'reynaldo' : 'REYNALDO',
    'rosencrantz' : 'ROSENCRANTZ',
    'voltimand' : 'VOLTIMAND',
}

$(document).ready(function(){
    $("input").on("click force",function(){
        var p = $(this);
        $("." + $(this).attr("id")).each(function(){
            if (!$(this).prop("disabled"))
                $(this).prop("checked", p.prop("checked")); 
        });
    });
    
    $("#scenes input").on("click force",function(){
        var scenes = getSelectedScenes();
        
        var visible;
        for (character in characters){
            visible = false;
            for (characterScene in characters[character]){
                for (scene in scenes){
                    if (characters[character][characterScene] == scenes[scene]){
                        visible = true;   
                        break;
                    }
                }
                if (visible) break;
            }
            $("#" + character).prop("disabled",!visible);
            $("#" + character).parent().css({"color":(visible?"black":"red"), "opacity":(visible?1:0.5)});
            $("#" + character).prop("checked",visible && $("#allCharacters").prop("checked"));
        }
    });
    
    $("#generateButton").on("click", function(){
        generate(); 
    });
    
    $("#resetButton").on("click", function(){
        resetSettings(); 
    });
    
    //Form validation
    $("#lines").on('input',function(){
        var i = parseInt($(this).attr("value"));
        if (i <= 0 || i > 500 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $("#chainLength").on('input',function(){
        var i = parseInt($(this).attr("value"));
        if (i <= 1 || i > 6 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $("#speechSize").on('input',function(){
        var i = parseInt($(this).attr("value"));
        if (i <= 0 || i > 20 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $("#speechSizeMod").on('input',function(){
        var i = parseInt($(this).attr("value")) / 100;
        if (i < 0 || i > 5 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $("#lineLength").on('input',function(){
        var i = parseInt($(this).attr("value"));
        if (i <= 0 || i > 20 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $("#lineLengthMod").on('input',function(){
        var i = parseInt($(this).attr("value")) / 100;
        if (i < 0 || i > 5 || isNaN(i)){
            if (!$(this).parent().hasClass('has-error'))
                $(this).parent().addClass('has-error');
        } else if ($(this).parent().hasClass('has-error')){
            $(this).parent().removeClass('has-error');
        }
    });
    
    $(".checkbox-inline").on("touchstart",function(e){
        if (!$(this).hasClass("touch"))
            $(this).addClass("touch");
    });
    
    $(".checkbox-inline").on("touchmove",function(e){
        if ($(this).hasClass("touch"))
            $(this).removeClass("touch");
    });
    
    $(".checkbox-inline").on("touchend",function(e){
        if ($(this).hasClass("touch")){
            $(this).find("input").prop("checked",!$(this).find("input").prop("checked"));
            //$(this).click();
            $(this).find("input").trigger("force");
            e.preventDefault();
        }
    });

    $("#all").trigger("force"); 
});

function clearErrorForm(){
    $("#lines").parent().removeClass('has-error');
    $("#chainLength").parent().removeClass('has-error');
    $("#speechSize").parent().removeClass('has-error');
    $("#speechSizeMod").parent().removeClass('has-error');
    $("#lineLength").parent().removeClass('has-error');
    $("#lineLengthMod").parent().removeClass('has-error');
}

function setSeed(number){
    if (number == undefined){
        var d = new Date();
        Math.seed = d.getTime();
    } else {
        Math.seed = number;   
    }
}

function seededRandom(){
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    return Math.seed / 233280;
}

function getSelectedScenes(){
    var scenes = [];
    $("#scenes input").each(function(){
        if ($(this).attr('actscene') != undefined && $(this).prop("checked")){
            scenes.push($(this).attr('actscene'));
        }
    });
    return scenes;
}

function getSelectedCharacters(){
    var characters = [];
    $("#characters input").each(function(){
        if ($(this).attr('value') != "" && $(this).prop("checked")){
            characters.push($(this).attr('value'));
        }
    });
    return characters;
}

function splitInto(text, length){
    var data = [];
    
    var split = text.split(" ");
    if (split.length < length)
        return [];
    
    var mem = [];
    
    for (var i = 0; i < length; ++i)
        mem.push(split[i]);
    data.push(mem.slice(0));
    
    for (var i = length; i < split.length; ++i){
        for (var j = 0; j < length - 1; ++j)
            mem[j] = mem[j+1];
        mem[length-1] = split[i];
        data.push(mem.slice(0));
    }
    
    return data;
}

function resetSettings(){
    $("#lines").attr("value",100);
    $("#chainLength").attr("value",3);
    $("#speechSize").attr("value",10);
    $("#speechSizeMod").attr("value",90);
    $("#lineLength").attr("value",5);
    $("#lineLengthMod").attr("value",20);
    clearErrorForm();
}

function loadData(data){
    Math.data = JSON.parse(atob(data));
}

function getDataString(){
    return "/hamlet?data='" + btoa(JSON.stringify(Math.data)) + "'";
}
                   
function generate(data){
    if (data == undefined){
        Math.data = {};
        setSeed();
        Math.data.seed = Math.seed;
        var lines = parseInt($("#lines").attr("value"));
        $("#lines").attr("value",parseInt(Math.max(1,Math.min(500,isNaN(lines)?100:lines))));
        lines = parseInt($("#lines").attr("value"));
        
        var chainLength = parseInt($("#chainLength").attr("value"));
        $("#chainLength").attr("value",parseInt(Math.max(2,Math.min(6,isNaN(chainLength)?3:chainLength))));
        chainLength = parseInt($("#chainLength").attr("value"));
        
        var speechSize = parseInt($("#speechSize").attr("value"));
        $("#speechSize").attr("value",parseInt(Math.max(1,Math.min(20,isNaN(speechSize)?10:speechSize))));
        speechSize = parseInt($("#speechSize").attr("value"));
        
        var speechSizeMod = parseInt($("#speechSizeMod").attr("value")) / 100;
        $("#speechSizeMod").attr("value",parseInt(Math.max(0,Math.min(500,isNaN(speechSizeMod)?90:speechSizeMod*100))));
        speechSizeMod = parseInt($("#speechSizeMod").attr("value")) / 100;
        
        var lineLength = parseInt($("#lineLength").attr("value"));
        $("#lineLength").attr("value",parseInt(Math.max(1,Math.min(20,isNaN(lineLength)?5:lineLength))));
        lineLength = parseInt($("#lineLength").attr("value"));
        
        var lineLengthMod = parseInt($("#lineLengthMod").attr("value")) / 100;
        $("#lineLengthMod").attr("value",parseInt(Math.max(0,Math.min(500,isNaN(lineLengthMod)?20:lineLengthMod*100))));
        lineLengthMod = parseInt($("#lineLengthMod").attr("value")) / 100;
        
        clearErrorForm();
        
        var scenes = getSelectedScenes();
        var c = getSelectedCharacters();
        
        Math.data.lines = lines;
        Math.data.chainLength = chainLength;
        Math.data.speechSize = speechSize;
        Math.data.speechSizeMod = speechSizeMod;
        Math.data.lineLength = lineLength;
        Math.data.lineLengthMod = lineLengthMod;
        Math.data.scenes = scenes;
        Math.data.c = c;
    } else {
        setSeed(data.seed);   
        var lines = data.lines;
        var chainLength = data.chainLength;
        var speechSize = data.speechSize;
        var speechSizeMod = data.speechSizeMod;
        var lineLength = data.lineLength;
        var lineLengthMod = data.lineLengthMod;
        
        var scenes = data.scenes;
        var c = data.c;
    }
    
    var entered = [];
    var exited = [];
    
    if (c.length == 0){
        alert("Select one or more characters");
        return;
    }
    
    entered.push(parseInt(seededRandom() * c.length));
    for (character in c){
        if (entered.indexOf(parseInt(character)) == -1){
            if (seededRandom() > 0.5){
                entered.push(parseInt(character));   
            } else {
                exited.push(parseInt(character));   
            }
        }
    }

    var data = {}
    var used = {}
    
    for (character in c){
        data[c[character]] = [];
        used[c[character]] = [];
        
        for (s in scenes){
            scene = parseInt(scenes[s]);
            if (characters[c[character]].indexOf(scene) > -1){
                var newData = splitInto(text[c[character]][scene],chainLength);
                for (row in newData){
                    data[c[character]].push(newData[row]);   
                }
            }
        }
    }
    
    var generated = "";
    var generatedLines = 0;
    
    var currentCharacter = '';
    var characterIndex = -1;
    
    while (generatedLines < lines){
        var ci = parseInt(seededRandom() * entered.length);
        if (ci == characterIndex) ci = (ci + 1) % entered.length;
        currentCharacter = c[entered[ci]];
        if (ci != characterIndex)
            generated += "<h3>" + displayName[currentCharacter] + ":</h3>";
        characterIndex = ci;
        
        generated += "<p>";
        
        var thisSpeechLength = modMargin(speechSize, speechSizeMod);
        if ((thisSpeechLength + generatedLines) >= lines)
            thisSpeechLength = lines - generatedLines;
        var thisSpeech = "";
        
        if (c.length == 1)
            thisSpeechLength = lines;
        
        var i = findRandomStart(data[currentCharacter], used[currentCharacter]);
        if (i == -1){
            used[currentCharacter] = [];
            i = findRandomStart(data[currentCharacter], used[currentCharacter]);
        } else
            used[currentCharacter].push(parseInt(i));
        var last = data[currentCharacter][i];
        
        for (var line = 0; line < thisSpeechLength; ++line){
            var thisLineLength = modMargin(lineLength, lineLengthMod);
            
            for (var word = 0; word < thisLineLength; ++word){
                if (word == thisLineLength - 1){
                    //Check for ending
                    var foundEnd = false;
                    while (!foundEnd){
                        i = findEndingMatch(data[currentCharacter], last, line == thisSpeechLength - 1);
                        if (i != -1){
                            last = data[currentCharacter][i];
                            for (w in last){
                                thisSpeech += last[w] + " ";   
                            }
                        
                            i = findRandomStart(data[currentCharacter], used[currentCharacter]);
                            if (i == -1){
                                used[currentCharacter] = [];
                                i = findRandomStart(data[currentCharacter], used[currentCharacter]);
                            } else
                                used[currentCharacter].push(parseInt(i));
                            last = data[currentCharacter][i];
                        
                            foundEnd = true;
                            
                            break;
                        } else {
                            thisSpeech += last[0] + " ";
                            i = findMatch(data[currentCharacter], used[currentCharacter], last.slice(1));
                            if (i == -1){
                                used[currentCharacter] = [];
                                i = findMatch(data[currentCharacter], used[currentCharacter], last.slice(1));
                            } else
                                used[currentCharacter].push(parseInt(i));
                            last = data[currentCharacter][i];
                        }
                    }
                } else {
                    thisSpeech += last[0] + " ";
                    i = findMatch(data[currentCharacter], used[currentCharacter], last.slice(1));
                    if (i == -1){
                        used[currentCharacter] = [];
                        i = findMatch(data[currentCharacter], used[currentCharacter], last.slice(1));
                    } else
                        used[currentCharacter].push(parseInt(i));
                    last = data[currentCharacter][i];
                }
            }
            thisSpeech += "</p><p>";
        }
        
        thisSpeech += "</p>";
        
        generated += thisSpeech;
        generatedLines += thisSpeechLength;
        
        //Enter or exit
        var notice = "<i>";
        
        if (seededRandom() > 0.7){
            if (seededRandom() > 0.5){
                var trans = [];
                for (var i = 0; i < exited.length; ++i)
                    if (seededRandom() > 0.7)
                        trans.push(parseInt(exited[i]));
                if (trans.length > 0)
                    notice += "Enter: ";
                for (var i = 0; i < trans.length; ++i){
                    exited.splice(exited.indexOf(trans[i]),1);
                    entered.push(trans[i]);
                    if (i == 0)
                        notice += displayName[c[trans[i]]];
                    else if (i == trans.length - 1)
                        notice += " and " + displayName[c[trans[i]]];
                    else
                        notice += ", " + displayName[c[trans[i]]];
                }
            } else {
                var trans = [];
                var offset = parseInt(seededRandom() * entered.length);
                for (var j = 0; j < entered.length - 1; ++j){
                    var i = (j + offset) % entered.length;
                    if (seededRandom() > 0.7)
                        trans.push(parseInt(entered[i]));
                }
                if (trans.length > 0)
                    notice += "Exit: ";
                for (var i = 0; i < trans.length; ++i){
                    entered.splice(entered.indexOf(trans[i]),1);
                    exited.push(trans[i]);
                    if (i == 0)
                        notice += displayName[c[trans[i]]];
                    else if (i == trans.length - 1)
                        notice += " and " + displayName[c[trans[i]]];
                    else
                        notice += ", " + displayName[c[trans[i]]];
                }
            }
        }
        
        notice += "</i>";
        
        if (notice.length > 7)
            generated += notice;
    }
    
    //While not done
        //pick random character (incentive to respond)
        //pick random length
        //find starting point
        //while size < length
            //if size > length - 6
                //find ending match
            //else
                //find match
            
    $("#generated").html(generated);
    
    $("#generatedLink").show();
    $("#permalink").attr("href",getDataString());
                    
    $('html, body').animate({
        scrollTop: $("#generatedLink").offset().top
    }, 500);
    
    return used;
    
    //return generated;
}

function modMargin(orig, mod){
    return Math.max(1, parseInt(orig + (orig * ((seededRandom() * 2) - 1) * mod)))
}

function findRandomStart(list, used){
    var possible = [];
    for (var i = 0; i < list.length; ++i){
        if (list[i][0].charAt(0) == list[i][0].charAt(0).toUpperCase() && used.indexOf(parseInt(i)) == -1)
            possible.push(i);
    }
    if (possible.length == 0)
        return -1;
    else
        return possible[parseInt(seededRandom() * possible.length)];
}

function findMatch(list, used, toMatch){
    var possible = [];
    for (var i = 0; i < list.length; ++i){
        if (used.indexOf(parseInt(i)) > -1) continue;
        var match = true;
        for (var j = 0; j < toMatch.length; ++j){
            if (list[i][j] != toMatch[j]){
                match = false;
                break;
            }
        }
        if (match)
            possible.push(i);
    }
    if (possible.length > 0)
        return possible[parseInt(seededRandom() * possible.length)];
    else
        return findRandomStart(list, used);
}
                   
function findEndingMatch(list, toMatch, lastLine){
    var possible = [];
    for (var i = 0; i < list.length; ++i){
        var match = true;
        for (var j = 0; j < toMatch.length; ++j){
            if (list[i][j] != toMatch[j]){
                match = false;
                break;
            }
        }
        a = list[i];
        b = a[a.length - 1];
        c = b.charAt(b.length - 1);
        if (match && (c == '.' || c == ',' || c == ';' || c == ':' || c == '!' || c == '?'))
            possible.push(i);
    }
    if (possible.length > 0)
        return possible[parseInt(seededRandom() * possible.length)];
    else
        return -1;
}