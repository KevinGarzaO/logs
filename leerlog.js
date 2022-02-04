function leerlog() {
    let fs = require('fs');
  
  
    fs.readFile(`./logs/log_03022022.txt`, 'utf-8', (err, data) => {
      if (err) {
        console.log('error: ', err);
      } else {
        console.log(data);
      }
    });
  }

  leerlog();