<template>
  <div class="common-container">
    <el-collapse class="el-dark-collapse" style="padding:10px;" v-model="activeNames">

      <!-- 图表 -->
      <el-collapse-item title="图表" name="chart">
        <div class="component-item" v-for="(component, index) in chartList" :key="index">
          <vue-drag :option="component" :type="component.type" @click="handleComponentClicked" :index="'chart' + component.name">
            <el-tooltip class="item" effect="dark" :content="component.name" placement="top-end">
                <el-image  :style="defaultStyle" :src="component.image_src"></el-image>
            </el-tooltip>
          </vue-drag>
        </div>
      </el-collapse-item>


      <!-- 文本 -->
      <el-collapse-item title="文本" name="text">
        <div class="component-item" v-for="(component, index) in textList" :key="index">
          <vue-drag :option="component" :type="component.type" @click="handleComponentClicked" :index="'text' + component.name">
            <el-tooltip class="item" effect="dark" :content="component.name" placement="top-end">
              <el-image  :style="defaultStyle" :src="component.image_src"></el-image>
            </el-tooltip>
          </vue-drag>
        </div>
      </el-collapse-item>

      <!-- 视频 -->
      <el-collapse-item title="视频" name="video">
        <div class="component-item" v-for="(component, index) in videoList" :key="index">
          <vue-drag :option="component" :type="component.type" @click="handleComponentClicked" :index="'video' + component.name">
            <el-tooltip class="item" effect="dark" :content="component.name" placement="top-end">
              <el-image  :style="defaultStyle" :src="component.image_src"></el-image>
            </el-tooltip>
          </vue-drag>
        </div>
      </el-collapse-item>

      <!-- 组态 -->
      <el-collapse-item v-for="(configure, index) in configures" :key="index" :title="configure.category" :name="configure.category">
        <div v-if="isActive(configure.category)">
          <div class="component-item" v-for="(component, index) in configure.components" :key="index"
               :style="getComponentStyle(component.style, configure.defaultStyle)">

            <vue-drag :option="component" type="configure" @click="handleComponentClicked" :index="'configure' + component.name">

              <el-tooltip class="item" effect="dark" :content="component.name ? component.name : configure.category" placement="top-end">
                <div>
                  <el-image lazy
                            :style="getComponentStyle(component.style, configure.defaultStyle)"
                            :src="component.image_src"
                  ></el-image>
                </div>
              </el-tooltip>

            </vue-drag>

          </div>
        </div>

      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import VueDrag from "@/components/drag"
import { getConfigureComponents } from "@/view/pages/visual/components/index.js";
export default {
  name: "CommonTab",
  components: { VueDrag },
  props: {
    searchText: {
      type: [String],
      default: ""
    }
  },
  data() {
    return {
      configures: [],
      activeName: "",
      categoryNames: [],
      activeNames: [""],
      chartList: [
        {name: "仪表盘", type: "dashboard", controlType: "dashboard", image_src: require("@/view/pages/visual/components/chart/dashboard.svg") },
        {name: "曲线图", type: "curve", controlType: "history", image_src: require("@/view/pages/visual/components/chart/curve.svg") },
        {name: "饼图", type: "pie", controlType: "pie", image_src: require("@/view/pages/visual/components/chart/pie.svg") },
        {name: "柱状图", type: "bar", controlType: "bar", image_src: require("@/view/pages/visual/components/chart/bar.svg") },
      ],
      textList: [
        { name: "文本", type: "text", style: {width: 100, height: 50, fontSize: 20},image_src: require("@/view/pages/visual/components/text/text_1.svg") }
      ],
      videoList: [
        { name: "视频", type: "video", image_src: require("@/view/pages/visual/components/video/video_1.svg") }
      ],
      defaultStyle: {
        width: "50px",
        height: "50px"
      }
    }
  },
  mounted() {
    this.configures = getConfigureComponents();
    this.categoryNames = this.configures.map(item => item.category)
    // console.log("========this.configures", this.configures)
  },
  methods: {
    isActive(value) {
      return this.activeNames.find(item => item == value);
    },
    handleComponentClicked(component, id) {
      console.log(component, id)
      this.$nextTick(() => {
        console.log(this.$refs[id])

      })
    },
    getComponentStyle(componentStyle, configureStyle) {
      return componentStyle ? componentStyle : (configureStyle ? configureStyle : this.defaultStyle);
    },
    getComponentDraggable(draggable) {
      if (draggable == "draw") {
        return false;
      } else {
        return true;
      }
    }
  }
}

</script>

<style scoped lang="scss">
.common-container {
  height: 100%;
  overflow-y: auto;
}
.tab-label-left {
  position:relative;
  display: flex;
  width: 50px;
  height:60px;
  text-align: center;
  i {
    position: absolute;
    top: 10px;
    width: 50px!important;
    height: 20px!important;
  }
  p {
    position: absolute;
    top: 20px;
    width: 50px!important;
    height: 20px!important;
  }
}
.tab-content-right {
  height: 100%;
  margin-left: 65px;
}
::v-deep .el-tabs__content {
  height: calc(100% - 50px);
  .el-tab-pane {
    height: 100%;
  }
}
::v-deep .el-tabs__header.is-left {
  width: 60px!important;
}
.el-tabs__item.is-left.is-active {
  .tab-label-left {
    background-color: #171d46;
    border-radius: 10px;
  }
}

.component-item {
  float:left;
  position: relative;
  margin: 4px;
  border-radius: 4px;
  background-color: #2d3d86;
  p {
    position: absolute;
    color: #fff;
    text-align: center;
    width: 100%;
  }
  img {
    object-fit: scale-down;
  }
}
</style>