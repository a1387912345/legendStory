var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
        cm.sendNext("Do you have something to say to me?", 3);
    else if (chat == 1)
        cm.sendNextPrev("What is your name?", 1, 1106000);
    else if (chat == 2)
        cm.sendNextPrev("I don't have one. Just call me #bKiddo#k. That's what the old man calls me.", 3);
    else if (chat == 3)
        cm.sendNextPrev("Is he your grandpa? Where are your parents?", 1, 1106000);
    else if (chat == 4)
        cm.sendNextPrev("I don't have any family. I just work here.\r\n#b(What's with all the questions?)#k\r\nLook, I have to get back to work before the old man comes back...", 3);
    else if (chat == 5)
        cm.sendNextPrev("Do you know the name Chromile? The Knight of Light?", 1, 1106000);
    else if (chat == 6)
        cm.sendNextPrev("Nope, never heard of the guy...\r\n#b(Why does that name sound familliar?)", 3);
    else if (chat == 7)
        cm.sendNextPrev("#eYou little brat!\r\nI told you to move boxes, not chat up my customers!", 1, 0, 1106002);
    else if (chat == 8) {
        cm.sendNextPrev("I was just about to clean it up...\r\nSorry, I gotta do what he says...", 3);
    } else if (chat == 9) {
        cm.forceCompleteQuest(20030); //If you complete the quest, Neinheart dissapears
        cm.dispose();
        cm.mihileNeinheartDisappear();
    }
}