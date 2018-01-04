<template>
  <div class="select-wrap fl">
    <div class="tit">
      <slot name="tit-txt"></slot>
    </div>
    <div class="select-box" @click="toggleSelect">
      <span class="week-num">44</span>
      <span class="date-num">（12.05-12.12）</span>
      <i></i>
    </div>
    <transition name="fade">
      <div class="select-list scroll" v-show="listshow">
        <slot name="list"></slot>
        <!-- <ul @click="selectFun">
          <li>
            <span class="week-num">44</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">45</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">46</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">47</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">48</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">49</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">50</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">51</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">52</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
          <li>
            <span class="week-num">53</span>
            <span class="date-num">（12.05-12.12）</span>
          </li>
        </ul> -->
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listshow: false
      }
    },
    methods: {
      toggleSelect: function () {
        this.listshow = !this.listshow
      },
      selectFun: function () {

      }
    }
  }
</script>

<style lang="css">
  .select-wrap {
    position: relative;
    font-size: 0;
  }

  .select-wrap .tit {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #333;
    line-height: 44px;
    margin: 0 20px;
  }

  .select-wrap .select-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 132px;
    height: 22px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 3px;
    cursor: pointer;
    line-height: 22px;
  }

  .select-wrap .select-box span, .select-wrap .select-list span {
    font-size: 12px;
    display: inline-block;
    line-height: 20px;
  }

  .select-wrap .select-box .week-num, .select-wrap .select-list .week-num {
    color: #333;
  }

  .select-wrap .select-box .date-num, .select-wrap .select-list .date-num {
    color: #999;
  }

  .select-wrap .select-box i {
    position: absolute;
    width: 7px;
    height: 4px;
    background: url("../../assets/images/icon-arrow.png") -7px -7px no-repeat;
    top: 9px;
    right: 6px;
  }

  .select-wrap .select-box:hover i {
    background-position: 0 -7px;
  }

  .select-wrap .select-list {
    position: absolute;
    top: 35px;
    left: 64px;
    z-index: 99;
    width: 132px;
    height: 190px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 3px;
  }

  .select-wrap .select-list li {
    /*text-align: center;*/
    padding: 2px 0 2px 10px;
    cursor: pointer;
  }

  .select-wrap .select-list li:hover {
    background-color: #f5f5f5;
  }
</style>
