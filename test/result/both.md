## resolves the path to file
../run

/* relative */
test/fixture/both/run/doc.js
/**/

/* expected */
{
  "path": "test/fixture/both/run.js",
  "isDir": false
}
/**/

## resolves the path to dir with /
../run/

/* relative */
test/fixture/both/run/doc.js
/**/

/* expected */
{
  "path": "test/fixture/both/run/index.js",
  "isDir": true
}
/**/