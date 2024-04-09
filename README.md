# scihub-shortcut

this is a quick & dirty Firefox extension for easily querying Sci-Hub for a [DOI](https://www.doi.org/the-identifier/what-is-a-doi/) of interest.[^1]

at present it does the bare minimum: no regex to enforce valid syntax, no checking for alternate mirrors, & no overall aesthetic care. this might change in the future.

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

[^1]: i would _never_ condone the use of such offensive & indecent webservices as Sci-Hub, which claim to champion "freedom" and access to knowledge as a "human right".
the academics interacting with this git repo obviously know better; [we love JSTOR!](https://en.wikipedia.org/wiki/Aaron_Swartz#Death)


