const chalk = require("chalk");

const printImage = ({ size }) => {
  if (!size) {
    console.log(small);
  } else {
    switch (size[0]) {
      case "small":
        console.log(small);
        break;

      case "medium":
        console.log(medium);
        break;

      case "large":
        console.log(large);
        break;

      default:
        console.log(`${chalk.red(size[0])} is no valid size`);

        break;
    }
  }
};

module.exports = printImage;

const small = `
                                      -:/ossyhhddhddhhhhys-                                        
                                    .+syhhhhhhhhdddhdmddmmNNy/--                                    
                                .-+ohdddhhhyhdddddhhdmmmdmdmmdyo/:.                                 
                                ./hdmmdhysydmNmdmhyhmNmNdmdmmmdmdys:                                
                               .:shdmdyddyydmmdddhhmNNmNmNmNdmmmdyso-                               
                              :oyhmmmmmmmhhmdyhhdddmNNmdhdmNmhddhhhh+                               
                             /hmNNNdmmmmdhhyhyhyhhhhhhso+oshmdddhyhhmo                              
                            +mNNmmmdysyo/////++++///+//:://oyyddmmdmmy.                             
                           .yNNdhdhso//::---------------::://+ysmNhymd-                             
                           -ymNdddy+/::::---------------:::::/ooyhyhdh:                             
                           .+dmdhds+/::::----------------::::/ooyhhmNmo                             
                           .:dmhhms+/:::------.----...---::::/osydmmNN+                             
                            -yddmms+/::::-----..----.---:::::/oshNNNNd/                             
                            .+ddmms+:::::::::--------::::::::/+shmNNmh.                             
                             /hmmmos++++///////:::://///+++++ossydMNmd.                             
                             .smMyshhdhddmdmmddo//sddmmhmddhhhdysyNdmy                              
                              +dNysyhd+///:+soy/::+yoso:://+hhyysyNhy/                              
                               odho//+oo++//::/:--//:://++os++/+ydmss.                              
                               /sh+/:://///::://--//::::////::/ohNys/                               
                               .osso+/::::::/++:--/+//:::::://oydhoo                                
                                /+syso+/::::/+/:--:/++::::/+oshhho+-                                
                                  /yyso+/:::/so/::+ss/:::/+osyhh+                                   
                                  -yhyo+/:::/ymdddmmh/:::/+oyyyd-                                   
                                   oyhs+////+shhdmyhso////+ohyhs                                    
                                   .ohyoossssyysyyoosossys+shhy.                                    
                                   -ohyssyhhyyysoooyyyhhhyoyddy.                                    
                                 .ohydhhsso++///++////+osyymdmdy/                                   
                              ..+dNhodmmhhssyhyhhhhyyysyhhmmmmhyNh:                                 
                          ./oyddmmNhoymmmhyhysyssossosyhyhNmmmsyMMNy/-                              
                   .:/+oyhmmmmdmmmmms+dmmmyoo+++++/++osydmNmmyohNMMNNmhs+:.                         
              :+shdmmmmmmmmmmdddmmmmh+ymmmmhyhhysysyhhhmNmmmy+smNNNNNNmddddyo/-.                    
         :/oymNNmmmmmmmmmdmdddddmmmmNo/sdmmmmNmNmmmNNNNNNmmy++hNmNNNNmmddddddddhys+:.               
`;

