# DeployFirebaseProj
Deploy Firebase project by using executable file of each OS from NodeJS

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)

## How to use
This project implemented from Node.js + pkg to make executable file based on basic command of Firebase :
``` javascript
firebase deploy --project
```

So, when you run the executable file, please typing command below in command prompt or create batch file with command below.

Example on Window (.exe) :
``` batch
deploy-web-win.exe -p <YOUR_PROJECT_NAME>
```
Note : The argument ```p``` is project

## Contribute
Please install Node.js + pkg first, it need some frameworks/packages that are providing in NodeJS (v6.11.4 with npm v5.6.0) including :
 
- [x] [minimist](https://github.com/substack/minimist) : parse argument options.

The framework/package above was convert to execution file(.exe) by using pkg v4.3.0. It is command line interface enables you to package your Node.js project into an executable that can be run even on devices without Node.js installed.

## Donation
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8YE92K9QM7NA)

## License
MIT
