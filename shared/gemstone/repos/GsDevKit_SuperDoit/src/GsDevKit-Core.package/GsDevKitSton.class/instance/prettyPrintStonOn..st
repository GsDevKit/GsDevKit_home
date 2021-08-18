ston
prettyPrintStonOn: stream
  (STONWriter new
    prettyPrint: true;
    on: stream;
    yourself) nextPut: self