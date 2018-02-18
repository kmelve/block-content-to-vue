# block-content-to-vue

Dynamically render Vue.js components from Sanity.

## Installation

```js
npm i --save block-content-to-vue
```

### Import as module

```js
import BlockContentToVue from 'block-content-to-vue';
```

### Use via cdn

Include the script file, then install the component with `Vue.use(BlockContent);` e.g.:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/block-content-to-vue"></script>
<script type="text/javascript">
  Vue.use(BlockContent);
</script>
```

## Usage

The component requires the props `blocks` and `serializer`.

```html
<block-content :blocks="blocks" :serializer="serializer" />
```

`blocks` must be an array of content blocks from a Sanity query response.
Example:

```js
[
  {
    _id: 12345,
    _type: 'heading-block',
    heading: 'The heading!',
    subtitle: 'The subtitle'
  },
  {
    _id: 12346,
    _type: 'two-column-block',
    leftColumn: 'Left column content',
    rightColumn: 'Right column content'
  }
]
```

`serializer` is an object describing the components you want to render based on the Sanity block's `_type` value.
Example:

```js
import Heading from '@/components/Heading.vue';
import TwoColumn from '@/components/TwoColumn.vue';

const serializer = {
  'heading-block': Heading,
  'two-column-block': TwoColumn
}
```

The block-content-to-vue component will automatically make the properties of each block available as props in your component.

Let's have a look at the `Heading` component.

```html
<template>
  <div>
    <h1>{{heading}}</h1>
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: String,
    subtitle: String,
  },
};
</script>
```

We can now define the props our component will receive, and we can type-check each of them.
We can also use internal state and all the other good stuff from a regular Vue.js component.
