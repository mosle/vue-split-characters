# VueSplitCharacters

v-split-characters directive for VueJS (2.x)

## Demo


## About

This plugins adds a v-split-characters directive that splits the inner text into each characters with specific node.
Mainly, it's used for implementing css text-characters animation.

## Install



## Usage

If you're using modules, import it:

```
import VueSplitCharacters from 'vue-split-characters';

Vue.use(VueSplitCharacters);
```

Then in your template just use the directive:

```
<div v-split-characters>target text</div>
<!--OUTPUT is
<div><span data-index="0">t</span><span data-index="1">a</span><span  data-index="2">r</span><span  data-index="3">g</span><span data-index="4">e</span><span data-index="5">t</span><span data-index="6"></span><span data-index="7">t</span><span data-index="8">e</span><span data-index="9">x</span><span data-index="10">t</div>
-->
```

```
<div v-split-characters="dataValue"></div> //dataValue is "test"
<!--OUTPUT is
<div><span data-index="0">t</span><span data-index="1">e</span><span data-index="2">s</span><span data-index="3">t</span></div>
-->
```

custom tag name
```
<div v-split-characters:b>test</div>
<!--OUTPUT is
<div><b data-index="0">t</b><b data-index="1">e</b><b data-index="2">s</b><b data-index="3">t</b></div>
-->
```

letter option

```
<div v-split-characters.letter>target text</div>
<!--OUTPUT is
<div><b data-index="0" data-letter="t">t</b><b data-index="1" data-letter="e">e</b><b data-index="2" data-letter="s">s</b><b data-index="3" data-letter="t">t</b></div>
-->
```






Or if you're not using modules, just include the js:

```
<script src="node_modules/vue-split-characters/dist/v-split-characters.js"></script>
```

