import { saveAs } from "file-saver";
const generate = (changes) => {
  console.log("Generating from changes", changes);

  //COMPOSE AHK FILE
  let outStr = `SetCapsLockState, AlwaysOff\n`;

  changes.map((val) => {
    outStr = `${outStr}CapsLock & ${val.kbdkey.toLowerCase()}:: ${val.code}\n`;
  });
  console.log("OUTSTRING", outStr);
  var blob = new Blob([outStr], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "kbd65.ahk");
};

export default generate;
