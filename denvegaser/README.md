denvegaser
==========

Denver to Las Vegas roundtrip on scenic byways.

<details>

<summary>01. Crossing the Colorado Rockies</summary>

### Crossing the Colorado Rockies

:round_pushpin: [Route](geojson/us6-i70.geojson):
- US-6 West from Golden, CO
- I-70 West (CO Exit 244 to Exit 44)

:movie_camera: [YouTube](https://youtu.be/C0JDjaaZDPM)

:globe_with_meridians: Overpass API query:

    ( way[ref~"US 6"](39.7,-105.4382,39.8,-105.23649);
      way[ref="I 70"](39.1270,-108.3250,39.9,-105.4382); );

</details>


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

### UT-12 (Including Calf Creek Falls & Bryce Canyon)

    ( way[ref="UT 12"](37.5541,-112.4300,38.3166,-111.3203);
      way[name="Lower Calf Creek Falls Trail"](37.7891,-111.4287,37.8310,-111.4068);
      way[name="Bryce Point Road"](37.5992,-112.1818,37.6182,-112.1526);
      way[name="Bryce Canyon Scenic Drive"](37.61781,-112.17780,37.6923,-112.1503);
      way[ref="UT 63"](37.61781,-112.17780,37.6923,-112.1503); );

### Zion NP

    ( way[name="Riverside Walk"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Kayenta Trail"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Upper Emerald Pool"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Middle Emerald Pools"](37.2451,-112.9723,37.2976,-112.9389); );

### Hoover Dam

    ( way[name="Hoover Dam Access Road"](36.0093,-114.7749,36.0180,-114.7289);
      way[ref~"US 93"](36.0093,-114.7749,36.0180,-114.7289); );

### Route 66

    way[ref~"US 66 Hist"](35.1856,-114.0609,35.5819,-112.1685);

### AZ-64 (Grand Canyon NP)

    ( way[ref~"AZ 64"](35.5958,-112.1968,36.1,-111.75);
      way[name="East Wesleyan Avenue"](35.5988,-112.1480,35.6013,-112.1351);
      way[name="Rim Trail"](36.05,-112.10849,36.06225,-112.105); );

### AZ-64 & US-89 & US-160 & US-163 (Grand Canyon NP to Valley of the Gods)

    ( way[ref="AZ 64"](35.8470,-111.7268,37.2350,-109.8143);
      way[ref="US 89"](35.8549,-111.4250,36.0758,-111.3677);     
      way[ref="US 160"](35.8470,-111.7268,36.7078,-110.2473);
      way[ref="US 163"](35.8470,-111.7268,37.2350,-109.83); );

### Valley of the Gods and the Moki Dugway

    ( way[name="Valley of the Gods Road"](37.2111,-109.9323,37.3239,-109.7994);
      way[ref="UT 261"](37.2640,-109.9447,37.2723,-109.9332);
      way[name="Moki Dugway"](37.2640,-109.9447,37.2784,-109.9337); );
