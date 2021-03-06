$('.restart').hide();
    //initial declarations
var obi = false;
var luke = false;
var emperor = false;
var maul = false; 
var battleMode = false;

var player1 = "";
var healthP1 = 0;
var attackP1 = 0;
var counterP1 = 0;

var player2 = "";
var healthP2 = 0;
var attackP2 = 0;
var counterP2 = 0;

var defaultAttack = 0;
var bothAlive = true;
var lastEnemy = false;

function resetP2(){
    player2 = "";
    healthP2 = 0;
    attackP2 = 0;
    counterP2 = 0;
}

//reset function    
function reset(){
    battleMode = false;
    $('.restart').hide();
    player1 = "";
    healthP1 = 0;
    attackP1 = 0;
    counterP1 = 0;
    defaultAttack=0;
    player2 = "";
    healthP2 = 0;
    attackP2 = 0;
    counterP2 = 0;
    
    bothAlive = true;
    lastEnemy = false;
    $("#lukeHealth").html(100);
    $("#obiHealth").html(120);
    $("#emperorHealth").html(150);
    $("#maulHealth").html(180);
    $("#obiDef").attr("id","obiWan");
    $("#lukeDef").attr("id","luke");
    $("#empDef").attr("id","emperor");
    $("#maulDef").attr("id","maul");
    $("#moveLuke2").attr("id","luke");
    $("#moveEmp2").attr("id","emperor");
    $("#moveMaul2").attr("id","maul");
    $("#moveLuke3").attr("id","luke");
    $("#moveLuke").attr("id","luke");
    $("#moveEmp3").attr("id","emperor");
    $("#moveEmp4").attr("id","emperor");
    $("#moveEmp").attr("id","emperor");
    $("#moveObi").attr("id","obiWan");
    $('.fightSection2').removeClass('fightSection2').addClass('fightSection');
    $('.attack2').removeClass('attack2').addClass('attack');
    $('.defender2').removeClass('defender2').addClass('defender');
    $('.yourChar2').removeClass('yourChar2').addClass('yourChar');
    $('.enemies2').removeClass('enemies2').addClass('enemies');
    $("#obiWan").show(0);
    $("#luke").show(0);
    $("#emperor").show(0);
    $("#maul").show(0);
    $("#message1").html("");
    $("#message2").html("");
    obi = false;
    luke = false;
    emperor = false;
    maul = false; 
}

function assignP2(x){
    player2 += x.attr("char");
    healthP2 += parseInt(x.attr("health"));
    attackP2 += parseInt(x.attr("attack"));
    counterP2 += parseInt(x.attr("counter"));
    console.log("player2: "+player2);

}

function assignP1(x){
    player1 += x.attr("char");
    healthP1 += parseInt(x.attr("health"));
    attackP1 += parseInt(x.attr("attack"));
    counterP1 += parseInt(x.attr("counter"));
    defaultAttack += attackP1;
}

