<!-- 使用css实现tab平滑滚动 -->

<template>
    <div class="widget">
        <div class="tabs">
            <!-- 创建一些tabs，label使用for和radio进行关联 -->
            <input type="radio" id="tab1" name="tabs" checked />
            <label for="tab1">Tab1</label>
            <input type="radio" id="tab2" name="tabs" />
            <label for="tab2">Tab2</label>
            <input type="radio" id="tab3" name="tabs" />
            <label for="tab3">Tab3</label>
        </div>
        <!-- 创建一些用于显示的tab内容 -->
        <div class="tab-content">
            <div class="content-1">
                <h2>Tab1 Content</h2>
                <p>
                    tab1显示的内容
                </p>
            </div>
            <div class="content-2">
                <h2>Tab2 Content</h2>
                <p>
                    tab2显示的内容
                </p>
            </div>
            <div class="content-3">
                <h2>Tab3 Content</h2>
                <p>
                    tab3显示的内容
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./index.css"
</script>
