# scihub-shortcut

![we love u carmen ortiz](assets/carmen_ortiz_96.png) ![we love u stephen heymann](assets/stephen_heymann_96.png)

this is a quick & dirty Firefox extension for easily querying Sci-Hub for a [DOI](https://www.doi.org/the-identifier/what-is-a-doi/) of interest.[^1]

at present it does the bare minimum: no regex to enforce valid syntax, no checking for alternate mirrors.
this might change in the future.

obviously this is necessarily an unsigned (& hence local-use-only) extension.

## installation

1. `git clone`
2. open Firefox > `about:debugging`
3. `This Firefox` > `Load Temporary Add-on...`
4. select the `manifest.json` file

## usage

1. find a scientific publication you'd like to read
2. attempt to view it but encounter a paywall
3. right-click on the DOI of the offending paper
4. select `Open with Sci-Hub` from the context menu

## etc

[dedicated](https://en.wikipedia.org/wiki/United_States_v._Swartz) to former US attorney [carmen milagros ortiz](https://en.wikipedia.org/wiki/Carmen_Ortiz#Prosecution_of_Aaron_Swartz) (#girlboss!) & former assistant US attorney [stephen "fine, we'll lock him up" heymann](https://en.wikipedia.org/wiki/Stephen_Heymann) <3

[^1]: i would _never_ condone the use of such offensive & indecent webservices as Sci-Hub, which claim to champion "freedom" & access to knowledge as a "human right".
the academics interacting with this git repo obviously know to use JSTOR instead!

