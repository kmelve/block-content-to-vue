<template>
  <div>
    <template>
      <RenderTypeCustom :blocks="reducedBlocks" :serializers="serializers" />
      <!-- <component v-else :is="serializers.types[block._type]" v-bind="block" :key="block._key"></component> -->
    </template>
  </div>
</template>

<script>
import RenderTypeCustom from "./types/RenderTypeCustom.vue";

export default {
  name: "block-content",
  props: {
    blocks: {
      default: () => [],
      type: Array
    },
    serializers: Object
  },
  components: { RenderTypeCustom },
  computed: {
    reducedBlocks() {
      // Change "style" property to "styles" so we can pass styles as prop to another vue component
      return this.blocks.slice(0, 2);
      /* const blocks = this.blocks.reduce((acc, block) => {
        const styles = block.style;
        delete block.style;
        block["styling"] = styles;
        return [...acc, block];
      }, []);
      return blocks; */
    }
  }
};
</script>
