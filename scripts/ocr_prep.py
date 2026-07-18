import sys, subprocess
from PIL import Image, ImageOps

src = sys.argv[1]
out = sys.argv[2]
img = Image.open(src).convert("L")
w, h = img.size
img = img.resize((int(w*2.5), int(h*2.5)), Image.LANCZOS)
img = ImageOps.autocontrast(img)
prep = "/tmp/ocr_prep.png"
img.save(prep)
subprocess.run(["tesseract", prep, out, "-l", "deu", "--psm", "4"],
               stderr=subprocess.DEVNULL)
