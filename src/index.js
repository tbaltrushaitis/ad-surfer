//  ------------------------------------------------------------------------  //
((win, doc, con) => {

  let c = con || console;
  let d = doc || document;
  let w = win || window;
  let wb = w.bar;

  function getRepeat () {
    let ret;
    let tmp = new Set();
    let matches = d.querySelectorAll('#images > input');

    matches.forEach((el, idx) => {
      let v = parseInt(el.value);
      if ( tmp.has(v) ) {
        ret = idx;
      }else{
        tmp.add(v)
      }
    });
    c.info(`Pick %c#${ret}`, 'color:yellow');
    return ret;
  };

  let intervalID;
  intervalID = setInterval(Cb, 9000);
  c.group(intervalID);

  function Cb () {
    if (1 === wb.value()) {
      clearInterval(intervalID);
      intervalID = null;

      let Repeat = getRepeat();
      let El = d.querySelectorAll('#images > input')[Repeat];
      El.click();

      let Achived = d.querySelector('p.click-text').textContent;
      c.info(`%c${Achived}`, 'background:green; color:#fff');
      c.groupEnd(intervalID);
      return setTimeout( () => {
        //console.log(`%cGO TO NEXT AD`, 'background:blue; color:#fff');
        d.getElementById('changestatus').click();
      }, 3000);

    }else{
      c.log(`Surfing .. ${parseFloat(wb.value() * 100, 2).toFixed(2)}%`);
    }

  };

})(window, document, console);  // IIFE
//  ------------------------------------------------------------------------  //