const medium = `
                                                                                  ..-:++ooyyhhhhdddmhhddddhyyyysooso/-                                                                                  
                                                                             .-/+osyyhyyyyyydddddddhhhddmdmdhdddmmmdmds-   . .                                                                          
                                                                          .:/+oshhhhyyhhdhhhhhdmdddhhdhdddmmdydNNMNmmNNms:-....                                                                         
                                                                        .-oyddhhhdhhhhhhhdhhhyhhddmmmmhhdmmmmddhdmmmNMNNmds+/:::.                                                                       
                                                                    .-:/shdddddhhyhdhhyhhhhdddddhdmhddddmmmmNmmmmdmmmmmmNNdyo+:+:--.                                                                    
                                                                .-//oyyyhdddmmmmddhdhhhyhdddmmmdhdmmddhhdddmdddmhNNNddddmmmddhyyo+:::.                                                                  
                                                                  -/sdhdmmNmmmmdhysosyhdmNmmmddhmdmhyssydmmNmdNNmymmdhdmmNNdhNNmmhyss/-.                                                                
                                                                 .-+hhhmmNNdhyyyyyyysyhmNNNMNmdmNdhhhyhddNNNNNMmNddddhmddNNdddNNmmdyys/:.                                                               
                                                               ..-+syhhddmdyoshmmdhhsyhddmNNmddNNdyhyymmmNmNNmNNNmNNmdNNhmNNmNNddhsssos/..                                                              
                                                              ..-+oyhdddmmdhhhmmddhssydmNNNdmhhdmdhhdmmmNNNMmNNmmNNmNNmmddmNNmmNNmhyhsos:.                                                              
                                                             .:/ssyhdddNNNmmmdmmmdysydmNNNhydyhshyhdmyhmNNNMNmNmdmmNNNNmddddmmmdmmdhyhy//:.                                                             
                                                            :oohhyhdmNNdmmdmmmmmmmddddddhysshddyddmNmmmmNNNMNmdhyhhdmdNNNmhhhdhdhhyydhmmy.                                                              
                                                          .:sydddmNNMNmdmmmNNNNmmdmdhhyyhyhhdmmdddddhddmmNmmdhyssssyyydNNNhydyydhsssshhdNm+.                                                            
                                                          :sddmNNNMMNmdmNNNmmmmddhhddddhdhyyysoshyhhhhyyyhysoo++//++ooyhddmdddmmmhyddyhdmddo-                                                           
                                                         /hmmNMMNNNMNmmmdddhhdhysooo+oooooooooooooo++++oso++/////////++shhhhdhmmNddhmNmmNmh+.                                                           
                                                       ./dNNNMNmddmmNmmhsssssso/:::::::::://+++///////////:::::::::://+sysshmhhdNNNmyymNNmhy:                                                           
                                                      .-yyhNNNmdsdymNhhooo+///:::::-------::::-------::::-------::::://+o+oyhyyhdNMNmhydmmhs:                                                           
                                                      .-/hNNmNmyhddNdyooo+//:::::::------------------------------:::://////+ssoyhmNmdhsymNNd:                                                           
                                                       :hmNNNNdhddmdhso+o/:::::::::----------...----------------::::::::::/+oo+oydmhdssshmmms.                                                          
                                                      ./ohNNNNdmdhdhyso++/:::::::::------------------------------:::::::::/+ooooshhshyddhdhs/-.                                                         
                                                      ..-smdNmdmhdhhyo++//::::::--:------.-----------------------:::::::://+ooooshhhyydMmmdho                                                           
                                                       .:ydmNhmdhyhdy+++//::::::::::------..-.-------------------:::::::::/+ooossyyddhdmNmNNm/                                                          
                                                       .:+smdmhdyyddy+++//:::::::-----.........-------...-.-------::::::::/+ooosyshhdmddNMNNm/                                                          
                                                       -:-mmNmhhydmmso++//::::::-------..-------------......------::::::::/+oossshmdmmmdmNNd+-                                                          
                                                       ..:ddNhhhhmNdyo++//:::::::-----------------------..-------:::::::::/+ossoyhNNNNmdNmNm+.                                                          
                                                        .:syddhhdmmmyso++/:::::::--------........-.----...-------:::::::://+ossyyhmNMNNNNmNds-.                                                         
                                                        .-o:yhdmdNNmyso+/::::::::::::::---------------------:::::::::::::://+ssyhdmNMNNNNmd/--.                                                         
                                                         -:omhhddNNmsso+/::::::::::::::::----:------------::::::::::::::::://ossyhmNNNmmmdN+.                                                           
                                                         .-ydddhhNMdoso+/::::::::---:::::::::::---:::--:::::::::::::::::::://sssyydNNNNmdNNd:                                                           
                                                          :+hhmNdNMhoooo++++++++//::::/:://////::::/::://///////+++++++++++osyysyshNMMNmdNNy.                                                           
                                                         ..-+ymNNMmsosyhyyssssyhhhhhyyyssyyssso/::/++ooooyyyyyyhdhhyysoossyhddhsssymNNNdmNms                                                            
                                                          .-ohdNMMmoosyhhhhmmddNmdNNmmmNNmmmddo+////ohddmmmNNNmdNmdmNmdddyyyhdhsssshNNddNmdo                                                            
                                                            /hhNMMhsssyhhmNNd++hsysy++ydmdmmNmsoo++/+ymmddmmdy+:yssshy+dNNmhhhyyysshNNdhdhy+                                                            
                                                            -yhmMmyssssyhddh+/::///:--/+ooooss+::--::+ysoosoo/:--:///::+ydddhyyysyyhNNhyhys-                                                            
                                                             /ydNmhyso+oooosso+//////+++/////+/:-.-::+++////+/////://++sysossoossyydNNysyy+                                                             
                                                             .osmmdyo+//+/++osssooo++/::::::://:---:://:::::////+ooossyso+++//+osyhmNdyoss-                                                             
                                                              :ssddyo+///://///+///:::::::::///::--:///:::-:::::://+++++////://oshdNmdy+s+                                                              
                                                              .ssydd++///:::///////////::::://+:---::///::::::://////////::::/+oyhNNdyosy-                                                              
                                                               ossyho++//:::::::::::::::///////:---::++////:::::::::::::::::/+oyymNdssys/                                                               
                                                               /ssoyh+so+//::::::::::::://+/+//:-.-::/++////:::::::::::::://+oyydmds+oo+.                                                               
                                                               .oooohssso++//:::::::::::/+ooo/::---::/+o+o+/:::::::::////++osyhhdmyo+os-                                                                
                                                                /ssosyyyyso+///:::::::::/++//:::----::/+/++/::::::::://++oosyhhdddsoos+                                                                 
                                                                 ...-yyyyysoo+//:::::::::////::-----::////+/:::::::///+oosyyhhhdd/:+/-                                                                  
                                                                    .syyyyssso+///:::::::+oo+/::---:/+ooooo/:::::://++ossyyhhhhdh.                                                                      
                                                                     syyhhysooo+//:::::::ohddyo////oshdddho::::::://+ooosyhhyyhds                                                                       
                                                                     +yyhhhyooo+//:::::::/ymNNmddddmNMMNmh/:::::::/++oooshhyyyhd/                                                                       
                                                                     -yyhyhhs+++//:::::::/+ydmNNNMMNNmmdyo/::::::://+ossyhhsyydd.                                                                       
                                                                      ohyshhyo+++//://://+oyhhddhNNdyyhhyso/////:///++osyhyyydmo                                                                        
                                                                      -yyshdys+++/+//++++oyhyyysyddhssoyyyyso+++oo+/++osyhyyhmy.                                                                        
                                                                       -syyhhso++oooosssosyyyysyydhysooyoys+sossysso++syhhhhhh.                                                                         
                                                                        .oyhysoooshyyshhysssyssosyyyo+o+ooooysyyyhhsoosyhdyhd-                                                                          
                                                                        -shhhyssosyhhddhyyysoos++++//ossyyyyhhdhhdhhsosyddddN:                                                                          
                                                                      -oyddhhsssooyyddhyyhhdhhhhhyyyhhhhhyyyyyhhhhysosyhdhmNNh/                                                                         
                                                                    .oddshdddhhssssoo+////:::::::::::::::://++++osyssydmddmmmhhy-                                                                       
                                                                   +dmmyosdddddhhyyo++/+++/////+o++++//////+++oosyysyhmmdmmmmhymmo.                                                                     
                                                                 /hmNmmsosdmmdmmdyhssssssyyyssyhhdhhdhysssysssyhhhhhdNmmmmdmmysdMNd+                                                                    
                                                            .-:+hmNNNNmso+hmmmmmmhddhyyhhhddhddmdmdmmdmdddhhyhhdhhhdmmdNmmmmdsshMMMNh/                                                                  
                                                        -/oydddmmmmNNNmso+smmmNNmmhdhyhhhhyyhdhhyyssyyyyyysyyhdhyshhmNNNmmmmhoohMMMMNNh+.                                                               
                                                   .-/shmNNNmmmmmmmNNmmys++yNmmmNdhhyshysso+oo+//+////+///+oyyhyyyddNNmmddmms+ohNMMMMNNNmho:-                                                           
                                            .--:+syhmNmmNmmmmddmmmmmmmmdso++dNmmmmmdys+oo++/++////+//:///++ossyhhhmNNNmdmmms++ydNNMMMMMNNNmdhys/-.                                                      
                                    ..-/osyhhdmmmmmmNmmmmmmmdddmmmmmmmmmyo++sNmmmmmmhso+sooso+o+o+os+++o+ossosyhdNNNmmdmmmyo+shmNNNMMNNNNNNmmmmddhs+:.                                                  
                               .-/oyhdmmmNmmmmmmmmmmmmmmmmmdddddmmmmmmmmdo++ommdmmmmmhyoysyyhsssssssosssyhyyysddNNNddmmmmyo+oyhNNNNMNNNNNNNNmddddddddhyo/-.                                             
                           -+shdmNmmNNNmmmmmmmmmmmmmddmmddddddddmmmmNmmmmyo/+ydmmmmmmmmddhdddyhyyyyyyyyyhddhddNNmNNmddddyo+oyydNNNNNNNNNNNNNmddddddddddddhhso/:.                                        
                      .-/sdmNNNNNmmmNNmmmmmmmmmmmmmmdmdddmdddddddmmmNmmmNmy//oohmddmmmdmNNNNNmNmmdddddmmNNNNNNNNmNmmdmdy++/syhmNmNNNNNNNNNNNmddddddddddddddhdhhhys+/-                                   
                 -/oydmNNNNNNNNNmmmmmmmmmddddddmddmddmdddmdddddddmmmmmmmmNy/:/+odddmmNmmmmNNmNNNmmmmmNMNNNNNNmNNNNmmmds+///+ydNmmNNNNNNmmmmmmmddddddddddddddddddhhhhhys+:.                              
`;

