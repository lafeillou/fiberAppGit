<template>
<div>
<div class="section-header-title">
  <div class="container clearfix">
    <div class="header-title-brand float-left">
      <a class="h1 title-name">光纤结构图</a>
      <p class="title-description">
        长飞光纤 | 智慧联接  美好生活
      </p>
      <br/>
      <p class="title-description">yofc.com</p>
    </div>

    <div class="header-buttons float-right">
      <div class="text-right">
        <a class="fs18">lafeillou@isoftstone.com</a>
        <br/>
        <a>登出</a>
      </div>
    </div>
  </div>
</div>

  <div class="container">
    <!--第一步 step1 -->
    <el-form ref="step1" :model="step1" class="global-form">
      <div class="form-item-group">
         <h1 class="press-item-title" href="#">
           <el-tag effect="dark" type="danger" style="float: left;margin-top: 8px;margin-right:10px;font-size:16px;font-weight:400;"> Step1 </el-tag>缆芯选择</h1>
         <el-form-item label="每管芯数" v-show="step1.coreNumberPerPipe_isShow">
            <template slot="label">
              <div class="h3">每管芯数</div>
            </template>
            <div style="width:350px;clear:both;">
              <el-select v-model="step1.coreNumberPerPipe" placeholder="请选择" clearable @change.once="(val) => step1.unitNum_isShow = true">
                <el-option :value="item" v-for="(item,index) in step1.coreNumberPerPipeList" :key="index"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="单元数" v-show="step1.unitNum_isShow">
            <template slot="label">
              <div class="h3">单元数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step1.unitNum" placeholder="请输入" clearable @change.once="(val) => step1.drivepipeNum_isShow = true"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="套管数" v-show="step1.drivepipeNum_isShow">
            <template slot="label">
              <div class="h3">套管数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step1.drivepipeNum" placeholder="请输入" clearable @change.once="(val) => step1.paddingRopeNum_isShow = true"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="填充绳数" v-show="step1.paddingRopeNum_isShow">
            <template slot="label">
              <div class="h3">填充绳数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step1.paddingRopeNum" placeholder="请输入" clearable @change.once="(val) => step1.reinforceCoreType_isShow = true"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="加强芯" v-show="step1.reinforceCoreType_isShow">
            <template slot="label">
              <div class="h3">加强芯</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :mustable="1" :data="step1.reinforceCoreTypeList" :value="step1.reinforceCoreType" @select.once="step1.waterBlockingType_isShow = true" @select="(item) => {step1.reinforceCoreType = item.value;}"></CustomRadioCheck>
            </div>
          </el-form-item>

          <el-form-item label="阻水方式" v-show="step1.waterBlockingType_isShow">
            <template slot="label">
              <div class="h3">阻水方式</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :mustable="1" :data="step1.waterBlockingTypeList" :value="step1.waterBlockingType" @select.once="step1.bigComponent_isShow = true" @select="(item) => {step1.waterBlockingType = item.value;}"></CustomRadioCheck>
            </div>
          </el-form-item>

          <el-form-item label="大套组件" v-show="step1.bigComponent_isShow">
            <template slot="label">
              <div class="h3">大套组件</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step1.bigComponent" :data="step1.bigComponentList" :value="step1.bigComponent" @switch-select.once="mustable.step2.global = true" @select="(item) => {step1.bigComponent = item.value}" @switch-select="(bool) => {mustable.step1.bigComponent = bool}"></CustomRadioCheck>
            </div>
          </el-form-item>
      </div>
    </el-form>
    <!--第二步 step2 -->
    <el-form ref="step2" :model="step2" class="global-form" v-if="mustable.step2.global">
      <div class="form-item-group">
         <h1 class="press-item-title" href="#">
           <el-tag effect="dark" type="danger" style="float: left;margin-top: 8px;margin-right:10px;font-size:16px;font-weight:400;"> Step2 </el-tag>二次成缆选择
        </h1>
        <CustomSwitch :value="mustable.step2.formShow" @switch-select="(val) => mustable.step2.formShow = val"></CustomSwitch>
        <div v-if="mustable.step2.formShow === 1">
          <el-form-item label="每管芯数" v-show="step2.coreNumberPerPipe_isShow">
            <template slot="label">
              <div class="h3">每管芯数</div>
            </template>
            <div style="width:350px;clear:both;">
              <el-select v-model="step2.coreNumberPerPipe" placeholder="请选择" clearable @change.once="(val) => step2.unitNum_isShow = true">
                <el-option :value="item" v-for="(item,index) in step2.coreNumberPerPipeList" :key="index"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="单元数" v-show="step2.unitNum_isShow">
            <template slot="label">
              <div class="h3">单元数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step2.unitNum" placeholder="请输入" clearable @change.once="(val) => step2.drivepipeNum_isShow = true"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="套管数" v-show="step2.drivepipeNum_isShow">
            <template slot="label">
              <div class="h3">套管数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step2.drivepipeNum" placeholder="请输入" clearable @change.once="(val) => step2.paddingRopeNum_isShow = true"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="填充绳数" v-show="step2.paddingRopeNum_isShow">
            <template slot="label">
              <div class="h3">填充绳数</div>
            </template>
            <div style="width:210px;clear:both;">
              <el-input v-model="step2.paddingRopeNum" placeholder="请输入" clearable @change.once="(val) => step2.colourSpectrum_isShow = true"></el-input>
            </div>
          </el-form-item>


          <el-form-item label="色谱" v-show="step2.colourSpectrum_isShow">
            <template slot="label">
              <div class="h3">色谱</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="false" :mustable="1" :data="step2.colourSpectrumList" :value="step2.colourSpectrum" @select.once="() => {step2.outsidePipeReset_isShow = true}" @select="(item) => {step2.colourSpectrum = item.value}" ></CustomRadioCheck>
            </div>
          </el-form-item>

          <el-form-item label="外层套管是否重排" v-show="step2.outsidePipeReset_isShow">
            <template slot="label">
              <div class="h3">外层套管是否重排</div>
            </template>
            <div style="clear:both;">
              <CustomSwitch :value="step2.outsidePipeReset" @switch-select="(val) => {step2.outsidePipeReset = val; step2.colourfulPipe_isShow=true}"></CustomSwitch>
            </div>
          </el-form-item>

          <el-form-item label="彩色套管" v-show="step2.colourfulPipe_isShow">
            <template slot="label">
              <div class="h3">彩色套管</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step2.colourfulPipe" :data="step2.colourfulPipeList" :value="step2.colourfulPipe" @switch-select.once="() => {mustable.step3.global = true}" @select="(item) => {step2.colourfulPipe = item.value}" @switch-select="(bool) => {mustable.step2.colourfulPipe = bool}"></CustomRadioCheck>
            </div>
          </el-form-item>

        </div>
      </div>
    </el-form>

    <!--第三步 step2 -->
    <el-form ref="step3" :model="step3" class="global-form" v-if="mustable.step3.global">
      <div class="form-item-group">
         <h1 class="press-item-title" href="#">
           <el-tag effect="dark" type="danger" style="float: left;margin-top: 8px;margin-right:10px;font-size:16px;font-weight:400;"> Step3 </el-tag>一次护套选择
        </h1>

        <el-form-item label="开缆绳" v-show="step3.cableOpeningRope_isShow">
            <template slot="label">
              <div class="h3">开缆绳</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step3.cableOpeningRope" :data="step3.cableOpeningRopeList" :value="step3.cableOpeningRope" @switch-select.once="() =>{step3.waterBlockingType_isShow = true}" @select="(item) => {step3.cableOpeningRope = item.value;}" @switch-select="(bool) => {mustable.step3.cableOpeningRope = bool}"></CustomRadioCheck>
            </div>
        </el-form-item>


        <el-form-item label="阻水方式" v-show="step3.waterBlockingType_isShow">
            <template slot="label">
              <div class="h3">阻水方式</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :mustable="1" :data="step3.waterBlockingTypeList" :value="step3.waterBlockingType" @select.once="() =>{step3.armourStructure1_isShow = true}" @select="(item) => {step3.waterBlockingType = item.value;}"></CustomRadioCheck>
            </div>
        </el-form-item>

        <el-form-item label="铠装结构1" v-show="step3.armourStructure1_isShow">
            <template slot="label">
              <div class="h3">铠装结构1</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step3.armourStructure1" :data="step3.armourStructure1List" :value="step3.armourStructure1" @switch-select.once="() =>{step3.armourStructure2_isShow = true}" @select="(item) => {step3.armourStructure1 = item.value;}" @switch-select="(bool) => {mustable.step3.armourStructure1 = bool}"></CustomRadioCheck>
            </div>
        </el-form-item>

        <el-form-item label="铠装结构2" v-show="step3.armourStructure2_isShow">
            <template slot="label">
              <div class="h3">铠装结构2</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step3.armourStructure2" :data="step3.armourStructure2List" :value="step3.armourStructure2" @switch-select.once="() =>{step3.colorBarStructure_isShow = true}" @select="(item) => {step3.armourStructure2 = item.value;}" @switch-select="(bool) => {mustable.step3.armourStructure2 = bool}"></CustomRadioCheck>
            </div>
        </el-form-item>

        <el-form-item label="彩条结构" v-show="step3.colorBarStructure_isShow">
            <template slot="label">
              <div class="h3">彩条结构</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step3.colorBarStructure" :data="step3.colorBarStructureList" :value="step3.colorBarStructure" @switch-select.once="() =>{step3.nylonSheath_isShow = true}" @select="(item) => {step3.colorBarStructure = item.value;}" @switch-select="(bool) => {mustable.step3.colorBarStructure = bool}"></CustomRadioCheck>
            </div>
        </el-form-item>

        <el-form-item label="尼龙护套" v-show="step3.nylonSheath_isShow">
            <template slot="label">
              <div class="h3">尼龙护套</div>
            </template>
            <div style="clear:both;">
              <CustomRadioCheck :showSwitch="true" :mustable="mustable.step3.nylonSheath" :data="step3.nylonSheathList" :value="step3.nylonSheath" @switch-select.once="() =>{mustable.step4.global = true}" @select="(item) => {step3.nylonSheath = item.value;}" @switch-select="(bool) => {mustable.step3.nylonSheath = bool}"></CustomRadioCheck>
            </div>
        </el-form-item>

      </div>
    </el-form>

    <!--第四步 step4-->
    <el-form ref="step3" :model="step4" class="global-form" v-if="mustable.step4.global">
      <div class="form-item-group">
         <h1 class="press-item-title" href="#">
           <el-tag effect="dark" type="danger" style="float: left;margin-top: 8px;margin-right:10px;font-size:16px;font-weight:400;"> Step4 </el-tag>二次护套选择
        </h1>
        <CustomSwitch :value="mustable.step4.formShow" @switch-select="(val) => {console(val);mustable.step4.formShow = val}"></CustomSwitch>
        <div v-if="mustable.step4.formShow === 1">
            <el-form-item label="开缆绳" v-show="step4.cableOpeningRope_isShow">
                <template slot="label">
                  <div class="h3">开缆绳</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step4.cableOpeningRope" :data="step4.cableOpeningRopeList" :value="step4.cableOpeningRope" @switch-select.once="() =>{step4.waterBlockingType_isShow = true}" @select="(item) => {step4.cableOpeningRope = item.value;}" @switch-select="(bool) => {mustable.step4.cableOpeningRope = bool}"></CustomRadioCheck>
                </div>
            </el-form-item>


            <el-form-item label="阻水方式" v-show="step4.waterBlockingType_isShow">
                <template slot="label">
                  <div class="h3">阻水方式</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :mustable="1" :data="step4.waterBlockingTypeList" :value="step4.waterBlockingType" @select.once="() =>{step4.armourStructure1_isShow = true}" @select="(item) => {step4.waterBlockingType = item.value;}"></CustomRadioCheck>
                </div>
            </el-form-item>

            <el-form-item label="铠装结构1" v-show="step4.armourStructure1_isShow">
                <template slot="label">
                  <div class="h3">铠装结构1</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step4.armourStructure1" :data="step4.armourStructure1List" :value="step4.armourStructure1" @switch-select.once="() =>{step4.armourStructure2_isShow = true}" @select="(item) => {step4.armourStructure1 = item.value;}" @switch-select="(bool) => {mustable.step4.armourStructure1 = bool}"></CustomRadioCheck>
                </div>
            </el-form-item>

            <el-form-item label="铠装结构2" v-show="step4.armourStructure2_isShow">
                <template slot="label">
                  <div class="h3">铠装结构2</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step4.armourStructure2" :data="step4.armourStructure2List" :value="step4.armourStructure2" @switch-select.once="() =>{step4.colorBarStructure_isShow = true}" @select="(item) => {step4.armourStructure2 = item.value;}" @switch-select="(bool) => {mustable.step4.armourStructure2 = bool}"></CustomRadioCheck>
                </div>
            </el-form-item>

            <el-form-item label="彩条结构" v-show="step4.colorBarStructure_isShow">
                <template slot="label">
                  <div class="h3">彩条结构</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step4.colorBarStructure" :data="step4.colorBarStructureList" :value="step4.colorBarStructure" @switch-select.once="() =>{step4.nylonSheath_isShow = true}" @select="(item) => {step4.colorBarStructure = item.value;}" @switch-select="(bool) => {mustable.step4.colorBarStructure = bool}"></CustomRadioCheck>
                </div>
            </el-form-item>

            <el-form-item label="尼龙护套" v-show="step4.nylonSheath_isShow">
                <template slot="label">
                  <div class="h3">尼龙护套</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step4.nylonSheath" :data="step4.nylonSheathList" :value="step4.nylonSheath" @switch-select.once="() =>{mustable.step5.global = true}" @select="(item) => {step4.nylonSheath = item.value;}" @switch-select="(bool) => {mustable.step4.nylonSheath = bool}"></CustomRadioCheck>
                </div>
            </el-form-item>
        </div>
      </div>
    </el-form>
    <!--第五步 step5-->
    <el-form ref="step5" :model="step5" class="global-form" v-if="mustable.step5.global">
      <div class="form-item-group">
         <h1 class="press-item-title" href="#">
           <el-tag effect="dark" type="danger" style="float: left;margin-top: 8px;margin-right:10px;font-size:16px;font-weight:400;"> Step5 </el-tag>辅助组件选择
        </h1>
        <CustomSwitch :value="mustable.step5.formShow" @switch-select="(val) => {console(val);mustable.step5.formShow = val; val === 0 ? (showFiberResultPic= true):(showFiberResultPic= false)}"></CustomSwitch>

        <div v-if="mustable.step5.formShow === 1">
          <el-form-item label="每管{m}根{n}芯光纤带"  v-show="step5.xy_isShow" class="no-el-form-item__content">
            <template slot="label">
              <div class="h3">
              每管&nbsp;&nbsp;
              <el-select v-model="step5.x" placeholder="{m}" clearable @change.once="(val) => {}">
                <el-option :value="item" v-for="(item,index) in [0,1,2,3,4,5,6,7,8,9,10,11,12]" :key="index"></el-option>
              </el-select>
              &nbsp;&nbsp;根&nbsp;&nbsp;
               <el-select v-model="step5.y" placeholder="{n}" clearable @change.once="(val) => {step5.auxiliaryReinforcement_isShow = true}" :disabled="step5.x === 0 || step5.x === ''">
                <el-option :value="item" v-for="(item,index) in [0,1,2,4,6,8,10,12]" :key="index"></el-option>
              </el-select>
              &nbsp;&nbsp;芯光纤带
              </div>
            </template>
            <div style="clear:both;">&nbsp;</div>
          </el-form-item>

          <el-form-item label="辅助加强件" v-show="step5.auxiliaryReinforcement_isShow">
                <template slot="label">
                  <div class="h3">辅助加强件</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step5.auxiliaryReinforcement" :data="step5.auxiliaryReinforcementList" :value="step5.auxiliaryReinforcement" @switch-select.once="() =>{step5.waterCable_isShow = true}" @select="(item) => {step5.auxiliaryReinforcement = item.value;}" @switch-select="(bool) => {mustable.step5.auxiliaryReinforcement = bool}"></CustomRadioCheck>
                </div>
          </el-form-item>

          <el-form-item label="水缆" v-show="step5.waterCable_isShow">
                <template slot="label">
                  <div class="h3">水缆</div>
                </template>
                <div style="clear:both;">
                  <CustomRadioCheck :showSwitch="true" :mustable="mustable.step5.waterCable" :data="step5.waterCableList" :value="step5.waterCable" @switch-select.once="() =>{console('输出图');}" @select="(item) => {step5.waterCable = item.value;showFiberResultPic= true}" @switch-select="(bool) => {mustable.step5.waterCable = bool}"></CustomRadioCheck>
                </div>
          </el-form-item>

        </div>
      </div>
    </el-form>

  </div>
  <!--生成光纤结构图-->
  <div class="container" v-if="showFiberResultPic" style="margin-bottom:200px;">
    <img :src="testPic" />
  </div>
