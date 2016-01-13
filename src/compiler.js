var map = Function.prototype.call.bind( Array.prototype.map );

function getCharType(char) {
  switch (true) {
    case char_pattern.test(char)
  }
}

function scan(source) {

  var char_pattern = /^[^\s;]$/;
  var space_pattern = /^\s$/;
  var newline_pattern = /^;$/;

  var line = 0;
  var column = 0;
  return map(source, function(char, index) {
    switch (true) {
      case char_pattern.test(char)
    }
  });
}
