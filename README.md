### Create PDF File Ionic 5 Capacitor & pdfMake In 10 Minutes. Ionic 5 PDF Download using pdfMake and Ionic Capacitor. Create and Download Ionic Capacitor PDF files using pdfMake library for Web, PWA and Mobile Devices.

### Watch Complete Video Tutorial on YouTube
[Create PDF File Ionic 5 Capacitor & pdfMake In 10 Minutes](https://youtu.be/PLeLzsMtI3g)

### Install pdfmake NPM Package

```
npm install pdfmake --save
```

Type Script:

```
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
```

You can even use below for older version of typescript

```
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
```

### (Bug) Fix for Android Error v4 support library

```
npm install jetifier

npx jetty

npx cap sync android
```