</div>
</template>

<script>
import CustomRadioCheck from '@/components/custom-radio-check'
import totalData from '@/data/totalData.js'
import CustomSwitch from '@/components/custom-switch.vue'
import testPic from '@/assets/fiber/test.png'

export default {
  components: {
    CustomRadioCheck,
    CustomSwitch
  },
  data() {
    return {
      testPic: testPic,
      // 是否显示生成的光纤结构图
      showFiberResultPic: false,
      mustable: {
        step1: {
          global:true,
          bigComponent: -1
        },
        step2: {
          global:false,
          formShow: -1,
          bigComponent: -1,
          colourfulPipe: -1
        },
        step3: {
          global: false,
          // 开缆绳
          cableOpeningRope: -1,
          // 铠装结构1
          armourStructure1: -1,
          // 铠装结构2
          armourStructure2: -1,
          // 彩条结构
          colorBarStructure: -1,
          // 尼龙护套
          nylonSheath: -1,
        },
        step4: {
          global: false,
          formShow:  -1
        },
        step5: {
          global: false,
          formShow:  -1,
          // 辅助加强件
          auxiliaryReinforcement: -1,
          // 水缆
          waterCable: -1
        }
      },
      // 缆芯选择
      step1: {
        // 每管芯数
        coreNumberPerPipe: '',
        coreNumberPerPipe_isShow: true,
        // 可供选择的每管芯数
        coreNumberPerPipeList: totalData.coreNumberPerPipeList,
        // 单元数
        unitNum: '',
        unitNum_isShow: false,
        // 套管数
        drivepipeNum: '',
        drivepipeNum_isShow:false,
        // 填充绳数
        paddingRopeNum: '',
        paddingRopeNum_isShow: false,
        // 可供选择的加强芯种类
        reinforceCoreTypeList: totalData.reinforceCoreTypeList,
        // 加强芯种类
        reinforceCoreType: -1,
        reinforceCoreType_isShow: false,
        // 阻水方式
        waterBlockingType: -1,
        waterBlockingType_isShow: false,
        // 可供选择的阻水方式
        waterBlockingTypeList: totalData.waterBlockingTypeList,
        // 大套组件
        bigComponent: -1,
        bigComponent_isShow: false,
        // 可供选择的大套组件
        bigComponentList: totalData.bigComponentList
      },
      // 二次成缆缆芯选择
      step2: {
       // 每管芯数
        coreNumberPerPipe: '',
        coreNumberPerPipe_isShow: true,
        // 可供选择的每管芯数
        coreNumberPerPipeList: totalData.coreNumberPerPipeList,
        // 单元数
        unitNum: '',
        unitNum_isShow: false,
        // 套管数
        drivepipeNum: '',
        drivepipeNum_isShow:false,
        // 填充绳数
        paddingRopeNum: '',
        paddingRopeNum_isShow: false,
        // 色谱
        colourSpectrum: -1,
        colourSpectrum_isShow: false,
        colourSpectrumList: totalData.colourSpectrumList,
        // 外层套管是否重排
        outsidePipeReset: -1,
        outsidePipeReset_isShow: false,
        // 彩色套管
        colourfulPipe: -1,
        colourfulPipe_isShow: false,
        colourfulPipeList: totalData.colourfulPipeList,
      },
      // 一次护套选择
      step3: {
        // 开缆绳
        cableOpeningRope: -1,
        cableOpeningRope_isShow: true,
        cableOpeningRopeList: totalData.cableOpeningRopeList,
        // 阻水方式
        waterBlockingType: -1,
        waterBlockingType_isShow: false,
        waterBlockingTypeList: totalData.waterBlockingTypeList2,
        // 铠装结构1
        armourStructure1: -1,
        armourStructure1_isShow: false,
        armourStructure1List: totalData.armourStructureList1,
        // 铠装结构2
        armourStructure2: -1,
        armourStructure2_isShow: false,
        armourStructure2List: totalData.armourStructureList2,
        // 彩条结构
        colorBarStructure: -1,
        colorBarStructure_isShow: false,
        colorBarStructureList: totalData.colorBarStructureList1,
        // 尼龙护套
        nylonSheath: -1,
        nylonSheath_isShow: false,
        nylonSheathList: totalData.nylonSheathList
      },
      step4: {
        // 开缆绳
        cableOpeningRope: -1,
        cableOpeningRope_isShow: true,
        cableOpeningRopeList: totalData.cableOpeningRopeList,
        // 阻水方式
        waterBlockingType: -1,
        waterBlockingType_isShow: false,
        waterBlockingTypeList: totalData.waterBlockingTypeList2,
        // 铠装结构1
        armourStructure1: -1,
        armourStructure1_isShow: false,
        armourStructure1List: totalData.armourStructureList1,
        // 铠装结构2
        armourStructure2: -1,
        armourStructure2_isShow: false,
        armourStructure2List: totalData.armourStructureList2,
        // 彩条结构
        colorBarStructure: -1,
        colorBarStructure_isShow: false,
        colorBarStructureList: totalData.colorBarStructureList2,
        // 尼龙护套
        nylonSheath: -1,
        nylonSheath_isShow: false,
        nylonSheathList: totalData.nylonSheathList
      },
      step5: {
        // 每管x根y芯光纤带
        x: 0,
        y: 0,
        xy_isShow: true,
        // 辅助加强件
        auxiliaryReinforcement: -1,
        auxiliaryReinforcementList : totalData.auxiliaryReinforcementList,
        auxiliaryReinforcement_isShow: false,
        // 水缆
        waterCable: -1,
        waterCable_isShow:false,
        waterCableList: totalData.waterCableList
      }
    }
  },
  methods: {
    changed(val) {
      console.log(val)
    },
    console(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
// 页头
  .section-header-title{
    background: #F64747;
    color: #ffffff;
    padding: 24px 0;
    margin-bottom: 30px;
    a{
      color:#fff;
    }
    .title-name{
      margin: 0;
    line-height: 1em;
    float: left;
    }

    .title-description{
    margin: 0;
    font-size: 12px;
    float: left;
    width: 190px;
    line-height: 1em;
    padding-top: 6px;
    padding-left: 25px;
    }
  }

  //
  .global-form{
    margin-bottom:100px;
    .form-item-group{
      h1, .h1{
        color:rgb(51, 51, 51);
        font-weight:900;
      }
      h3, .h3{
        color:rgb(51, 51, 51);
        font-weight:900;
      }
    }

    .no-el-form-item__content{
      .el-form-item__content {
        display:none !important;
      }
    }
  }

</style>
