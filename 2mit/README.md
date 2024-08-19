2mit
====

From Quebec to MIT using just two roads:
- QC Route 257
- US Route 3


Saint-Adrien to the US Border via QC Route 257
----------------------------------------------

:round_pushpin: [Route](geojson/qc257.geojson):

:movie_camera: [YouTube](https://youtu.be/2xYBwfd8J88)

:globe_with_meridians: Overpass API query:

    ( way[ref="257"](45.2483,-71.7503,45.8312,-71.1887);
      way[ref~"257"](45.7007,-71.4678,45.7104,-71.4585);
      way[ref~"257"](45.52457,-71.27837,45.52756,-71.27486); );


US Border to Cambridge, Mass via US Route 3
-------------------------------------------

:round_pushpin: [Route](geojson/us3.geojson):

:movie_camera: [YouTube](https://youtu.be/5bTkhVoMoJY)

:globe_with_meridians: Overpass API query:

    ( way[ref~"US 3"](42.2722,-71.7984,45.2739,-70.8371);
      - way[ref~"US 302"](42.2722,-71.7984,45.2739,-70.8371); );