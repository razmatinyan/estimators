<template>
  <div
    class="flex justify-center items-center bg-teamBg h-full"
    :class="$mq === 'lg' ? 'w-1/2' : 'w-full'"
  >
    <div class="flex justify-center relative items-center h-full">
      <img
        :class="
          `${
            $mq === 'lg' ? 'clockCircle' : 'clockCircleMD'
          } absolute top-8 bg-gray-100 rounded-full`
        "
        src="../assets/images/TeamMembersImg/Circke.svg"
        alt=""
      />
      <Clock
        type="big"
        :class="`${$mq === 'lg' ? 'clockCircle' : 'clockCircleMD'}`"
      />
      <!-- <div class="absolute z-10"> -->
      <div
        class="grid-container"
        :style="{ 'grid-row-gap': $mq === 'lg' ? '8vh' : '0vh' }"
      >
        <div class="grid-item"></div>
        <div class="grid-item">
          <!-- web-app-wrapper -->
          <div
            class="web-app-wrapper  w-full h-full flex flex-col items-center relative justify-between z-10"
            :class="{ isActive: isInCategs('web_app') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'Web-App'"
              @mouseleave="hovered = null"
              @click="isCheck('web_app')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 379.47 261.5"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <g>
                    <path
                      :class="{ anim: mayAnimate }"
                      class="fil0 path0"
                      d="M377.5 239.57l-38.66 0 0 -4.14 38.66 0 1.97 2.07 -1.97 2.07zm0 -4.14l1.97 0 0 2.07 -1.97 -2.07zm-1.97 9.87l0 -7.8 3.94 0 0 7.8 0 0 -3.94 0zm-12.16 16.2l0 -4.14 0 0 0.63 -0.02 0.62 -0.05 0.61 -0.08 0.6 -0.11 0.59 -0.14 0.58 -0.17 0.57 -0.19 0.55 -0.22 0.54 -0.24 0.53 -0.27 0.51 -0.29 0.49 -0.32 0.48 -0.34 0.46 -0.36 0.44 -0.38 0.42 -0.4 0.4 -0.42 0.38 -0.44 0.36 -0.46 0.34 -0.47 0.32 -0.49 0.29 -0.5 0.27 -0.52 0.24 -0.53 0.21 -0.54 0.19 -0.56 0.16 -0.57 0.13 -0.58 0.11 -0.59 0.08 -0.6 0.05 -0.6 0.02 -0.61 3.94 0 -0.02 0.83 -0.06 0.83 -0.1 0.81 -0.14 0.8 -0.18 0.79 -0.22 0.77 -0.26 0.76 -0.29 0.74 -0.33 0.72 -0.36 0.7 -0.39 0.68 -0.42 0.66 -0.45 0.63 -0.48 0.61 -0.51 0.59 -0.53 0.56 -0.56 0.53 -0.59 0.51 -0.61 0.48 -0.63 0.45 -0.65 0.42 -0.67 0.39 -0.69 0.36 -0.71 0.32 -0.73 0.29 -0.74 0.25 -0.76 0.22 -0.77 0.18 -0.79 0.14 -0.8 0.1 -0.81 0.06 -0.82 0.02 0 0zm-347.27 -4.14l347.27 0 0 4.14 -347.27 0 0 0 0 -4.14zm-16.1 -12.06l3.94 0 0 0 0.02 0.61 0.05 0.6 0.08 0.6 0.11 0.59 0.13 0.58 0.16 0.57 0.19 0.56 0.21 0.54 0.24 0.53 0.27 0.52 0.29 0.5 0.32 0.49 0.34 0.47 0.36 0.46 0.38 0.44 0.4 0.42 0.42 0.4 0.44 0.38 0.46 0.36 0.48 0.34 0.49 0.32 0.51 0.29 0.53 0.27 0.54 0.24 0.55 0.22 0.57 0.19 0.58 0.17 0.59 0.14 0.6 0.11 0.61 0.08 0.62 0.05 0.63 0.02 0 4.14 -0.82 -0.02 -0.81 -0.06 -0.8 -0.1 -0.79 -0.14 -0.77 -0.18 -0.76 -0.22 -0.74 -0.25 -0.73 -0.29 -0.71 -0.32 -0.69 -0.36 -0.67 -0.39 -0.65 -0.42 -0.63 -0.45 -0.61 -0.48 -0.59 -0.51 -0.56 -0.53 -0.53 -0.56 -0.51 -0.59 -0.48 -0.61 -0.45 -0.63 -0.42 -0.66 -0.39 -0.68 -0.36 -0.7 -0.33 -0.72 -0.29 -0.74 -0.26 -0.76 -0.22 -0.77 -0.18 -0.79 -0.14 -0.8 -0.1 -0.81 -0.06 -0.83 -0.02 -0.83 0 0zm3.94 -7.8l0 7.8 -3.94 0 0 -7.8 1.97 -2.07 1.97 2.07zm-3.94 0l0 -2.07 1.97 0 -1.97 2.07zm38.73 2.07l-36.76 0 0 -4.14 36.76 0 0 4.14zm13.78 -217.5l-0 13.8 -3.94 0 0 -13.8 1.97 -2.07 1.97 2.07zm-3.94 0l0 -2.07 1.97 0 -1.97 2.07zm284.5 2.07l-282.53 0 0 -4.14 282.53 0 1.97 2.07 -1.97 2.07zm0 -4.14l1.97 0 0 2.07 -1.97 -2.07zm-1.97 19.59l0 -17.52 3.94 0 0 17.52 -1.97 2.07 -1.97 -2.07zm3.94 0l0 2.07 -1.97 0 1.97 -2.07zm-286.25 -2l284.28 -0.07 0 4.14 -284.28 0.07 -0 -4.14zm282.31 186.36l0 -180.76 3.94 0 0 180.76 -1.97 2.07 -1.97 -2.07zm3.94 0l0 2.07 -1.97 0 1.97 -2.07zm-284.5 -2.07l282.53 0 0 4.14 -282.53 0 -1.97 -2.07 1.97 -2.07zm0 4.14l-1.97 0 0 -2.07 1.97 2.07zm1.97 -185.5l0 183.43 -3.94 0 0 -183.43 3.94 0zm-23.08 182.73l3.94 0 0 0 0.02 0.61 0.05 0.6 0.08 0.6 0.11 0.59 0.13 0.58 0.16 0.57 0.19 0.56 0.21 0.54 0.24 0.53 0.27 0.52 0.29 0.5 0.31 0.49 0.34 0.47 0.36 0.46 0.38 0.44 0.4 0.42 0.42 0.4 0.44 0.38 0.46 0.36 0.48 0.34 0.49 0.32 0.51 0.29 0.53 0.27 0.54 0.25 0.55 0.22 0.57 0.19 0.58 0.17 0.59 0.14 0.6 0.11 0.61 0.08 0.62 0.05 0.63 0.02 0 4.14 -0.82 -0.02 -0.81 -0.06 -0.8 -0.1 -0.79 -0.14 -0.77 -0.18 -0.76 -0.22 -0.74 -0.25 -0.73 -0.29 -0.71 -0.32 -0.69 -0.36 -0.67 -0.39 -0.65 -0.42 -0.63 -0.45 -0.61 -0.48 -0.58 -0.51 -0.56 -0.53 -0.53 -0.56 -0.51 -0.59 -0.48 -0.61 -0.45 -0.63 -0.42 -0.66 -0.39 -0.68 -0.36 -0.7 -0.33 -0.72 -0.29 -0.74 -0.26 -0.76 -0.22 -0.77 -0.18 -0.79 -0.14 -0.8 -0.1 -0.81 -0.06 -0.83 -0.02 -0.83 0 0zm3.94 -207.05l0 207.05 -3.94 0 0 -207.05 0 0 3.94 0zm12.16 -16.2l0 4.14 0 0 -0.63 0.02 -0.62 0.05 -0.61 0.08 -0.6 0.11 -0.59 0.14 -0.58 0.17 -0.57 0.19 -0.55 0.22 -0.54 0.25 -0.53 0.27 -0.51 0.29 -0.49 0.32 -0.48 0.34 -0.46 0.36 -0.44 0.38 -0.42 0.4 -0.4 0.42 -0.38 0.44 -0.36 0.46 -0.34 0.47 -0.31 0.49 -0.29 0.5 -0.27 0.52 -0.24 0.53 -0.21 0.54 -0.19 0.56 -0.16 0.57 -0.13 0.58 -0.11 0.59 -0.08 0.6 -0.05 0.6 -0.02 0.61 -3.94 0 0.02 -0.83 0.06 -0.83 0.1 -0.81 0.14 -0.8 0.18 -0.79 0.22 -0.77 0.26 -0.76 0.29 -0.74 0.33 -0.72 0.36 -0.7 0.39 -0.68 0.42 -0.66 0.45 -0.63 0.48 -0.61 0.51 -0.59 0.53 -0.56 0.56 -0.53 0.58 -0.51 0.61 -0.48 0.63 -0.45 0.65 -0.42 0.67 -0.39 0.69 -0.36 0.71 -0.32 0.73 -0.29 0.74 -0.25 0.76 -0.22 0.77 -0.18 0.79 -0.14 0.8 -0.1 0.81 -0.06 0.82 -0.02 0 0zm288.33 4.14l-288.33 0 0 -4.14 288.33 0 0 0 0 4.14zm16.1 12.06l-3.94 0 0 0 -0.02 -0.61 -0.05 -0.6 -0.08 -0.6 -0.11 -0.59 -0.13 -0.58 -0.16 -0.57 -0.19 -0.56 -0.21 -0.54 -0.24 -0.53 -0.27 -0.52 -0.29 -0.5 -0.32 -0.49 -0.34 -0.47 -0.36 -0.46 -0.38 -0.44 -0.4 -0.42 -0.42 -0.4 -0.44 -0.38 -0.46 -0.36 -0.48 -0.34 -0.49 -0.32 -0.51 -0.29 -0.53 -0.27 -0.54 -0.24 -0.55 -0.22 -0.57 -0.19 -0.58 -0.17 -0.59 -0.14 -0.6 -0.11 -0.61 -0.08 -0.62 -0.05 -0.63 -0.02 0 -4.14 0.82 0.02 0.81 0.06 0.8 0.1 0.79 0.14 0.77 0.18 0.76 0.22 0.74 0.25 0.73 0.29 0.71 0.32 0.69 0.36 0.67 0.39 0.65 0.42 0.63 0.45 0.61 0.48 0.59 0.51 0.56 0.53 0.53 0.56 0.51 0.59 0.48 0.61 0.45 0.63 0.42 0.66 0.39 0.68 0.36 0.7 0.33 0.72 0.29 0.74 0.26 0.76 0.22 0.77 0.18 0.79 0.14 0.8 0.1 0.81 0.06 0.83 0.02 0.83 0 0zm-3.94 207.05l0 -207.05 3.94 0 0 207.05 0 0 -3.94 0zm-3.42 15.97l-0 -4.14 0 0 0.6 -0.02 0.53 -0.04 0.46 -0.07 0.39 -0.09 0.32 -0.1 0.26 -0.11 0.21 -0.11 0.17 -0.12 0.13 -0.12 0.11 -0.13 0.1 -0.15 0.09 -0.17 0.09 -0.21 0.08 -0.25 0.07 -0.29 0.06 -0.33 0.05 -0.37 0.03 -0.41 0.02 -0.45 0 -0.48 -0.01 -0.52 -0.02 -0.55 -0.03 -0.58 -0.03 -0.6 -0.04 -0.62 -0.04 -0.65 -0.04 -0.67 -0.04 -0.69 -0.04 -0.71 -0.03 -0.73 -0.02 -0.75 -0.01 -0.76 3.94 0 0.01 0.69 0.02 0.68 0.03 0.67 0.03 0.67 0.04 0.66 0.04 0.65 0.04 0.65 0.04 0.64 0.04 0.63 0.03 0.62 0.02 0.62 0.01 0.61 -0.01 0.6 -0.02 0.6 -0.05 0.59 -0.07 0.59 -0.11 0.59 -0.14 0.58 -0.19 0.57 -0.24 0.56 -0.3 0.55 -0.36 0.52 -0.42 0.48 -0.48 0.43 -0.53 0.38 -0.57 0.32 -0.61 0.26 -0.65 0.21 -0.68 0.15 -0.72 0.11 -0.76 0.06 -0.8 0.02 0 0zm-290.23 -3.79l290.23 -0.35 0 4.14 -290.23 0.35 -0 -4.14zm251.69 -166.56l-111.35 0 0 -4.14 111.35 0 1.97 2.07 -1.97 2.07zm0 -4.14l1.97 0 0 2.07 -1.97 -2.07zm-1.97 67.92l0 -65.84 3.94 0 0 65.84 -1.97 2.07 -1.97 -2.07zm3.94 0l0 2.07 -1.97 0 1.97 -2.07zm-113.32 -2.07l111.35 0 0 4.14 -111.35 0 -1.97 -2.07 1.97 -2.07zm0 4.14l-1.97 0 0 -2.07 1.97 2.07zm1.97 -67.92l0 65.84 -3.94 0 0 -65.84 1.97 -2.07 1.97 2.07zm-3.94 0l0 -2.07 1.97 0 -1.97 2.07zm-8.1 2.07l-111.35 0 0 -4.14 111.35 0 1.97 2.07 -1.97 2.07zm0 -4.14l1.97 0 0 2.07 -1.97 -2.07zm-1.97 67.92l0 -65.84 3.94 0 0 65.84 -1.97 2.07 -1.97 -2.07zm3.94 0l0 2.07 -1.97 0 1.97 -2.07zm-113.32 -2.07l111.35 0 0 4.14 -111.35 0 -1.97 -2.07 1.97 -2.07zm0 4.14l-1.97 0 0 -2.07 1.97 2.07zm1.97 -67.92l0 65.84 -3.94 0 0 -65.84 1.97 -2.07 1.97 2.07zm-3.94 0l0 -2.07 1.97 0 -1.97 2.07z"
                    />
                  </g>
                  <path
                    :class="{ anim: mayAnimate }"
                    class="fil1 str0 color-red-stroke path1 transition-all"
                    :style="
                      getSelectedCategs.includes('web_app')
                        ? `stroke: ${getColor(
                            'web_app'
                          )}; filter:drop-shadow(0 0 2px ${getColor(
                            'web_app'
                          )})`
                        : ''
                    "
                    d="M64.47 32.48l25.19 0m176.44 216.36l25.19 0m-220.3 -107.19l230.62 0m-229.55 12.19l0 -14.19m0 35.71l0.11 -14.85m-0.5 34.81l0 -12.76m110.35 -17.83l0 -14.06m-0.59 34.09l0 -12.76m0 33.31l0 -12.76m120.32 -39.47l0 -12.76m-109.67 23.88l0.11 -14.51m109.18 23.75l0 -12.76m-110.15 25.47l0 -15.29m109.17 24.89l0 -12.76m-108.78 23.52l0 -12.76m-120.85 11.3l111.75 0m8.44 0l29.91 0m-29.91 -10.56l111.95 0m-111.95 -10.56l111.95 0m-111.95 -10.56l111.95 0m-111.94 -10.55l110.87 0m-110.87 -10.56l111.95 0m-231.89 42.24l111.95 0m-111.95 -10.56l111.95 0m-111.95 -10.56l111.95 0m-111.95 -10.56l111.95 0m-111.95 -10.56l112.97 0.04m152.99 96.59l25.19 0m-60.55 0l25.19 0"
                  />
                </g>
              </svg>
              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'Web-App' &&
                    !getSelectedCategs.includes('web_app')
                }"
                v-if="$mq === 'lg'"
                class="absolute bottom-0 text-center iconTitle"
              >
                Web-App<br />
                Vue.js / React
              </span>
              <!-- <span
                    class="h-9 w-48 bg-pageRed transition-all rounded-sm text-white text-center bg-gradient-to-br from-pageRed via-pageRed to-pageBlue
                  text-lg p-1 focus:outline-none 2xl:h-8 2xl:w-32 xl:w-32 xl:px-5 lg:px-5 lg:h-7 lg:w-28 lg:text-sm"
                    name="web_app"
                  >
                    Web-App
                  </span> -->
            </div>
          </div>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <!-- iOS-android-wrapper -->
          <div
            class="iOS-android-wrapper w-full h-full flex flex-col items-center relative z-10"
            :class="{ isActive: isInCategs('android_ios') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'Hybrid'"
              @mouseleave="hovered = null"
              @click="isCheck('android_ios')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd; "
                viewBox="0 0 270.76 224.22"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path0 fil0 str0 color-blue-stroke"
                    d="M78.91 178l0 31.94c0,6.83 -5.54,12.37 -12.37,12.37 -6.83,0 -12.37,-5.54 -12.37,-12.37l0.08 -32.14m12.19 -156.17c6.4,-2.08 15,-3.58 23.98,-3.56 9.35,0.03 17.18,1.42 23.75,3.72m103.9 28.1l-5.03 13.15c-2.44,6.38 0.76,13.53 7.14,15.97 6.38,2.44 13.53,-0.75 15.97,-7.14l6.49 -16.99m-122.41 -30.56c13.36,6.6 20.33,17.27 23.96,26.31m-24.89 -25.39l9.78 -13.56c1.02,-1.37 0.75,-3.3 -0.62,-4.32 -1.37,-1.02 -3.3,-0.75 -4.32,0.62l-11.47 14.25m-51.12 2.61l-9.17 -12.75c-1.02,-1.37 -0.75,-3.3 0.62,-4.32 1.37,-1.02 3.3,-0.75 4.32,0.62l10.28 14.05m35.85 44.61l-70.7 0.07c0,0 0.79,-30.31 28.38,-43.28m60.43 188.09c-0.95,5.88 -6.06,10.37 -12.21,10.37 -6.83,0 -12.37,-5.54 -12.37,-12.37l0.05 -31.01m1.85 -0.47l-21.27 0.06m-45.33 -73.31l0.1 -24.27c0,-3.84 3.12,-6.95 6.96,-6.95l55.62 0 2.03 0.07m-72.26 29.79l7.13 0.06m-5.78 7.94l0 26.14c0,6.83 -5.54,12.37 -12.37,12.37 -6.83,0 -12.37,-5.54 -12.37,-12.37l0 -55.59c0,-6.83 5.54,-12.37 12.37,-12.37 6.83,0 12.37,5.54 12.37,12.37l-0.15 22.76m28.89 73.89l-15.47 0c-3.84,0 -6.99,-0.2 -6.99,-4.04l0 -63.07m-7.6 1.18l8.8 0.06m84.69 14.59c5.02,10.36 24.51,9.41 29.79,19.76 -0.29,-14.39 14.92,-21.19 15.52,-33.08l-45.3 13.32zm37.69 40.32l3.21 1.75 -1.75 3.21 -3.21 -1.75 1.75 -3.21zm36.14 22.74c1.07,-10.21 -19.02,-2.52 -31.12,-10.93 -8.53,22.08 -31.02,14.32 -27.31,28.12 2.11,-0.43 4.37,-1.34 6.23,-1.89l45.76 -13.47c1.79,-0.52 4.29,-1.05 6.44,-1.83zm-41.94 -27.21l3.21 1.75 -1.75 3.21 -3.21 -1.75 1.75 -3.21zm3.87 -6.28l3.21 1.75 -1.75 3.21 -3.21 -1.75 1.75 -3.21zm-5.3 -5.1l3.21 1.75 -1.75 3.21 -3.21 -1.75 1.75 -3.21z"
                  />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="fil0 str1 path1 color-red-stroke transition-all"
                    :style="
                      getSelectedCategs.includes('android_ios')
                        ? `stroke: ${getColor(
                            'android_ios'
                          )}; filter:drop-shadow(0 0 2px ${getColor(
                            'android_ios'
                          )})`
                        : ''
                    "
                    d="M174.15 54.66c31.23,-5.99 48.1,-23.04 44.04,-53.05 -30.84,7.54 -44.23,26.54 -43.17,54.03m94.12 107.04c-39.46,-19.58 -40.65,-67.64 -6.62,-89.71 -13.13,-16.05 -29.36,-24.03 -49.64,-22.26 -6.84,1.09 -13.24,3.18 -19.29,6.09 -10.25,4.53 -19.21,5.99 -26.01,2.34 -19.06,-10.28 -37.02,-11.12 -53.66,-0.54 -23.88,15.9 -33.32,41.75 -29.19,76.94 4.17,24.04 12.62,45.77 26.74,64.48 5.82,8.2 12.79,15.17 21.64,20.1 7.85,4.62 17.71,3.22 28.86,-2.01 12.43,-5.46 24.79,-7.5 36.98,-0.53 14.57,5.62 23.35,8.58 35.56,-1.68 13.81,-9.62 25.43,-27.08 34.63,-53.2zm-147.04 -120.69c0,3.83 -3.11,6.94 -6.94,6.94 -3.83,0 -6.94,-3.11 -6.94,-6.94 0,-3.84 3.11,-6.94 6.94,-6.94 3.83,0 6.94,3.11 6.94,6.94zm-50.06 0c0,3.83 -3.11,6.94 -6.94,6.94 -3.83,0 -6.94,-3.11 -6.94,-6.94 0,-3.84 3.11,-6.94 6.94,-6.94 3.83,0 6.94,3.11 6.94,6.94z"
                  />
                </g>
              </svg>
              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'Hybrid' &&
                    !getSelectedCategs.includes('android_ios')
                }"
                v-if="$mq === 'lg'"
                class="absolute bottom-0 text-right right-1/4 iconTitle"
              >
                Hybrid<br />
                Flutter / Native
              </span>
            </div>
          </div>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <!-- android-wrapper -->
          <div
            class="android-wrapper  w-full h-full flex flex-col items-center relative justify-between"
            :class="{ isActive: isInCategs('android') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'Android'"
              @mouseleave="hovered = null"
              @click="isCheck('android')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd;"
                viewBox="0 0 801.78 1096.41"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path0 fil0 str0 color-blue-stroke"
                    d="M183.46 876.34l-34.42 0c-18.89,0 -34.21,-15.32 -34.21,-34.21l0 -85.92m407.3 -226.34c7.35,-4.13 18.16,-8.3 21.62,-22.44 2.96,-12.1 -2.07,-22.64 -9.69,-28.95 -7.1,-5.88 -26.84,-10.38 -36.96,-13.41 -9.83,-2.93 -50.49,-16.49 -59.12,-15.88 -5.25,0.37 -10.87,2.3 -14.2,4.66 -9.02,6.41 -15.12,17.21 -12.08,30.4 2.41,10.45 25.81,46.42 27.2,52.88 -10.84,6.63 -38.74,20.87 -52.06,28.13 -3.95,2.16 -8.61,3.67 -11.95,8.84 -3.53,5.5 -4.3,11.35 -2.96,16.67 3.32,13.25 16.17,15.23 27.91,18.76 26.79,8.01 53.58,16.02 80.37,24.04 9.88,2.95 22.01,7.96 31.75,-2.9 3.57,-3.98 5.78,-10.77 5,-16.33 -1.06,-7.68 -9.58,-17.75 -12.22,-24.96m85.66 163.91c-20.79,71.28 -40.07,138.48 -50.37,177.38 -20.01,75.66 -61.71,54.87 -147.05,33.16 -36.82,-9.38 -73.8,-21.64 -109.12,-30.85l-6.81 -2.76c-71.3,-27.55 -99.72,-16.76 -98.77,-97.46 1.23,-12.07 6.28,-33.47 13.79,-60.72m147.49 -456.5l-229.69 0c0,0 3.86,-148.25 138.4,-212.39m5.66 4.03l-53.15 -72.3c-5.3,-7.08 -3.87,-17.11 3.2,-22.41 7.08,-5.3 17.1,-3.87 22.41,3.2l54.25 76.93m-2.17 -1.58c31.97,-10.68 69.99,-16.99 115.23,-16.85 46,0.14 84.56,7 116.87,18.31m32.07 16.3l54.59 -76c5.3,-7.08 3.87,-17.1 -3.2,-22.41 -7.08,-5.3 -17.11,-3.87 -22.41,3.2l-65.23 80.25m39.69 14.06c126.18,66.37 131.44,207.68 131.44,207.68m-58.1 217.75c4.86,-16.17 34.24,-105.84 35.88,-126.51 2.37,-29.56 -23.28,-43.54 -47.61,-50.45 -50.92,-14.47 -91.98,-29.51 -143.36,-43.15 -106.84,-34.27 -81.91,-17.4 -161.7,215.77 -12.62,52.96 -35.23,106.2 -51.32,161.65 -22.26,76.63 21.54,65.72 98.44,93.84 35.22,9.12 75.48,22.28 111.24,32.72 34.71,10.14 62.71,17.65 77.65,-22.81 3.99,-10.81 6.89,-20.92 9.79,-31.92m-334.29 -70.65c38.92,-124.47 98.41,-295.65 105.85,-328.36 5.48,-12.62 19.46,-85.27 38.25,-112.73 4.77,-7.77 12.61,-25.5 58.98,-15.33 14.76,3.24 30.68,5.99 45.43,9.24 29.99,6.57 59.9,15.36 88.35,23.86 170.22,50.84 166.32,54.63 131.75,170.72m-463.16 360.37l99.29 31.73 22.68 75.53 60.1 -43.06 99.02 26.97m-159.16 61.12l2.38 76.54c0,33.62 -27.25,60.87 -60.87,60.87 -33.61,0 -60.87,-27.25 -60.87,-60.87l0 -111.83m463.98 -249.91l0 175.48c0,18.89 -15.31,34.21 -34.2,34.21l-73.1 0 0 152.06c0,33.62 -27.26,60.87 -60.88,60.87 -33.62,0 -60.87,-27.25 -60.87,-60.87l0 -40.78m-342.25 -570.75l0 -23.25c0,-18.89 15.33,-34.2 34.21,-34.2l178.14 0"
                  />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="fil0 str1 path1 color-red-stroke transition-all"
                    :style="
                      getSelectedCategs.includes('android')
                        ? `stroke: ${getColor(
                            'android'
                          )}; filter:drop-shadow(0 0 2px ${getColor(
                            'android'
                          )})`
                        : ''
                    "
                    d="M685.08 434.65c-0.86,1.14 -1.68,2.33 -2.47,3.55l-148.25 229.89c-18.22,28.26 -10.09,65.93 18.17,84.15 28.25,18.21 65.92,10.08 84.14,-18.17l48.85 -75.74m0 0l99.4 -154.14c18.23,-28.26 10.09,-65.93 -18.16,-84.15 -27.03,-17.43 -62.69,-10.74 -81.68,14.62 18.99,-25.36 54.65,-32.05 81.68,-14.62m-301.46 107.06c-7.39,8.87 -13.04,5.87 6.64,18.92 4.6,3.04 -17.68,5.43 -27.18,3.42 -3.59,-0.77 20.38,9.51 18.6,11.64 -1.44,-0.08 -15.18,10.39 -7.31,12.72m-342.81 178.89c-3,-4.24 -5.52,-8.95 -7.41,-14.08l-94.9 -256.55c-11.67,-31.54 4.44,-66.56 35.96,-78.22 25.25,-9.34 52.74,-0.88 68.67,19.06m0 0c3.96,4.96 7.22,10.64 9.55,16.92l94.9 256.55c11.67,31.53 -4.44,66.55 -35.97,78.21 -26.41,9.77 -55.27,0.05 -70.8,-21.89m337.84 -176.07c-26.06,18.81 -45,-4.92 -51,13.5 2.72,1.09 5.95,1.71 8.48,2.46l62 18.55c2.44,0.73 5.67,1.99 8.67,2.69 8.79,-10.82 -19.6,-16.16 -27.12,-34.67m-7.31 -108.4c-2.33,18.51 24.99,34.46 23.01,53.19 12.34,-19.81 39.01,-15.61 50.33,-31.24l-73.34 -21.95zm-129.51 -265.51c0,19.87 -16.12,35.98 -35.98,35.98 -19.87,0 -35.98,-16.11 -35.98,-35.98 0,-19.87 16.11,-35.98 35.98,-35.98 19.86,0 35.98,16.11 35.98,35.98zm239.57 -1.36c0,19.87 -16.12,35.98 -35.98,35.98 -19.87,0 -35.98,-16.11 -35.98,-35.98 0,-19.87 16.11,-35.98 35.98,-35.98 19.86,0 35.98,16.11 35.98,35.98z"
                  />
                </g>
              </svg>

              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'Android' &&
                    !getSelectedCategs.includes('android')
                }"
                v-if="$mq === 'lg'"
                class="absolute left-1/4 text-left bottom-0 iconTitle"
              >
                Android<br />
                Kotlin / Java
              </span>
              <!-- <span
                    class="h-9 w-48 bg-pageRed transition-all rounded-sm text-white bg-gradient-to-br from-pageRed via-pageRed to-pageBlue
                   text-center text-lg p-1 focus:outline-none 2xl:h-8 2xl:w-32 xl:w-40 lg:h-7 lg:w-28 lg:text-sm"
                    name="android"
                  >
                    Android
                  </span> -->
            </div>
          </div>
        </div>
        <div class="grid-item">
          <!-- watch-OS-wrapper -->
          <div
            class="watch-OS-wrapper  w-full h-full flex flex-col items-center relative"
            :class="{ isActive: isInCategs('watch_os') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'Watch OS'"
              @mouseleave="hovered = null"
              @click="isCheck('watch_os')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 97.42 178.97"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path0 fil0 str0 color-blue-stroke"
                    d="M89.57 117.91l0.26 10.44c0.19,7.55 -6.18,13.73 -13.73,13.73 -15.23,0 -46.61,0 -61.85,0 -7.55,0 -13.73,-6.18 -13.73,-13.73l0 -77.11c0,-7.55 6.18,-13.73 13.73,-13.73 15.23,0 46.61,0 61.85,0 7.55,0 13.73,6.18 13.73,13.73l0 8.45m-25.97 -53.96l-41.08 0 0 -5.21 43.93 0 0.08 9m-0.08 18.59l0 -4.72 -43.93 0 0 -5.21 43.93 0m0 18.37l0 -4.33 -43.93 0 0 -5.21 43.93 0m0 -8.5l-0 -3.94 -43.93 0 0 -5.21 44.35 0.02m-41.07 163.88l41.08 0 0 5.21 -43.93 0 -0.01 -9.66m0.01 -26.36l0 4.33 43.93 0 0 5.21 -43.93 0m0 -0.85l0 4.46 43.93 0 0 5.21 -43.93 0m-0 -0.92l0 4.53 43.93 0 0 5.21 -44.35 -0.02m66.22 -109.08l2.15 0c3.17,0 5.76,2.6 5.76,5.76l0 12.2c0,3.17 -2.59,5.74 -5.76,5.76l-2.2 0.02m0.03 9.12l2.17 0.02c3.17,0.02 5.76,2.6 5.76,5.76l0 12.2c0,3.16 -2.59,5.71 -5.76,5.76l-2.42 0.04m1.1 -32.13l0 8.87m-75.58 -49.53l61.85 0c3.78,0 6.87,3.09 6.87,6.87l0 77.11c0,3.78 -3.09,6.87 -6.87,6.87l-61.85 0c-3.78,0 -6.87,-3.09 -6.87,-6.87l0 -77.11c0,-3.78 3.09,-6.87 6.87,-6.87z"
                  />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path1 fil1 str1 color-red-stroke transition-all"
                    :style="
                      getSelectedCategs.includes('watch_os')
                        ? `stroke: ${getColor(
                            'watch_os'
                          )}; filter:drop-shadow(0 0 2px ${getColor(
                            'watch_os'
                          )})`
                        : ''
                    "
                    d="M44.06 70.17c7.36,-1.41 10.61,-5.02 9.65,-12.09 -7.27,1.78 -10.43,5.72 -10.18,12.2m20.72 23.86c-8.52,-4.23 -8.78,-14.6 -1.43,-19.37 -2.83,-3.46 -6.34,-5.19 -10.72,-4.8 -1.48,0.24 -2.86,0.69 -4.16,1.32 -2.21,0.98 -4.15,1.29 -5.62,0.5 -4.11,-2.22 -7.99,-2.4 -11.58,-0.12 -5.16,3.43 -7.19,9.01 -6.3,16.61 0.9,5.19 2.72,9.88 5.77,13.92 1.26,1.77 2.76,3.27 4.67,4.34 1.69,1 3.82,0.7 6.23,-0.43 2.68,-1.18 5.35,-1.62 7.98,-0.12 3.15,1.21 5.04,1.85 7.68,-0.36 2.98,-2.08 5.49,-5.85 7.48,-11.49z"
                  />
                </g>
              </svg>
              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'Watch OS' &&
                    !getSelectedCategs.includes('watch_os')
                }"
                v-if="$mq === 'lg'"
                class="absolute bottom-0 right-0 text-right iconTitle"
              >
                Watch OS<br />
                Apple / Android
              </span>
              <!-- <span
                    class="h-9 w-48 bg-pageRed transition-all
                  rounded-sm text-white text-center text-lg p-1 bg-gradient-to-br from-pageRed via-pageRed to-pageBlue
                  focus:outline-none 2xl:h-8 2xl:w-32 xl:w-40 lg:h-7 lg:w-28 lg:text-sm"
                    name="watch_os"
                  >
                    Watch OS 
                  </span>-->
            </div>
          </div>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <!-- iOS-wrapper -->
          <div
            class="iOS-wrapper  w-full h-full flex flex-col items-center relative"
            :class="{ isActive: isInCategs('ios') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'iOS'"
              @mouseleave="hovered = null"
              @click="isCheck('ios')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd;"
                viewBox="0 0 250.28 305.74"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path0 fil0 str0 color-blue-stroke"
                    d="M123.73 76.91c45.15,-8.67 65.05,-30.77 59.19,-74.14 -44.59,10.9 -63.93,35.05 -62.4,74.79m127 146.26c-52.22,-25.92 -53.8,-89.52 -8.76,-118.72 -17.37,-21.24 -38.86,-31.81 -65.7,-29.46 -9.05,1.45 -17.52,4.21 -25.53,8.06 -13.57,6 -25.42,7.93 -34.42,3.1 -25.22,-13.61 -48.99,-14.72 -71.01,-0.72 -31.61,21.05 -44.09,55.25 -38.63,101.82 5.52,31.81 16.7,60.58 35.38,85.33 7.7,10.86 16.93,20.07 28.64,26.6 10.38,6.11 23.44,4.26 38.2,-2.66 16.45,-7.23 32.81,-9.93 48.94,-0.71 19.29,7.44 30.9,11.35 47.06,-2.23 18.27,-12.73 33.65,-35.84 45.83,-70.4z"
                  />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="fil1 str1 path1 color-red-stroke transition-all"
                    :style="
                      getSelectedCategs.includes('ios')
                        ? `stroke: ${getColor(
                            'ios'
                          )}; filter:drop-shadow(0 0 2px ${getColor('ios')})`
                        : ''
                    "
                    d="M84.78 261.2c-4.22,17.62 -21.03,14.45 -16.82,24.53 1.56,-0.54 3.17,-1.46 4.53,-2.07l33.31 -14.88c1.31,-0.58 3.16,-1.23 4.7,-2.04 -0.23,-7.86 -14.32,0.3 -24.34,-4.84m-13.52 -27.08c0.11,6.51 -3.41,7.3 9.8,5.64 3.08,-0.39 -5.56,8.82 -10.35,11.46 -1.82,0.99 12.21,-3.43 12.23,-1.87 -0.65,0.5 -2.66,10.02 1.56,8.12m-42.7 -39.89c5.81,8.77 23.35,5.53 29.39,14.26 -2.02,-13 10.93,-21.02 10.01,-31.86l-39.4 17.6z"
                  />
                </g>
              </svg>

              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'iOS' &&
                    !getSelectedCategs.includes('ios')
                }"
                v-if="$mq === 'lg'"
                class="absolute bottom-0 iconTitle"
              >
                iOS<br />Swift / C
              </span>
              <!-- <span
                    class="h-9 w-48 bg-pageRed transition-all rounded-sm text-white bg-gradient-to-br from-pageRed via-pageRed to-pageBlue
                   text-center text-lg p-1 focus:outline-none 2xl:h-8 2xl:w-32 xl:w-40 lg:h-7 lg:w-28 lg:text-sm"
                    name="ios"
                  >
                    iOS
                  </span> -->
            </div>
          </div>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <!-- desktop-wrapper -->
          <div
            class="desktop-wrapper w-full h-full flex flex-col items-center z-20 relative xl:mb-38 lg:mt-2 lg:mb-44"
            :class="{ isActive: isInCategs('desktop_app') }"
          >
            <div
              class="cursor-pointer flex-col flex w-full h-full"
              @mouseover="hovered = 'Desktop App'"
              @mouseleave="hovered = null"
              @click="isCheck('desktop_app')"
            >
              <span
                :class="{
                  hideTexts:
                    hovered &&
                    hovered !== 'Desktop App' &&
                    !getSelectedCategs.includes('desktop_app')
                }"
                v-if="$mq === 'lg'"
                class="absolute text-center top-0 iconTitle desk"
              >
                Desktop App<br />
                Linux / Windows
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="100%"
                height="100%"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 464.58 419.44"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="path0 fil0 str0 color-red-stroke transition-all"
                    :style="
                      getSelectedCategs.includes('desktop_app')
                        ? `stroke: ${getColor(
                            'desktop_app'
                          )}; filter:drop-shadow(0 0 2px ${getColor(
                            'desktop_app'
                          )})`
                        : ''
                    "
                    d="M427.34 236.89c5.32,0 9.62,4.3 9.62,9.62 0,5.32 -4.3,9.62 -9.62,9.62 -5.32,0 -9.62,-4.3 -9.62,-9.62 0,-5.32 4.3,-9.62 9.62,-9.62m-213.43 -170.89c2.88,17.28 31.76,24.28 35.02,41.66 5.77,-21.15 30.9,-24.55 36.88,-41.66l-71.89 0zm37.03 61.01l3.93 3.93 -3.93 3.93 -3.93 -3.93 3.93 -3.93zm3.29 11.81l3.93 3.93 -3.93 3.93 -3.93 -3.93 3.93 -3.93zm39.36 43.05c5.96,-14.46 -26.69,-11.85 -40.73,-29.35 -21.96,28.6 -51.47,7.6 -51.99,29.33 3.28,0.29 6.95,-0.08 9.91,-0.08l72.61 0c2.86,0 6.74,0.32 10.19,0.1zm-44.16 -67.34l3.93 3.93 -3.93 3.93 -3.93 -3.93 3.93 -3.93z"
                  />
                  <path
                    :class="{ anim: mayAnimate }"
                    class="fil1 str1 path1 color-blue-stroke"
                    d="M294.48 96.97c4.88,-5.21 12.55,-11.33 11.75,-23.63 -0.69,-10.53 -7.44,-17.76 -15.2,-20.92 -7.23,-2.94 -24.33,-1.54 -33.27,-1.41 -8.69,0.14 -44.98,-0.46 -51.8,2.23 -4.15,1.65 -8.19,4.63 -10.28,7.39 -5.66,7.47 -7.83,17.75 -2.01,27.63 4.62,7.83 32.68,30.92 35.45,35.79 -7.06,8.12 -25.98,26.72 -34.88,35.98 -2.64,2.75 -6.02,5.15 -7.4,10.18 -1.46,5.34 -0.58,10.27 1.86,14.22 6.06,9.86 16.94,8.18 27.32,8.04 23.68,-0.35 47.36,-0.71 71.04,-1.06 8.73,-0.13 19.81,0.82 24.91,-10.43 1.87,-4.13 1.92,-10.17 -0.12,-14.47 -2.82,-5.93 -12.26,-11.9 -16.23,-17.04m131.03 196.61l0 38.46m-306.22 -120.77c0,0 4.78,24.89 0,66.93 -4.78,42.04 -130.89,-17.6 -117.52,35.35 8.84,34.99 381.89,-44.33 331.53,52.49m63.85 -181.64c5.32,0 9.62,4.3 9.62,9.62 0,5.32 -4.3,9.62 -9.62,9.62 -5.32,0 -9.62,-4.3 -9.62,-9.62 0,-5.32 4.3,-9.62 9.62,-9.62m-30.79 0c5.32,0 9.62,4.3 9.62,9.62 0,5.32 -4.3,9.62 -9.62,9.62 -5.32,0 -9.62,-4.3 -9.62,-9.62 0,-5.32 4.3,-9.62 9.62,-9.62m-312.38 -24.17l-6.35 0 0 -192.57c0,-4.96 4.06,-9.02 9.02,-9.02l384.2 0c4.96,0 9.02,4.06 9.02,9.02l0 192.57 -395.9 0m-11.92 16.64l419.43 0m-411.36 -227.39l402.33 0c4.96,0 9.03,4.06 9.03,9.03l0 243.73c0,4.97 -4.06,9.03 -9.03,9.03l-177.28 0 0 69.39 71.47 0c4.96,0 9.03,4.06 9.03,9.03l0 5.3 -208.28 0 0 -5.3c0,-4.96 4.06,-9.03 9.03,-9.03l70.99 0 0 -69.39 -177.28 0c-4.97,0 -9.03,-4.06 -9.03,-9.03l0 -243.73c0,-4.97 4.06,-9.03 9.03,-9.03zm375.38 344.1c18.39,0 33.44,15.05 33.44,33.44l0 5.73 -66.88 0 0 -5.73c0,-18.39 15.05,-33.44 33.44,-33.44z"
                  />
                </g>
              </svg>

              <!-- <span
                    class="h-9 w-44 bg-pageRed transition-all rounded-sm text-white bg-gradient-to-br from-pageRed via-pageRed to-pageBlue
                   text-center text-lg p-1 focus:outline-none 2xl:h-8 2xl:w-32 xl:w-40 lg:h-7 lg:w-28 lg:text-sm"
                    name="desktop_app"
                  >
                    Desktop App
                  </span> -->
            </div>
          </div>
        </div>
        <div class="grid-item"></div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Clock from '@/components/_partials/Clock'

