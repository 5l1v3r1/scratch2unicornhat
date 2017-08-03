# Scratch2unicornhat

With Scratch2unicornhat, you can create Scratch projects that show LED patterns on Pimoroni Unicorn HAT.

Demo on YouTube: https://www.youtube.com/watch?v=GBLkATSC31A

About Pimoroni Unicorn HAT: https://github.com/pimoroni/unicorn-hat

## How to install

If you have not, you need to install Python libraries for Unicorn HAT.

```
curl -sS https://get.pimoroni.com/unicornhat | bash
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

In [More Blocks], Unicorn HAT blocks becomes available.

## TODO

- Translate Unicorn HAT blocks to English.
