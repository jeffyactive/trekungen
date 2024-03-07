denvegaser
==========

Overpass Turbo queries
----------------------

The GeoJSON files were retrieved from OpenStreetMap with [overpass-turbo.eu](https://overpass-turbo.eu/) using the following queries.

### US-6 & I-70 (Golden to Palisade)

    ( way[ref~"US 6"](39.7,-105.4382,39.8,-105.23649);
      way[ref="I 70"](39.1270,-108.3250,39.9,-105.4382); );

### Rim Rock Drive

    way[name="Rim Rock Drive"](39.0183,-108.7489,39.1219,-108.6160);

### CR-175 & UT-128

    ( way[ref="UT 128"](38.6015,-109.5758,38.9350,-109);
      way[ref="CR 175"](38.9479,-109.3560,39.0392,-109.2808); );

### I-70 & UT-24 (Green River to Capitol Reef NP)

    ( way[ref="I 70 Business;UT 19"](38.99176,-110.18780,39.0,-110.14124);
      way[ref~"I 70"](38.9236,-110.3695,38.99176,-110.18780);
      way[ref="UT 24"](38.2637,-111.1386,38.9299,-110.3515); );

### Capitol Reef NP

    ( way[ref="UT 24"](38.2,-111.3586,38.4,-111.1386);
      way[name="Capitol Reef Scenic Drive"](38.0,-111.3,38.4,-111.1);
      way[name="Capitol Gorge Road"](38.2070,-111.1948,38.2136,-111.1681); );