// Obi-Wan Click
$(".obi").on("click", function(){
    //Player 1 = Obi-Wan Kenobi                          
    if(obi==false && luke==false && emperor==false && maul==false && battleMode==false){
        
        $("#luke").attr("id","moveLuke");
        $("#emperor").attr("id","moveEmp");
        $("#maul").attr("id","moveMaul");
        $('.fightSection').removeClass('fightSection').addClass('fightSection2');
        $('.attack').removeClass('attack').addClass('attack2');
        $('.defender').removeClass('defender').addClass('defender2');
        $('.yourChar').removeClass('yourChar').addClass('yourChar2');
        $('.enemies').removeClass('enemies').addClass('enemies2');
        
        obi = true;
        battleMode=false;
        $input = $ (this); 
        assignP1($input);
        console.log("player1: "+player1);
    }
    
    //player1 = Luke  --- Player 2 = Obi-Wan
    else if(obi==false && luke==true && emperor ==false && maul==false && battleMode==false){
         
        $("#moveObi").attr("id","obiDef");
        $("#moveEmp").attr("id","moveEmp4");
        $("#moveMaul").attr("id","moveMaul3");
        battleMode = true;
        obi =true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    // Player 1 = Emperor  --- Player 2 = Obi-Wan
    else if(obi==false && luke==false && emperor ==true && maul==false && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        $("#moveLuke3").attr("id","moveLuke");
        $("#moveMaul").attr("id","moveMaul3");
        battleMode = true;
        obi =true;
        $input = $ (this); 
        assignP2($input);
    }

    // Player 1 = Darth Maul  --- Player 2 = Obi-Wan
    else if(obi==false && luke==false && emperor ==false && maul==true && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        $("#moveLuke3").attr("id","moveLuke");
        $("#moveEmp3").attr("id","moveEmp");
        battleMode = true;
        obi =true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    //Player1 = Obi-Wan (re-click)
    else if(obi==true && luke==false && emperor==false && maul==false && battleMode==false){
      
        console.log("you already picked obi");   
    }
    //second player2 = ObiWan 
    else if(obi==false && luke==false && emperor==true && maul==true && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        $("#moveLuke3").attr("id","moveLuke");
        
        battleMode = true;
        obi=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = ObiWan 
    else if(obi==false && luke==true && emperor==true && maul==false && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        $("#moveLuke3").attr("id","moveLuke");
        $("#moveMaul3").attr("id","moveMaul4");
        battleMode = true;
        obi=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = ObiWan 
    else if(obi==false && luke==true && emperor==false && maul==true && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        $("#moveEmp").attr("id","moveEmp4");
        battleMode = true;
        obi=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //third player 2 = Obi-Wan
    else if(obi==false && luke==true && emperor==true && maul==true && battleMode==false){
        $("#moveObi").attr("id","obiDef");
        battleMode = true;
        obi=true;
        $input = $ (this); 
       assignP2($input);

        console.log("Third player2: "+player2);
        bothAlive = true;
    }
});

$(".luke").on("click", function(){  
    // Player 1 = Luke                       
    if(obi==false && luke==false && emperor==false && maul==false && battleMode==false){
        $("#luke").attr("id","moveLuke2");
        $("#obiWan").attr("id","moveObi");
        $("#emperor").attr("id","moveEmp");
        $("#maul").attr("id","moveMaul");
        $('.fightSection').removeClass('fightSection').addClass('fightSection2');
        $('.attack').removeClass('attack').addClass('attack2');
        $('.defender').removeClass('defender').addClass('defender2');
        $('.yourChar').removeClass('yourChar').addClass('yourChar2');
        $('.enemies').removeClass('enemies').addClass('enemies2');
     
        luke = true;
        battleMode=false;
        $input = $ (this); 
        assignP1($input);
        console.log("player1: "+player1);
       
    }
    //Player1 = Obi-Wan --- Player 2 = Luke
    else if(obi==true && luke==false && emperor ==false && maul==false && battleMode==false){
         
        
        $("#moveLuke").attr("id","lukeDef");
        $("#moveEmp").attr("id","moveEmp4");
        $("#moveMaul").attr("id","moveMaul3");
        
        luke = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
        
    }
    // Player 1 = Emperor --- Player 2 = Luke
    else if(obi==false && luke==false && emperor ==true && maul==false && battleMode==false){
        $("#moveLuke3").attr("id","lukeDef");
        $("#moveMaul").attr("id","moveMaul3");
        luke = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    // Player 1 = Darth Maul --- Player 2 = Luke
    else if(obi==false && luke==false && emperor ==false && maul==true && battleMode==false){
        $("#moveLuke3").attr("id","lukeDef");
        $("#moveEmp3").attr("id","moveEmp");
       
        luke = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    // Player 1 = Luke (re-click)
    else if(obi==false && luke ==true && emperor==false && maul==false && battleMode==false){
        console.log("you already picked luke")
    }
    //Second Player 2 = Luke 
    else if(obi==false && luke==false && emperor==true && maul==true && battleMode==false){
        $("#moveLuke3").attr("id","lukeDef");
        $("#moveMaul3").attr("id","moveMaul4");
        battleMode = true;
        luke=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Luke 
    else if(obi==true && luke==false && emperor==true && maul==false && battleMode==false){
        $("#moveLuke").attr("id","lukeDef");
        $("#moveMaul3").attr("id","moveMaul4");
        battleMode = true;
        luke=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Luke 
    else if(obi==true && luke==false && emperor==false && maul==true && battleMode==false){
        $("#moveLuke").attr("id","lukeDef");
        $("#moveMaul3").attr("id","moveMaul4");
        $("#moveEmp").attr("id","moveEmp4");
        battleMode = true;
        luke=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //third player 2 = Luke
    else if(obi==true && luke==false && emperor==true && maul==true && battleMode==false){
        $("#moveLuke").attr("id","lukeDef");
        battleMode = true;
        luke=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Third player2: "+player2);
        bothAlive = true;
    }
});

$(".emperor").on("click", function(){    
    //Player 1 = Emperor                      
   if(obi==false && luke==false && emperor==false && maul==false  && battleMode==false){
        
        $("#emperor").attr("id","moveEmp2");
        $("#obiWan").attr("id","moveObi");
        $("#luke").attr("id","moveLuke3");
        $("#maul").attr("id","moveMaul");
        $('.fightSection').removeClass('fightSection').addClass('fightSection2');
        $('.attack').removeClass('attack').addClass('attack2');
        $('.defender').removeClass('defender').addClass('defender2');
        $('.yourChar').removeClass('yourChar').addClass('yourChar2');
        $('.enemies').removeClass('enemies').addClass('enemies2');
        emperor = true;
        battleMode=false;
        $input = $ (this); 
        assignP1($input);
        console.log("player1: "+player1);
    }
    //Player 1 = Luke --- Player 2 = Emperor
    else if(obi==false && luke==true && emperor ==false && maul==false && battleMode==false){
        
        $("#moveEmp").attr("id","empDef");
        $("#moveMaul").attr("id","moveMaul3");
        emperor = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    //Player1 = Obi-Wan --- Player 2 = Emperor 
    else if(obi==true && luke==false && emperor ==false && maul==false && battleMode==false){
        $("#moveEmp").attr("id","empDef");
        $("#moveMaul").attr("id","moveMaul3");
        emperor = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    // Player 1 = Darth Maul --- Player 2 = Emperor
    else if(obi==false && luke==false && emperor ==false && maul==true && battleMode==false){
        $("#moveEmp3").attr("id","empDef");
        
        emperor = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);

        console.log("player2: "+player2);
    }
    // Player 1 = Emperor (re-click)
    else if(obi==false && luke==false && emperor==true && maul==false && battleMode==false){
      
        console.log("you already picked emperor");
        
    }
    //second player2 = Emperor
    else if(obi==false && luke==true && emperor==false && maul==true && battleMode==false){
        $("#moveEmp").attr("id","empDef");
        battleMode = true;
        emperor=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Emperor
    else if(obi==true && luke==false && emperor==false && maul==true && battleMode==false){
        $("#moveEmp").attr("id","empDef");
        battleMode = true;
        emperor=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Emperor
    else if(obi==true && luke==true && emperor==false && maul==false && battleMode==false){
        $("#moveEmp4").attr("id","empDef");
        $("#moveMaul3").attr("id","moveMaul4");
        battleMode = true;
        emperor=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //third player 2 = emperor
    else if(obi==true && luke==true && emperor==false && maul==true && battleMode==false){
        $("#moveEmp4").attr("id","empDef");
        battleMode = true;
        emperor=true;
        $input = $ (this); 
        assignP2($input);

        console.log("Third player2: "+player2);
        bothAlive = true;
    }
    
});
$(".maul").on("click", function(){ 
// Player 1 = Darth Maul                          
    if(obi==false && luke==false && emperor==false && maul==false && battleMode==false){

        $("#maul").attr("id","moveMaul2");
        $("#obiWan").attr("id","moveObi");
        $("#luke").attr("id","moveLuke3");
        $("#emperor").attr("id","moveEmp3");
        $('.fightSection').removeClass('fightSection').addClass('fightSection2');
        $('.attack').removeClass('attack').addClass('attack2');
        $('.defender').removeClass('defender').addClass('defender2');
        $('.yourChar').removeClass('yourChar').addClass('yourChar2');
        $('.enemies').removeClass('enemies').addClass('enemies2');
       
        maul = true;
        battleMode=false;
        $input = $ (this); 
        assignP1($input);
        console.log("player1: "+player1);
   
    }
    // Player 1 = Luke --- Player 2 = Darth Maul     
    else if(obi==false && luke==true && emperor ==false && maul==false && battleMode==false){
        $("#moveMaul").attr("id","maulDef");
        maul = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);
        console.log("player2: "+player2);
    }
    //Player1 = Obi-Wan --- Player 2 = Darth Maul 
    else if(obi==true && luke==false && emperor ==false && maul==false && battleMode==false){
        $("#moveMaul").attr("id","maulDef");
        maul = true;
        battleMode = true;
        $input = $ (this); 
        passignP2($input);
        console.log("player2: "+player2);
    }
    // Player 1 = Emperor --- Player 2 = Darth Maul
    else if(obi==false && luke==false && emperor ==true && maul==false && battleMode==false){
        $("#moveMaul").attr("id","maulDef");
        maul = true;
        battleMode = true;
        $input = $ (this); 
        assignP2($input);
        console.log("player2: "+player2);
    }
    // Player 1 = Darth Maul (re-click)
    else if(obi==false && luke==false && emperor==false && maul==true && battleMode==false){
        console.log("you already picked maul");
    }
    //second player2 = Maul
    else if(obi==false && luke==true && emperor==true && maul==false && battleMode==false){
        $("#moveMaul3").attr("id","maulDef");
        battleMode = true;
        maul=true;
        $input = $ (this); 
        assignP2($input);
        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Maul
    else if(obi==true && luke==false && emperor==true && maul==false && battleMode==false){
        $("#moveMaul3").attr("id","maulDef");
        battleMode = true;
        maul=true;
        $input = $ (this); 
        assignP2($input);
        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //second player2 = Maul
    else if(obi==true && luke==true && emperor==false && maul==false && battleMode==false){
        $("#moveMaul3").attr("id","maulDef");
        battleMode = true;
        maul=true;
        $input = $ (this);
        assignP2($input);
        console.log("Second player2: "+player2);
        bothAlive = true;
    }
    //third player 2 = maul
    else if(obi==true && luke==true && emperor==true && maul==false && battleMode==false){
        $("#moveMaul4").attr("id","maulDef");
        battleMode = true;
        maul=true;
        $input = $ (this); 
        assignP2($input);
        console.log("Third player2: "+player2);
        bothAlive = true;
    }
    
});

//When the attack button is pressed
$(".attack").on("click", function(){
    if(player1 && player2 && bothAlive&&lastEnemy==false){
        $("#message1").html("You attacked "+player2+" for "+attackP1+ " damage.");
        console.log("You attacked "+player2+" for "+attackP1+ " damage.");
        healthP2 -= attackP1;
        //decreases health on the buttons depending on who player 2 is
        if(player2=="Obi-Wan Kenobi"){
            $("#obiHealth").html(healthP2);
        }
        else if(player2=="Luke Skywalker"){
             $("#lukeHealth").html(healthP2);
        }
        else if(player2=="Darth Sidious"){
             $("#emperorHealth").html(healthP2);
        }
        else if(player2=="Darth Maul"){
             $("#maulHealth").html(healthP2);
        }
        //check that player 2 is living
        if(healthP2>0){
            attackP1 += defaultAttack;      //incriment player 1 attack
            
            $("#message2").html(player2+" attacked you back for "+counterP2+" damage.");
            console.log(player2+" now has "+healthP2+" health.");
            console.log(player2+" attacked you back for "+counterP2+" damage.");
            healthP1 -= counterP2;          //decriment player 1 health 
            //decreases health on the buttons depending on which char is player 1
            if(player1=="Obi-Wan Kenobi"){
                $("#obiHealth").html(healthP1);
            }
            else if(player1=="Luke Skywalker"){
                 $("#lukeHealth").html(healthP1);
            }
            else if(player1=="Darth Sidious"){
                 $("#emperorHealth").html(healthP1);
            }
            else if(player1=="Darth Maul"){
                 $("#maulHealth").html(healthP1);
            }
            console.log("you now have "+healthP1+" health.");
            //check if player 1 is dead
            if(healthP1<=0){
                bothAlive = false;      //set the trigger that both players are not alive
                
                $("#message1").html("You died. Press Restart button to continue!");
                $("#message2").html("");
                if(player1=="Luke Skywalker"){
               
                    $(".luke").hide(0);
                }
                else if(player1=="Darth Sidious"){
       
                    $(".emperor").hide(0);
                }
                else if(player1=="Darth Maul"){
    
                    $(".maul").hide(0);
                }
                else if(player1=="Obi-Wan Kenobi"){
              
                    $(".obi").hide(0);
                }
                console.log("You died. Press Restart to continue!");
                $('.restart').show();
                
            }
            
        }
        //check if player 2 is dead 
        else if(healthP2<=0){
            //
            if(!(obi&&luke&&emperor&&maul)){
                attackP1 += defaultAttack;
                $("#message1").html(player2 + " was defeated. Pick new enemy");
                $("#message2").html("");
                //hide dead players
                if(player2=="Luke Skywalker"){
                    
                    $(".luke").hide(0);
                }
                else if(player2=="Darth Sidious"){
                 
                    $(".emperor").hide(0);
                }
                else if(player2=="Darth Maul"){
                  
                    $(".maul").hide(0);
                }
                else if(player2=="Obi-Wan Kenobi"){
            
                    $(".obi").hide(0);
                }
                console.log(player2 + " was defeated. Pick new enemy");
                resetP2();             //reset player 2 
                bothAlive = false;
                battleMode = false;
            }
            else if(obi&&luke&&emperor&&maul){
                lastEnemy = true;
                if(player2=="Luke Skywalker"){
                
                    $(".luke").hide(0);
                }
                else if(player2=="Darth Sidious"){
                  
                    $(".emperor").hide(0);
                }
                else if(player2=="Darth Maul"){
                
                    $(".maul").hide(0);
                }
                else if(player2=="Obi-Wan Kenobi"){
           
                    $(".obi").hide(0);
                }
                $("#message1").html("The force is strong with this one... You Win!!");
                $("#message2").html("");
                
                console.log("The force is strong with this one... You Win!!");
                $('.restart').show();
            }
        }
        else if(healthP1<=0){
            bothAlive = false;
            console.log("You died. Press Restart to continue.");    
            $('.restart').show();
        }
    }
    
});
//onclick - reset button 
$(".restart").on("click", function(){
        reset();
});