trekungen
=========

This project is intended to serve as an example of how GeoJSON data may facilitate the discovery of content through a simple web application built on standard open source and open data platforms.

Although the individual platforms and standards are well documented, combining them all together often remains a challenge, hence the motivation for this repository and its documentation, which I hope proves useful to many (my future self included).

The code and its dependencies are all open source and permissively licensed, facilitating the forking and adaptation of this project for purposes other than documenting travels, as is the case here.  In cases where it is possible to do so, I invite you to similarly share your adaptations with the developer community and, most importantly, extend the documentation with a level of care that your future self too would appreciate.


Overpass Turbo
--------------

GeoJSON data for each trek leg is collected via query in [overpass-turbo.eu](https://overpass-turbo.eu/), which is a web based data mining tool for OpenStreetMap.

For example, the query for Tail of the Dragon in Overpass Turbo would look as follows:

![Overpass Turbo screenshot](https://jeffyactive.github.io/trekungen/common/images/overpass-turbo-screenshot.png)

Where the query is as follows:

    [out:json];
    way[ref~"US 129"](35.46572,-84.0970,35.5667,-83.91989);
    out geom;

And the actions are:
- Run the query
- Export (and Download as GeoJSON)

The query for each trek leg is provided, for reference, in the README file of the corresponding trek.  See also the [Overpass QL Wiki](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) for more information about the query language.


License
-------

Code licensed [MIT](LICENSE-MIT), all other content [CC0-1.0](LICENSE-CC).