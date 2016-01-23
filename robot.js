/**  * Created by Lab on 23.01.2016.  */

//Level_1

north();
north();

//Level_2

var i;
for (i = 0; i < 16; i++) {
    east();
}

//Level_3

var i;
for (i = 0; i < 7; i++) {
    south();
    east();
}

//Level_4

var i;
for (i = 0; i < 13; i++) {
    if (isFree('south')) {
        south();
    } else {
        east();
    }
}