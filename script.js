arrProject1 = ["Project1a.png", "project1b.png"]
proj1Pointer= 0;
function leftpro1() {
	if (proj1Pointer > 0) {
		proj1Pointer--;
		document.getElementById("proj1").src = arrProject1[proj1Pointer];
	}
}
function rightpro1() {
	if (proj1Pointer < 1) {
		proj1Pointer++;
		document.getElementById("proj1").src = arrProject1[proj1Pointer];
	}
}

arrProject2 = ["Project2a.png", "project2b.png" , "project2c.png" , "project2d.png" , "project2e.png","project2f.png" , "project2g.png" , "project2h.png"]
proj2Pointer= 0;
function leftpro2() {
	if (proj2Pointer > 0) {
		proj2Pointer--;
		document.getElementById("proj2").src = arrProject2[proj2Pointer];
	}
}
function rightpro2() {
	if (proj2Pointer < arrProject2.length - 1) {
		proj2Pointer++;
		document.getElementById("proj2").src = arrProject2[proj2Pointer];
	}
}