const large = `
                                                                                                                            ...--::/+++yhhdhhyhddmmmmmhyyhdddhhhyhyoyhso+++o+/-.                                                                                                                            
                                                                                                                        .-:://++osyyyysyosyyhhhhhhhhhmmddmmdmdddysydhhyhddhyhhyyo-.                                                                                                                         
                                                                                                                   .-:+oossyhhhhdyyhhyyyyddmmddddddmdhyhhhddmmdmmmhhmmmmmmNNNdmmmhs-.    .  .                                                                                                               
                                                                                                               ...-:++oshhhddhyysyyhdhhhyhhhyhdddhddhhhdddddmdddmNdyydNNNMMNNmmmNNmds:..... ...                                                                                                             
                                                                                                              .-/yyhhyhhhhhyyyhhhdhdhhhhhdhhhhdmmNNmmmddhyyyydmmmmmdyyhdmNNmmmmNNNNNmdy+::-...-.                                                                                                            
                                                                                                            .-:oyhhmdhhyhhddddhhhhdddhdddhhhhhhdhhdmNmNmmdddmmmdmNNmmmdhydmmdmNMMMNNmNmyo++//://-.                                                                                                          
                                                                                                        ..-:+yhdddhddddhhyhddhhhhyyhddddmmmdhhhyyydNmdddddhhddmmdmNmmmmNmhhdmmmmmmmNNNNdhyo+/:/+/:--..                                                                                                      
                                                                                                  ..--:+ossyyddddddddddhhyhhdmdddhhysssyyhddmNNNddmdhhddhhmmNNdmmmNdmhhmdmNNmmdmmdmdmmNmdhyyo/oo/:-----...                                                                                                  
                                                                                               ..-://+syhyyyhmdmmmmmdmmmmddhdhyhhhhyhdmNdmNmmmdyhddmmmdddhyyyhdddmmydmmmydMNMNmdyddddNmmddmNdhdhss+//:/-.                                                                                                   
                                                                                             .     -:+oyddhdmmmNNmmmNNNmdhyoo+ossyhdmmmmdddddmhhmddmdhysoosshdmdmmmhmNNMmshmmNmydmNmdNMNdhhmNNmmmdhsssoo:.                                                                                                  
                                                                                                   .-:sddhhmdNNNmmmddhssssssssyhdhhmNNNNNMNNddhmNmmdhyyshdhdmmNMMNMNmNmmNmsdmmdhdymdmNNNmhdhmMmmmmmdysys+/:.                                                                                                
                                                                                                  .:+yddyddNNNNNmdhyyyyhdhyyyysoyhmNmNNNNMMmmmmmNmddhhhyyhdddmNNmNNMNMMmmNdhddddymNhymNMmdhhmmNNmmddhhhhs+::.                                                                                               
                                                                                                ---/+syyhhhhddmdhsoosyddmmmdhhyyyhmdddmNMNmdmmNNNmdyyyhssmNmmNNmNNNNmMMNNmmNNNmdmNNMdhmNNMmdMNdmddhsossssyo:-.                                                                                              
                                                                                              .-.-:oyhyhhhdmmmmdhysshdNmdhhhhsoshyhdmNmNNmdmdydNNmdyhyyhmNmdNmNNNMmNNNNmmmmNNmmNmNNmdhmNNmNmmMMmdhhysoso++so...                                                                                             
                                                                                             ...-+oosyhmdmddmNmmdddhhmmmmddhsosoydNNNMNmdhNdyhdhmhdhdhmmdddNNNNmMMmhNNmmdNNmmmMNMNdmmdhdmNNNNdmMNNmdhhdhyooyo-.                                                                                             
                                                                                            ..:/sssshddddydNNNmmmmmddddmNmdysoshmNNNNNmdshdysyysdyyyyhdmssdmmNNNMMNmmmNmdmmmNNNNMNNNmdddmdNmmmmdmmmddyyshh+-:+:.                                                                                            
                                                                                           -+o+hhyyhhydmmNNmmNmmmdmmmmmmmdddhhhdmNNNdmmsosshhhsshdddmmNdddmdNNNNNMNmdmNdhhddmmNNNNNmddddhhhmmdNdhdhdhhhyhmmy/...                                                                                            
                                                                                         .:ooshdhhhhhmNMMNmhmmdddNNmmmmmmmmmddddhhhhyhooyyhmmdhhddhmmNmdmmmmmmmmNMNNddhyyyhhddmhdmNNNNmyyhyyhsmdhyhsyydmhhmNNo.                                                                                             
                                                                                        -/oshddhhdmNNNMMNmhdmddmmNNNmmmmmddmmdhhhhyyyyshhhdmmmddddmmmdhhdmdmmNNNmmmdhhysssssyyyyyhmNNNmdsydhyomddsossosyhdhdmNd+-.                                                                                          
                                                                                       .-/hhdmmmmNNNNMNNmdymmNNNNNNNNNNmmddddddhhhyhddhyyhdddhyyhdhhhhhdddhhhdmhhhsysoso++++osossydmmmmmdydddddmdhsshhysyyhhmmmdo-.                                                                                         
                                                                                      ./shmmmNNNMNNMMMMNmddmNmNNmdddmdddhhhhhhhdhhhhhhyyysssooosyyyyhyhhysssshysso+o++++////+++oosyhhddmdddhdmmmmdhhhdmhhhhdmdddh+-.                                                                                        
                                                                                     ./hdmmmNMMNMNNNNMNNmmdmddmdhhhdddhyysooooooooooosoo+oooossooossooo+++oossoo++/////////////+++oyhhhhydmhdmmmNdddddmNmmdmNNmdy:.                                                                                         
                                                                                     -ymmmNMMMMNmmmmNmmNmmmdysyyssyhhsso+////::///:://++++++ooo+++++////+++++///////:::::::::////++syhysydmdhddmNNdmmhydNMMNNmmhsy-                                                                                         
                                                                                  .-odNNmNMNNmdddhdNdmNmmmdyosoosssso+//::::::::::::::::////////:/://:::/::::::::::::::::::::://+/+syssosdmhyhhmmNNNNmhsshdNNmdhyho.                                                                                        
                                                                                 ..-yhyydMMNmmmmsydyhmNmddyoooo++/++/:::::::-----------::::::-------:--::::::-:--::-----:::::::///+ooo++ohdhyyhhdNMMMNmmhyyddddhss+.                                                                                        
                                                                                 ..:+/sNMMmmNNmsshdydNmyhsooso+///::::::::::--------------------------------:------------:::::://///++//+oyyssshdmNMNNmmhyydNNNmmy:                                                                                         
                                                                                 ...-yNNNNmNNmdhddhdNmmysoooo+//::::::::::::-----------------....------------------------::::::::::/:///++osoooyhhNNNmdhyossdNNNNd/.                                                                                        
                                                                                   :hmmmmNNmNmhymddmmdhso++oo+/::::::::::::::--------.-.---...---------------------------:::::::::::::///+oooo+syddmdhdyosssydmNNNh:                                                                                        
                                                                                  .shydNNNmNNmhmmdhdddyyso++++/::::::::::::::--------.------------------------.----------:::::::::::::://+ooo+ooshddyyddsymyhhdyshy/-..                                                                                     
                                                                                 .::/sdmmmNNNddNdydddyhsoo+++//:::::::::::::----------.----------------------.-----------:::::::::::::///+oosooooyhdssyhhhMmhmddyo/..                                                                                       
                                                                                 ...-:ymmdNNdhmmhhmhhhhoso+++//:::::::::---:------.---.------------------------------------:::::::::::///+oooosooyhhhhyysdNMNdmhdys.                                                                                        
                                                                                   .-+yddNMmhdNdhdyhddyooo+++/:::::::::::-::------------.--.------------------------------:::::::::::////+oooososyhhymhsymdNNNmNmmmo                                                                                        
                                                                                   .-oyhhNmhdmddhhshmdyo++++///::::::::::::::---------.........---------.......--.--------:::::::::::::/+oosoososyyhsdmhdhdmNmNNMNmh/                                                                                       
                                                                                  ..-++ohNmdmhddhyhdddyo++++///::::::::::--------..-..........-----------.....--.-..-------::::::::::::/++oooossyssdsdmmdmhdNMNNNMNy-.                                                                                      
                                                                                  .-/:-yNmmNmhhhysdmmdys++++//:::::::::--:---------..------..-----------......--..--------:::::::::::::/++oooosssyymhmhNmNmdmNMNmdyo.                                                                                       
                                                                                  ---.:mNdNNhdhhyhmNNdyoo+++///:::::::::---:-------..--------------------.........---------:::::::::::://+ooossooyhmmmmNNmdmmmNMNh+:-                                                                                       
                                                                                  ....:hmdNmhhhhhdmNmdyoo+++///::::::::::--:---------------------------------..-----------::::::::/::::/++osssooyydmNNNNMmmmmNmmNmo-.                                                                                       
                                                                                    .-/sdhmmhdhhddmmNmhsso+++/:::::::::::----------.............-.--------......---------:::::::::::::///++ssssyyydmNMMNNNNmNNNNmhy:.                                                                                       
                                                                                     -:osoydhhhddmmmNmhsso+++/::::::::::::---------.-............-------.-...-------------::::::::::::///++sssyyyydmmNMNNNNNNmmNmys+-..                                                                                     
                                                                                     --o+:yhhdmddmNmNmyssoo+//::::::::::::::::::::--------------------------------:::::-:::::::::::::::///+osssyhhdmmNMMNNNMNNmdy/---..                                                                                     
                                                                                     --/o/ddhddddmNmMmsssoo+/:::::::::::::::::::::::------------.---------------:::::::::::::::::::::::////+sssyhhdmNNMMmmNNNmdNy.                                                                                          
                                                                                     .--:hNdhhdddmNNmdssso+//::::::::::::::::::::::::::-----:--..----:--------::::/:::::::::-:::::::::::///+osssyhhdmNNMNNmmmmdNN+.                                                                                         
                                                                                      ../dhdmdhhydMMNhosso+//:::::::::--------:::::::::::--::::---:::::---::::::::::-::::::---::::::::::://+ssysyyydmNNNNNNmddNNNd:.                                                                                        
                                                                                       :oshddmmdhdNMNhosooo+////:///////::::::::::::::://::::/::-::::/:::::::::::::::::://+//////+///////++ossysyysyNNMMMNNmddMMmo-.                                                                                        
                                                                                      .:-/shhmNNmmNMmsososyso++oo+++oosoo++////////////+++/+///::::://::///////+/////++ossoooooo++oooooosssyyyyosyssdNMMMMNmdmMNmo.                                                                                         
                                                                                      ...-/yymNNNNMNh+oosyhdhyyyssssssyhhhhhhhyhyyyssyyyssosoo+/::::/++++oooosysyyyyyyyhhhhhhysso++ossyyhhdddhyosssshNNmNMdddNNNdo                                                                                          
                                                                                      ...-+hydNNNMNNyooosyhdhhyyyhdddmNNNmNNNNNmmmmmmmmmddhhhs+//::/++syhhhhdmmmmmNNNNNNNMNmmNNmddhyyssyyhdddhhsssssymNNNmhhNNmmho                                                                                          
                                                                                        .-+hhyNMMMNmsoossyyyhhhdmNNmdyNNdhdmmNmhmmmNNNNmmmmmdoo+//////+sdmmmmmmmmNNmmdhyNmhhddmMmdmNNmdhyyhhhhyoysssydNMNdhmNmddy+                                                                                          
                                                                                          :yhhdNMMMdssssyyyhhdmNNNms/:yhosyssh+:/shmmdddmmNNdsoosooo+++ohdNNmddmdmmds+::yyoss+ydo/smNNNNdhhhhysyyssssdmNNmhhddhhs/                                                                                          
                                                                                          .syhhNMMmhsssssyyhdddmmho/:-:+oo+++:---:+shyhhysydyo/::::::::/oymysyhhyyso/:-.-/++ooo+::/oymmmdddhhhhyssyyydmNNdyyhhyso-                                                                                          
                                                                                           /shdNMNmhysssssssyhhhhho//:--:::----:://+++//+/+oo/::------:/osso///++++/::----------://oshhhhhhyyyyssyyyydmMNdyyyhys/                                                                                           
                                                                                           .oshdMNddyssoo+o+ooooosyso++/////////++++///////++/:::-.--::/+/++/:////++///:///:/+/+++osysooossoooossyyyydNMmhssyhso-                                                                                           
                                                                                            -oyyNmddhyoo++//++/++osyysooooo++++++//:/::::::///::-----::/+/:::::::://++++++oooooosyyyso+/+++++++osyyhdNMNdhsosyo/                                                                                            
                                                                                             :sshmmddsoo++//////++++osssssso++/::::::::-:::///::-----://+/::---:::::::://++ooosssso+++++//////+ooyhhdNNmdys+oyo.                                                                                            
                                                                                             .osohmdds+o+////::://////////:::::::://:::::::////::----::////:::---::::/:::////++++++++/////:///+osyhdmNNdhyo+os/                                                                                             
                                                                                              +soshddy+++////:::://////////////////::::::://///::----::/+//::::::::::://///////////////::::///+osyhmNNmhys+oys.                                                                                             
                                                                                              /yysyhmdo+o+///:::::://////////////::::://:////+:::----::/+////::::::::::///////////::::::::://+osshdNNNhyooshy/                                                                                              
                                                                                              -ssssyhhs/oo+///::::::::::://:::::::::://////////:-----::/++///://:::::::::::::::::::::::::///++syydmNNhsoshyso.                                                                                              
                                                                                              .oosssshh+oso+////:::::::::::::::::::::/+///////::--.--::/+++///////::::::::::::::::::::::///+osyyhdmmdyo+ssoo-                                                                                               
                                                                                               /ssoooshs+ssoo+////:::::::::::::::::::/++++o+//::-----:::/+o+/+++//:::::::::::::::::/:://+++osyyhddmhso++sso/                                                                                                
                                                                                               .oooo+oyhosssso++////:::::::::::::::::/+ooos+/:::-----:::/+oo+oo+//::::::::::::://////+++oossyhhhddmyso++os+.                                                                                                
                                                                                                +sooooyhysyyssoo++////:::::::::::::::/+o+++/::::------:::/++++oo+/::::::::::::::////+++oosyhhhdhdddyoo+oss-                                                                                                 
                                                                                                ./oso++yyyyyyysooo+/////:::::::::::::/++////:::-------::://///+o+/:::::::::::::///+++oossyhhdhhdddyysssss/                                                                                                  
                                                                                                   .. .oyyyyyyyssooo+///:::::::::::::/+/////:::-------:::/+////o/:::::::::::////++ooossyyyhhhhhddy--/++:.                                                                                                   
                                                                                                       /yhsyhyyyyssso++///:::::::::::/+++++/:::-------://+o++++o/:::::::::::///++oosssyyyhhhhhhddo.                                                                                                         
                                                                                                       :yhyyyyyssssooo+////::::::::::/sssss++/::::::::/ossssysso/::::::::::///++oossssyyhhhyyhddd/                                                                                                          
                                                                                                       -yhyhhdhysooooo+////::::::::::/sddmmhyo+/////+osyhdmdddho/:::::::::///+++oooosyyhhhyyyyddh-                                                                                                          
                                                                                                       .shyyhhhhysoooo++///::::::::::/+ymNNNNmhyyyhhhdmNMMMNNmh+/:::::::::://++ooooooyhhyyyyhhhdy                                                                                                           
                                                                                                        +ysyhhhhhyoo++++///:::::::::::/+ymmNNNMMNNNNNMMMMMNNmhs/::::::::::://+++oooosyhhyyyyyhmm/                                                                                                           
                                                                                                        :yyyhyyyhhso+++++///:::::::::://oyhmdmNNNNMMNNmNmmmdyso/:::::::::::///++osssyhhhyssyydNd.                                                                                                           
                                                                                                        .ohyyysydhyso++++///::::::::///+shhdhmdmdmNMddhhhhhhyso+//:/:/:::::://++ooosyhdsyyshdmm+                                                                                                            
                                                                                                         -yhssshddyso+++////:://////++ossyhhyhyhyhNNdhssysyhyysys+++/////////++o+oosyhhyyyydmmy.                                                                                                            
                                                                                                          /yysyhddhyso+++//++/+/++++++oyyhyyyhsshhdddhyososyyyyyyss+++/+ooo///++oooyyyhyyhhdmd:                                                                                                             
                                                                                                          ./yyyyhhhhso+o+++oo++ossssoosyyyyyysshydddhyyoooyyooyy+ossossosyooo+++oosyhhhhyhhmd/                                                                                                              
                                                                                                           .:yyyhhhysoo+ooosysysyyssssssyyyysyssshhhhsyoo+ssosss+ososyyysysyys+oossydddyyhhd/                                                                                                               
                                                                                                             -syhhyysooossshhyysydhhhysossyyoys+oyyshys++o++osooooyyshyhyhdyysooosshhdhyyhms                                                                                                                
                                                                                                             -shhhhhsssoosyhhyyyhmhhhyssssosoo+++oo++///+o+oossosyyhhhyhydddhys+ssshddddhdNs.                                                                                                               
                                                                                                           ./sddhddysyssossyyhddmmmdhdddhhhhyhyooo++/+oyhdmmmmmmmmmmdmmdddhhyhsoosyyhdhdmNMd+.                                                                                                              
                                                                                                         ./yyyddhhdysysssoosyyhdhyyyyyhyhdhhhhhddhhhhhdhhhyyyssssssosyyhhhyyssossyhhhdydNNNdhs-                                                                                                             
                                                                                                       ./ymdsydmdhddyyssoossoosso/////::/:::::::::///::-::::::::///++/++osssyoosyhmmhddmNNmdyhh/                                                                                                            
                                                                                                      :ymmmyosydddhdhdhhyyyyso++///////:::::::::::::::::::::::///++/+++oooyyssyyhdmmdhmmmmmdhydNy-                                                                                                          
                                                                                                    -smmmmdsosshddddhmhhdyyyso+++/+++++//+//+/++os++oo++///////+///+oooosyyysyyhdNNmdmmmmmmdyyhNNmo.                                                                                                        
                                                                                                  .omNmmmmdoooshmmmmhmmmdyyhsosooosoosssyoosossyhhhhshhhsoooosoyosoossyyhyhhhydmNNdmNmmdmmmdysymMMNm+                                                                                                       
                                                                                                -odmNNNNmmhooosdmmmmmmmNmhhddyyssysyyyddddhhhhdmhmdmyNmmdmdhhhhyhyysyhdhddhhhmmNNdmmNmmddmmdyssdMMMMNh/                                                                                                     
                                                                                           .-/oydmmmNNNNNmhoo++ymmmdmNmmmmhhmdhhhyhhhyhddmymdddmmmmmmmmmdmdddddddhyyhyddyhyhhdmddhNNNmmmmdmhsosdNMMMMNNh:                                                                                                   
                                                                                      .:+shdmddmmmmmmNNNNmhoo++ohmmmmmNmdmmmddddhdydhhhhhddddmdddhhshyhhdhhhhhhyyhyyhddhyyydhhNdmNNNmmmmdmdsoosdNMMMMNNNNh/.                                                                                                
                                                                                  -/ohdmNNNmmmmmmmmmmNNNmmdso+++smNNmNNNNNdyyhsysydyyysssosyysooo+oo+++oooooo++oosyhyhhyhyshydmNMNmmmddmmmho+oydNMMMMMNNNNNdo/-                                                                                             
                                                                             .-/shdmNNNNNmmmmmmmmmmmmNNmmmdyso++ohNNmmmmNmdddhhyshhsysoo+++o+/////+/://://::////+syssyhyyyhmhdNNNmmdddmmmds++oydNMMMMMMMNNNNNNdyo/-.                                                                                        
                                                                       .-:/oyhmNNNmmNNmmmmmddmmmmmmmmmmmmmmhso+++odNNmmmmmmmmdyyoo+oos++//+++//////////:://////+oososyhhhhhdNNNNNmmdmmmmds+++shmNMMMMMMMMMNNNNNmddhhs+:-.                                                                                   
                                                              .-::/+oyhhdmmmmNNNNmmmmmmmmmdddddmmmmmmmmmmmmdyoo+/+yNNNmdmmmmNdyyso+oos+++/+o++//++/+o+++//+++o++sooosoyhhddmNNNNNmddmmmdyo++shhmNNNNMMMMNNNNNNNNmmdmmddhyo/-.                                                                               
                                                       .-:/oshhddmmmmmmmmmmmmmNNmmmmmmmmmmddddmmmmmmmNmmmmmmyoo+/+odNNmmmmmmNmmyooo+ss++syso+oo+o++oyso+++oo+ossyososyhydmNNNmmmmddmNNmyo+++yhdNNNNNMMMNNNNNNNNNNmmdmmdddddhys+:.                                                                           
                                                 .-:/oyhdmmmmmNmmmmmmmmmmmmmmmmmmdmmmmmmmdddddddmmmmmmmmmmmmdso++++yNNddmmmmmNmmyyoosssohhhsssoosossssosssysssyyysyssdhymNNNmddmmmmmmmyo+++oyhdNNNNNNMNNNNNNNNNNNmmddmddddddddddhyo/-.                                                                      
                                            .-/oyhdmmmmmNNNmNNmmmmmmmmmmmmmmmmmmdmmmmmdmddddddddmmmmmmNmmmmmmhso+/+sdmmdmmmmmmmmmdhydyshhydysyyyysyysssssyyyyhdhhyhhhdmNNNNNmmdmmdmmdyo+++syyhmNNNNNNNNNNNNNNNNNNNmmddddddddddddddddhys+/-.                                                                 
                                        ./oydmmNNNNmmmNNNNNmmmmmmmmmmmmmmmmmmmdddmmdddddddddddddmmmmmmNmmmmmNmyo+//syhmmmmmmmmmmmmmmmdddmdmhhdhyyyyhhhhsyyyhhhdddhddNNNNmmNNmmdmddmdyo+++oyyhdNNNNNNNNNNNNNNNNNNNNmddddddddddddddddddddhhhyso+:-.                                                           
                                    .-+ydmNNNNNNNNmmmmNNNmmmmmmmmmmmmmmmmmmmmmddmmddddmdddddddddmmmmmNNmmmmmNNdyo//+ooymmdmmmmmmdddmNmNNNmNNhNdddhddddhhddddmNNNNNNNNNNNNmNNmdddmmdyo++/+yyyhdNNmmNNNNNNNNNNNNNNNNmmddddddddddddddddddddhhdhhhhyys+/-.                                                      
                              .-/oyhmNNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmdmmmmdddmddmmddddmmddddddddddmmmmmmmmmmmmNNh+/:/+o+ydmddmNmNmddmmmmNNNNNNMMNNNNmmmNNNNNMMMNNNNNNNNNNNNNmmmmdmdyo+////oyyhNNmmmNNNNNNNNNNNNNNmmNmdddddddddddddddddddddddddhhhhhhhhyso/-.                                                 
                         -/oydmmNNNNNNNNNNNNNNNmmmmmmmmmmmmmmddddddddddddddmdddmdddddmmddddddddddmmmmmmmmmmmmNNd+/::/+/ohmdddmmNNmNmmmNNNNmmNNNNNmmmmmmNMMMNNNNmmNNmmNMNNNNNmdmmds++/////+yhmNNmmmNNNNNNNNNmmmmmmmmmdddddddddddddddddddddddddddddhhhhhhhhhys+:.     
`;
