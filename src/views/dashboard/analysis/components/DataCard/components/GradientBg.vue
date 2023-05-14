<!--
 * @Author: kongs@njruiyue.cn
 * @Date: 2023-02-25 12:24:23
 * @LastEditors: kongs@njruiyue.cn
 * @LastEditTime: 2023-02-26 15:23:21
 * @FilePath: \soybean-admin\src\views\dashboard\analysis\components\DataCard\components\GradientBg.vue
 * @Description:
 *
-->
<template>
  <div class="p-16px rounded-16px text-white" :style="{ backgroundImage: gradientStyle }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** 渐变开始的颜色 */
  startColor?: string;
  /** 渐变结束的颜色 */
  endColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  startColor: '#56cdf3',
  endColor: '#719de3'
});
window.console.log({ props });
const gradientStyle = computed(() => `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`);
</script>

<style scoped></style>
