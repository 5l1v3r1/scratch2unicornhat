# Scratch2unicornhat

With Scratch2unicornhat, you can create Scratch projects that show LED patterns on Pimoroni Unicorn HAT HD.

Demo on YouTube: https://www.youtube.com/watch?v=GBLkATSC31A

About Pimoroni Unicorn HAT HD: https://github.com/pimoroni/unicorn-hat-hd

## How to install

If you have not, you need to install Python libraries for Unicorn HAT.

```
curl https://get.pimoroni.com/unicornhathd | bash
```

Download Scratch2unicornhat.

```
wget https://github.com/champierre/scratch2unicornhat/archive/master.zip
unzip master.zip
mv scratch2unicornhat-master scratch2unicornhat
```

## Hot to run

### Scratch 1.4

On Scratch 1.4, open any sample project from scratch2unicornhat/samples folder.

From terminal:

```
cd scratch2unicornhat
python scratch2unicornhat.py
```

Now you can play the sample project on Scratch.

### Scratch 2

From terminal:

```
cd scratch2unicornhat
python scratchx2unicornhat.py
```

On Scratch 2, select [File] from menu holding Shift key, and select [Import experimental extension].

Input http://localhost:8080/scratchx2unicornhat.js in URL text field, and click Load button.

In [More Blocks], Unicorn HAT blocks become available.

#### Importing data

You can import data in SIDA(cratch Image Data Array) format which is supported by DotPaint RGB 2 (https://scratch.mit.edu/projects/104114090/).

Import demo on YouTube: 
https://www.youtube.com/watch?v=33wWywQMOHM
