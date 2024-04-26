// \b - word edge
// \B - not word edge
/\b\w+\b/; // find one word

// group capture
/(test){3}/; // match testtesttest, group test
// no group capture
/(?:test){3}/; // match testtesttest
// named captured broup
/(?<groupname>test){3}/; // match testtesttest
// capture whole word
/((?:test-?){3})/; // match test-test-test

// flag m - multi line
/^\w+$/m; // ^ and $ mean line start and end here

// | - OR
/(?:10|ten)\$/; // 10$ or ten$
/java(?:script)?/gm; // java or javascript

// Java, JavaScript, C, C++ or C#
// can be lowercase
/^[Jj]ava(?:[Ss]cript)?|[Cc](?:\+{2}|#)?$/gm;
