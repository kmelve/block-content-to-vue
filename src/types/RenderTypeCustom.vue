<script>
import Vue from "vue";
import Block from "./Block.vue";
import {
  getSerializers,
  getImageUrl,
  blocksToNodes
} from "@sanity/block-content-to-hyperscript/internals";

export default {
  name: "RenderTypeCustom",
  props: {
    blocks: Array,
    isCustomType: Boolean,
    serializers: Object
  },
  render: function(createElement) {
    const renderNode = createElement;
    const { defaultSerializers } = getSerializers(renderNode);

    const SanityBlockContent = props => {
      console.log("test2", Object.assign({ blocks: [] }, ...props));
      return blocksToNodes(renderNode, Object.assign({ blocks: [] }, props));
    };

    SanityBlockContent.defaultSerializers = defaultSerializers;

    return SanityBlockContent(this.$props);
  }
  /* methods: {
    renderMark(h) {
      const marks = this.markDefs;
      const renderType = this.isCustomType
        ? this.renderCustomType(h)
        : this.renderDefaultType(h);

      if (marks.length) {
        // TODO: Loop through all markDefs and render them recursively

        const mark = marks[0];
        const markType = mark._type === "link" ? "a" : "span";
        return h(
          "a",
          {
            attrs: {
              href: mark.href
            }
          },
          [renderType]
        );
      }
      return renderType;
    },
    renderDefaultType(h) {
      const block = this.block;
      return h(block._type, block.text);
    },
    renderCustomType(h) {
      const component = this.serializers.types[this.block._type];
      return h(component, {
        props: {
          fields: this.block
        }
      });
    }
  } */
};
</script>
