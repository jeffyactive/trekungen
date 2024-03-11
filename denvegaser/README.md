denvegaser
==========

Denver to Las Vegas roundtrip on scenic byways.

Denver to Las Vegas
-------------------

### Day 1: Denver, CO to Green River, UT

<details>

<summary>1.1 Crossing the Colorado Rockies</summary>

### Crossing the Colorado Rockies

:round_pushpin: [Route](geojson/us6-i70.geojson):
- __US-6__ West from Golden, CO
- __I-70__ West (CO Exit 244 to Exit 44)

:movie_camera: [YouTube](https://youtu.be/C0JDjaaZDPM)

:globe_with_meridians: Overpass API query:

    ( way[ref~"US 6"](39.7,-105.4382,39.8,-105.23649);
      way[ref="I 70"](39.1270,-108.3250,39.9,-105.4382); );

</details>

<details>

<summary>1.2 Colorado National Mounument</summary>

### Rim Rock Drive

:round_pushpin: [Route](geojson/rimrockdrive.geojson):
- __Rim Rock Drive__ from Monument Road to CO-340

:movie_camera: [YouTube](https://youtu.be/kGw4kEPwkQM)

:globe_with_meridians: Overpass API query:

    way[name="Rim Rock Drive"](39.0183,-108.7489,39.1219,-108.6160);

</details>

<details>

<summary>1.3 Following the Colorado River in Utah</summary>

### Following the Colorado River in Utah

:round_pushpin: [Route](geojson/cr175-ut128.geojson):
- __CR-175__ from I-70 UT Exit 214
- __UT-128__ to Moab, UT

:movie_camera: [YouTube](https://youtu.be/dXqKw5lKsdQ)

:globe_with_meridians: Overpass API query:

    ( way[ref="UT 128"](38.6015,-109.5758,38.9350,-109);
      way[ref="CR 175"](38.9479,-109.3560,39.0392,-109.2808); );

</details>

<details>

<summary>1.4 Arches National Park</summary>

### Arches National Park

:round_pushpin: [Route](geojson/archesnp.geojson):
- __Main Park Road__

:movie_camera: [YouTube](https://youtu.be/wEaj0fMoUOg)

:globe_with_meridians: Overpass API query:

    ...

</details>

### Day 2: Green River, UT to Zion National Park, UT

<details>

<summary>2.1 Green River to Capitol Reef NP</summary>

### Green River to Capitol Reef NP

:round_pushpin: [Route](geojson/i70-ut24.geojson):
- __I-70__ West from Green River, UT
- __UT-24__ to Capitol Reef NP

:movie_camera: [YouTube](https://youtu.be/mck-YCIXEu8)

:globe_with_meridians: Overpass API query:

    ( way[ref="I 70 Business;UT 19"](38.99176,-110.18780,39.0,-110.14124);
      way[ref~"I 70"](38.9236,-110.3695,38.99176,-110.18780);
      way[ref="UT 24"](38.2637,-111.1386,38.9299,-110.3515); );

</details>

<details>

<summary>2.2 Capitol Reef National Park</summary>

### Capitol Reef National Park

:round_pushpin: [Route](geojson/capitolreefnp.geojson):
- __UT-24__ entering and exiting the park
- __Capitol Reef Scenic Drive__
- __Capitol Gorge Road__

:movie_camera: [YouTube](https://youtu.be/1IRXq54QY8Y)

:globe_with_meridians: Overpass API query:

    ( way[ref="UT 24"](38.2,-111.3586,38.4,-111.1386);
      way[name="Capitol Reef Scenic Drive"](38.0,-111.3,38.4,-111.1);
      way[name="Capitol Gorge Road"](38.2070,-111.1948,38.2136,-111.1681); );

</details>

<details>

<summary>2.3 UT-12 Scenic Byway</summary>

### UT-12 Scenic Byway

:round_pushpin: [Route](geojson/ut12.geojson):
- __UT-12__ from UT-24 to US-89
- __Lower Calf Creek Falls Trail__ ( :walking: )
- __Bryce Canyon Scenic Drive__ & __Bryce Point Road__

:movie_camera: [YouTube](https://youtu.be/0UcUtnM-s5M)

:globe_with_meridians: Overpass API query:

    ( way[ref="UT 12"](37.5541,-112.4300,38.3166,-111.3203);
      way[name="Lower Calf Creek Falls Trail"](37.7891,-111.4287,37.8310,-111.4068);
      way[name="Bryce Point Road"](37.5992,-112.1818,37.6182,-112.1526);
      way[name="Bryce Canyon Scenic Drive"](37.61781,-112.17780,37.6923,-112.1503);
      way[ref="UT 63"](37.61781,-112.17780,37.6923,-112.1503); );

</details>

### Day 3: Zion National Park, UT to Las Vegas, NV

<details>

<summary>3.1 Zion National Park</summary>

### Zion National Park

:round_pushpin: [Route](geojson/zionnp.geojson):
- __Riverside Walk__ ( :walking: )
- __Kayenta Trail__ ( :walking: )
- __Upper Emerald Pools Trail__ ( :walking: )
- __Middle Emerald Pools Trail__ ( :walking: )

:movie_camera: [YouTube](https://youtu.be/vl5yFmxryQY)

:globe_with_meridians: Overpass API query:

    ( way[name="Riverside Walk"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Kayenta Trail"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Upper Emerald Pool"](37.2451,-112.9723,37.2976,-112.9389);
      way[name="Middle Emerald Pools"](37.2451,-112.9723,37.2976,-112.9389); );

</details>


Las Vegas to Denver
-------------------

### Day 1: Las Vegas, NV to Grand Canyon National Park, AZ

<details>

<summary>1.1 Hoover Dam</summary>

### Hoover Dam

:round_pushpin: [Route](geojson/hooverdam.geojson):
- __Hoover Dam Access Road__ to Visitor Center
- __US-93__ crossing the Colorado River

:movie_camera: [YouTube](https://youtu.be/AfT1L20GJ2g)

:globe_with_meridians: Overpass API query:

    ( way[name="Hoover Dam Access Road"](36.0093,-114.7749,36.0180,-114.7289);
      way[ref~"US 93"](36.0093,-114.7749,36.0180,-114.7289); );

</details>

<details>

<summary>1.2 Historic Route 66</summary>

### Historic Route 66 from Kingman to Williams

:round_pushpin: [Route](geojson/hooverdam.geojson):
- __Historic Route 66__ from Kingman, AZ to Williams, AZ
- __I-60__ from AZ Exit 139 to Exit 161

:movie_camera: [YouTube](https://youtu.be/AfT1L20GJ2g)

:globe_with_meridians: Overpass API query:

    way[ref~"US 66 Hist"](35.1856,-114.0609,35.5819,-112.1685);

</details>

<details>

<summary>1.3 Grand Canyon National Park</summary>

### Grand Canyon National Park

:round_pushpin: [Route](geojson/az64.geojson):
- __AZ-64__ from Williams, AZ to Grand Canyon NP
- __Rim Trail__ ( :walking: )

:movie_camera: [YouTube](https://youtu.be/NZADtE7_z2Y)

:globe_with_meridians: Overpass API query:

    ( way[ref~"AZ 64"](35.5958,-112.1968,36.1,-111.75);
      way[name="East Wesleyan Avenue"](35.5988,-112.1480,35.6013,-112.1351);
      way[name="Rim Trail"](36.05,-112.10849,36.06225,-112.105); );

</details>

### Day 2: Grand Canyon National Park, AZ to Leadville, CO

<details>

<summary>2.1 Grand Canyon to the Valley of the Gods</summary>

### Grand Canyon to the Valley of the Gods

:round_pushpin: [Route](geojson/az64-us89-us160-us163.geojson):
- __AZ-64__ to Cameron, AZ
- __US-89__ to the Navajo Trail
- __US-160__ to Kayenta, AZ
- __US-163__ to the Valley of the Gods

:movie_camera: [YouTube](https://youtu.be/j9CuPNTUHxI)

:globe_with_meridians: Overpass API query:

    ( way[ref="AZ 64"](35.8470,-111.7268,37.2350,-109.8143);
      way[ref="US 89"](35.8549,-111.4250,36.0758,-111.3677);     
      way[ref="US 160"](35.8470,-111.7268,36.7078,-110.2473);
      way[ref="US 163"](35.8470,-111.7268,37.2350,-109.83); );

</details>

<details>

<summary>2.2 Valley of the Gods and the Moki Dugway</summary>

### Valley of the Gods and the Moki Dugway

:round_pushpin: [Route](geojson/valleyofthegods-mokidugway.geojson):
- __Valley of the Gods Road__ from East to West
- __UT-261__ North up the __Moki Dugway__

:movie_camera: [YouTube](https://youtu.be/yp2mrequgi8)

:globe_with_meridians: Overpass API query:

    ( way[name="Valley of the Gods Road"](37.2111,-109.9323,37.3239,-109.7994);
      way[ref="UT 261"](37.2640,-109.9447,37.2723,-109.9332);
      way[name="Moki Dugway"](37.2640,-109.9447,37.2784,-109.9337); );

</details>