export default {
  name: 'AppSelection',
  components: { Clock },
  props: ['teamTalks'],
  data: () => ({
    list: {
      android: false,
      ios: false,
      web_app: false,
      watch_os: false,
      android_ios: false,
      desktop_app: false
    },
    colors: {
      web_app: '#5FF000',
      android_ios: '#FCC006',
      watch_os: '#42B4FD',
      desktop_app: '#EC008B',
      ios: '#FC5721',
      android: '#6539B5'
    },
    mayAnimate: false,
    hovered: null
  }),
  mounted() {
    this.mayAnimate = true
  },
  watch: {
    getSelectedCategs: {
      deep: true,
      handler(val) {
        if (val.length === 0) {
          this.changeConductorButtonText('')
        } else if (this.getSelectedProject && !this.getConductorButtonText) {
          this.changeConductorButtonText('Request to Estimate')
        }
      }
    }
  },
  computed: {
    ...mapGetters('dialog', [
      'getSelectedCategs',
      'getSelectedProject',
      'getConductorButtonText'
    ])
  },
  created() {
    // this.getPlatforms()
  },
  beforeMount() {
    this.setSecondPageActive(false)
  },
  methods: {
    ...mapActions('dialog', [
      'changeConductorButtonText',
      'setSecondPageActive',
      'getPlatforms'
    ]),
    isCheck(name) {
      this.list[name] = !this.list[name]
      this.$store.commit('dialog/ADD_DIALOG', name)
    },
    isInCategs(category) {
      return this.getSelectedCategs.indexOf(category) > -1
    },
    getColor(i) {
      return this.colors[i]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1130px) {
  .grid-item {
    max-height: 90px;
    height: 90px;
    min-width: 90px;
  }
  .rightWrapper g {
    min-height: 650px;
  }
  .clockCircleMD {
    max-width: 316px !important;
    max-height: 316px !important;
    min-width: 210px !important;
    min-height: 210px !important;
  }
}

.grid-container {
  display: grid;
  grid-column-gap: 4vw;
  grid-template-columns: auto auto auto;
  /* padding: 10px; */
  /* transform-origin: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* padding: 20px; */
  /* font-size: 30px; */
  /* text-align: center; */
  width: 8vw;
  height: 13vh;
}
.iOS-android-wrapper {
  padding-right: 20%;
}

.clockCircleMD {
  width: 40vw;
  height: 40vw;
  top: 50%;
  transform: translateY(-50%);
  max-width: none;
}

.clockCircle {
  width: 20vw;
  height: 20vw;
  top: 50%;
  transform: translateY(-50%);
  max-width: none;
}

.path0 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
.path1 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
.hideTexts {
  width: 0 !important;
}

.iconTitle {
  font-size: 1vw;
  width: 8vw;

  transition: all 0.5s;
  transform-origin: left;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: visible;
  transform: translateY(100%);
}
.iconTitle.desk {
  transform: translateY(-100%);
}

.color-red-stroke {
  stroke: #642d2b;
}
.color-blue-stroke {
  stroke: #156189;
}

.web-app-wrapper .str0 {
  /* stroke: #642d2b; */
  stroke-width: 4.31;
  stroke-miterlimit: 2.61313;
}
.web-app-wrapper .fil1 {
  fill: none;
}
.web-app-wrapper .fil0 {
  fill: #156189;
  fill-rule: nonzero;
}

.android-wrapper .str0 {
  /* stroke: #156189; */
  stroke-width: 14.29;
  stroke-miterlimit: 10;
}
.android-wrapper .str1 {
  /* stroke: #822e2f; */
  stroke-width: 14.29;
  stroke-miterlimit: 10;
}
.android-wrapper .fil0 {
  fill: none;
  fill-rule: nonzero;
}

.watch-OS-wrapper .str0 {
  /* stroke: #156189; */
  stroke-width: 2;
  stroke-miterlimit: 2.61313;
}
.watch-OS-wrapper .str1 {
  /* stroke: #943132; */
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.watch-OS-wrapper .fil0 {
  fill: none;
}
.watch-OS-wrapper .fil1 {
  fill: none;
  fill-rule: nonzero;
}

.iOS-wrapper .str0 {
  /* stroke: #156189; */
  stroke-width: 4.47;
  stroke-miterlimit: 10;
}
.iOS-wrapper .str1 {
  /* stroke: #822e2f; */
  stroke-width: 4.47;
  stroke-miterlimit: 2.61313;
}
.iOS-wrapper .fil1 {
  fill: none;
}
.iOS-wrapper .fil0 {
  fill: none;
  fill-rule: nonzero;
}

.desktop-wrapper .str0 {
  /* stroke: #822e2f; */
  stroke-width: 3.94;
  stroke-miterlimit: 2.61313;
}
.desktop-wrapper .str1 {
  /* stroke: #156189; */
  stroke-width: 4;
  stroke-miterlimit: 2.61313;
}
.desktop-wrapper .fil0 {
  fill: none;
}
.desktop-wrapper .fil1 {
  fill: none;
  fill-rule: nonzero;
}
.desktop-wrapper .str0 {
  /* stroke: #822e2f; */
  stroke-width: 3.94;
  stroke-miterlimit: 2.61313;
}
.desktop-wrapper .fil0 {
  fill: none;
}
.desktop-wrapper .fil1 {
  fill: none;
  fill-rule: nonzero;
}

.iOS-android-wrapper .str0 {
  /* stroke: #156189; */
  stroke-width: 2.61;
  stroke-miterlimit: 10;
}
.iOS-android-wrapper .str1 {
  /* stroke: #923132; */
  stroke-width: 2.61;
  stroke-miterlimit: 10;
}
.iOS-android-wrapper .fil0 {
  fill: none;
  fill-rule: nonzero;
}
</style>
