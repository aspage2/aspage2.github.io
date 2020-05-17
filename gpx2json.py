
import xml.etree.ElementTree as ET
import sys
import json

gpxname = sys.argv[1]
jsname = "{}.js".format(gpxname.rsplit(".", 1)[0])
t = ET.parse(gpxname)

pts = t.findall("./{http://www.topografix.com/GPX/1/1}trk/{http://www.topografix.com/GPX/1/1}trkseg/{http://www.topografix.com/GPX/1/1}trkpt")

data = []

jsonstr = json.dumps([
    [float(pt.attrib['lat']), float(pt.attrib['lon'])]
    for pt in pts
])

with open(jsname, 'w') as f:
    f.write("LATLNGS.push({})".format(jsonstr))

