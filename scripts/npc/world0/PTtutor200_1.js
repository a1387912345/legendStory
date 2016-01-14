var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNext("This portal leads straight into Ereve. The place is going to be positively crawling with knights. Sounds like just my kind of place.", 17);
    else if (status == 1) {
        cm.warp(915000300, 0);
        cm.dispose();
    }
}