const n = 5;

/* =========================
1. Normal Triangle
*
**
***
****
*****
Shortcut: star ↑
========================= */
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}


/* =========================
2. Reverse Triangle
*****
****
***
**
*
Shortcut: star ↓
========================= */
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
}


/* =========================
3. Center Pyramid
    *
   ***
  *****
 *******
*********
Shortcut:
space ↓ (n-i)
star ↑ (2i-1)
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}


/* =========================
4. Reverse Pyramid
*********
 *******
  *****
   ***
    *
Shortcut:
space ↑
star ↓
========================= */
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}


/* =========================
5. Right Shift Block
*****
 *****
  *****
   *****
    *****
Shortcut:
space ↑
star constant
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(i) + "*".repeat(n));
}


/* =========================
6. Left Shift Block
    *****
   *****
  *****
 *****
*****
Shortcut:
space ↓
star constant
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(n));
}


/* =========================
7. Half Pyramid Right
    *
   **
  ***
 ****
*****
Shortcut:
space ↓
star ↑
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}


/* =========================
8. Inverted Half Pyramid
*****
 ****
  ***
   **
    *
Shortcut:
space ↑
star ↓
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(i) + "*".repeat(n - i + 1));
}


/* =========================
9. Pyramid (* spaced)
    *
   * *
  * * *
 * * * *
* * * * *
Shortcut:
space ↓
"* " ↑
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "* ".repeat(i));
}


/* =========================
10. Reverse (* spaced)
* * * * *
 * * * *
  * * *
   * *
    *
Shortcut:
space ↑
"* " ↓
========================= */
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(i) + "* ".repeat(n - i + 1));
}


/* =========================
11. Diamond
*
**
***
****
*****
****
***
**
*
Shortcut:
up + down
========================= */
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
for (let i = n - 1; i >= 1; i--) {
  console.log("*".repeat(i));
}


/* =========================
12. Hollow Square
*****
*   *
*   *
*   *
*****
Shortcut:
border = *
inside = space
========================= */
for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {
    console.log("*".repeat(n));
  } else {
    console.log("*" + " ".repeat(n - 2) + "*");
  }
}