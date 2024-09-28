<template>
  <VueSidePanel
    v-model="isOpened"
    lock-scroll
    class="w-[400px] flex justify-center flex-col items-center"
  >
    <div
      class="mx-[100px] mt-[100px] font-golos uppercase text-2xl font-normal leading-[23.4px] text-left hover:text-[#B67C32] cursor-pointer"
    >
      <a href="#title" @click="isOpened = !isOpened"> Главная </a>
    </div>
    <div
      class="mx-[100px] mt-[50px] font-golos uppercase text-2xl font-normal leading-[23.4px] text-left hover:text-[#B67C32] cursor-pointer"
    >
      <a href="#info" @click="isOpened = !isOpened"> Сводка о событии </a>
    </div>
    <div
      class="mx-[100px] mt-[50px] font-golos uppercase text-2xl font-normal leading-[23.4px] text-left hover:text-[#B67C32] cursor-pointer"
    >
      <a href="#stages" @click="isOpened = !isOpened"> Этапы </a>
    </div>
    <div
      class="mx-[100px] mt-[50px] font-golos uppercase text-2xl font-normal leading-[23.4px] text-left hover:text-[#B67C32] cursor-pointer"
    >
      <a href="#participants" @click="isOpened = !isOpened"> Участники </a>
    </div>

    <ParticipantsView />
  </VueSidePanel>

  <button
    @click="isOpened = !isOpened"
    class="fixed top-4 right-4 z-50 p-2 bg-[#313131] text-white rounded-full shadow hover:bg-[#B67C32] transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>

  <div
    id="title"
    class="w-full xl:bg-[url('background_title.png')] bg-[url('background_title_mobile.png')] pt-[100px] h-screen relative bg-cover bg-center flex flex-col items-center"
  >
    <img
      src="@/assets/logo.svg"
      alt="Logo"
      class="absolute w-[213px] h-[32px] top-[18px] left-[20px] xl:w-[245px] xl:h-[36px] xl:top-[26px] xl:left-[72px] cursor-pointer"
    />

    <div
      class="xl:w-[542px] xl:h-[444px] xl:absolute xl:top-[124px] xl:left-[72px] w-[335px] h-[393px] pt-[90px]"
    >
      <div
        class="uppercase text-[36px] xl:text-[60px] xl:leading-[66px] leading-[40px] font-[400]"
      >
        <div class="text-left">
          Превратите <br />
          уездный город
        </div>
        <div class="text-middle">в столицу</div>
        <div class="text-right">земного шара</div>
      </div>

      <div
        class="mt-[24px] font-golos text-[18px] font-normal leading-[23.4px] xl:text-center text-left"
      >
        Оплатите взнос на телеграммы для организации Международного васюкинского
        турнира по шахматам
      </div>

      <div class="xl:mt-[40px] flex justify-between mt-[32px] flex-wrap">
        <div
          class="xl:w-[263px] cursor-pointer xl:h-[72px] w-[335px] h-[47px] rounded-[66px] bg-[#1F1F1F] flex items-center justify-center"
        >
          <div
            class="font-golos text-16 font-medium leading-5 text-center text-[#FFFFFF]"
          >
            Поддержать <br class="xl:block hidden" />
            шаматную мысль
          </div>
        </div>

        <div
          class="xl:w-[263px] cursor-pointer xl:h-[72px] xl:border-[2px] xl:border-[#1F1F1F] xl:bg-transparent xl:mt-0 rounded-[66px] flex items-center justify-center mt-[14px] w-[335px] h-[47px] rounded-tl-[66px] opacity-90 bg-white"
        >
          <div
            class="font-golos text-16 font-medium leading-5 text-center text-[#1F1F1F]"
          >
            Подробнее <br class="xl:block hidden" />
            о турнире
          </div>
        </div>
      </div>
    </div>

    <Marquee :messages="marqueeMessages" />
  </div>

  <div
    id="info"
    class="w-full bg-white xl:h-screen h-auto relative bg-cover bg-center flex items-center justify-center flex-col xl:justify-center"
  >

    <div
      class="xl:pt-[50px] xl:px-[72px] xl:flex flex-row justify-between items-center hidden xl:w-full"
    >
      <div
        class="uppercase text-[60px] xl:text-[36px] w-[764px] h-[196px] text-[#313131] text-4xl font-normal leading-[48.6px] text-left items-center"
      >
        <div class="text-left">
          Чтобы поддержать Международный васюкинский турнир посетите лекцию
          на тему:
        </div>
        <div class="text-left text-[#F54932] font-[700]">
          «Плодотворная дебютная идея»
        </div>
      </div>
      <img
        src="@/assets/play_process.png"
        alt="Play_Process"
        class="w-[394px] h-[250px]"
      />
    </div>

    <div
      class="text-[28px] md:mt-[220px] mt-[48px] mx-[20px] font-normal uppercase leading-[37.8px] text-left w-[335px] h-[152px] xl:hidden"
    >
      Чтобы поддержать <br />
      Международный <br />
      васюкинский <br />
      турнир
    </div>

    <img
      src="@/assets/play_process.png"
      alt="Play_Process"
      class="w-[335px] h-[213px] mt-[24px] xl:hidden"
    />

    <div
      class="text-[28px] md:mt-[220px] mt-[25px] mx-[20px] font-normal uppercase leading-[37.8px] text-left w-[335px] h-[152px] xl:hidden"
    >
      Посетите лекцию <br />
      на тему: <br />
      <div class="text-left text-[#F54932] font-[700]">
        «Плодотворная дебютная идея»
      </div>
    </div>

    <img
      src="@/assets/chess_popart.png"
      alt="Play_Process"
      class="w-[335px] h-[402px] mt-[34px] xl:hidden"
    />

    <div
      class="text-[28px] mt-[24px] mx-[20px] font-normal uppercase leading-[37.8px] text-left w-[335px] h-[152px] xl:hidden"
    >
      И сеанс <br />
      <div class="text-left font-[700] text-[#F54932]">
        Одновременной <br />
        игры в шахматы <br />
        на 160 досках
      </div>
      гроссмейстера <br />
      о. бендера <br />
    </div>

    <img
      src="@/assets/table_prices_mobile.svg"
      alt="Table_Prices"
      class="pt-[134px] xl:hidden"
    />

    <div
      class="px-[72px] w-full mt-[64px] h-[527px] flex-row justify-between items-center hidden xl:flex"
    >
      <img
        src="@/assets/chess_popart.png"
        alt="Play_Process"
        class="w-[474px] h-[527px]"
      />

      <div
        class="ml-[72px] uppercase text-[36px] text-[#313131] text-4xl font-normal leading-[48.6px] text-left items-center"
      >
        <div class="text-left whitespace-nowrap h-[147px]">
          B cеанс
          <span class="text-[#F54932] font-[700]"
            >одновременной игры <br />
            в шахматы на 160 досках <br />
          </span>
          гроссмейстера О. Бендера
        </div>
        <img
          src="@/assets/table_prices.svg"
          alt="Table_Prices"
          class="mt-[60px]"
        />
      </div>
    </div>

    <div
      class="w-[335px] uppercase h-[120px] mt-[120px] text-[36px] font-normal xl:hidden leading-[39.6px] text-left"
    >
      Этапы преображения Васюков
    </div>

    <div
      class="w-[335px] h-[44px] mt-[12px] font-golos text-[18px] font-normal leading-[21.6px] xl:hidden text-left text-[#3057A2]"
    >
      Будущие источники обогащения васюкинцев
    </div>
  </div>

  <div id="stages" class="bg-white">
    <div
      class="w-full bg-white h-screen relative bg-cover bg-center xl:block hidden"
    >
      <div class="pt-[200px] mx-[72px] flex justify-between flex-col">
        <p
          class="uppercase text-[54px] font-normal leading-[64.8px] text-left w-[806px] h-[65px]"
        >
          Этапы преображения
        </p>
        <div class="flex flex-row items-center h-[65px]">
          <p
            class="uppercase text-[54px] font-normal leading-[64.8px] text-left w-[300px]"
          >
            Васюков
          </p>
          <div class="text-left text-[#3057A2]">
            Будущие источники <br />
            обогащения васюкинцев
          </div>
        </div>
      </div>
      <img
        src="@/assets/stages.svg"
        alt="Table_Prices"
        class="ml-[72px] w-[96vw] mt-[54px]"
      />
    </div>
    <ImageSlider class="xl:hidden bg-white pt-[15px]"> </ImageSlider>
  </div>

  <div
    id="participants"
    class="w-full bg-white h-auto xl:h-screen relative bg-cover bg-center"
  >
    <div
      class="pt-[160px] mx-[72px] flex justify-between items-center flex-row"
    >
      <p
        class="uppercase xl:text-[54px] font-normal xl:leading-[64.8px] text-left xl:w-[806px] xl:h-[65px] w-[335px] h-[80px] text-[36px] leading-[39.6px]"
      >
        Участники турнира
      </p>
      <div
        class="flex-row items-center justify-between w-[151px] h-[44px] xl:flex hidden"
      >
        <img
          src="@/assets/slider_left.svg"
          alt="Table_Prices"
          class="cursor-pointer w-[44px] hover:color-[#FBCE51]"
          @click="prevParticipant"
        />
        <div
          class="font-golos text-[16px] font-normal leading-[19.2px] text-left"
        >
          {{ currentIndex + 1 }} / {{ participants.length }}
        </div>
        <img
          src="@/assets/slider_right.svg"
          alt="Table_Prices"
          class="cursor-pointer w-[44px]"
          @click="nextParticipant"
        />
      </div>
    </div>

    <div
      class="mx-[72px] overflow-hidden flex justify-center items-center flex-col"
    >
      <div
        class="flex justify-center items-center flex-row relative pt-[10px] md:pt-[70px]"
      >
        <ParticipantCard
          v-for="(participant, index) in visibleParticipants"
          :key="index"
          :name="participant.name"
          :description="participant.description"
          :link="participant.link"
          class="card transition-transform duration-500 ease-in-out"
          :class="{
            'transform scale-100 opacity-100': isActive(index),
            'transform scale-95 -translate-x-10 opacity-50': isPrevious(index),
            'transform scale-95 translate-x-10 opacity-50': isNext(index),
          }"
        />
      </div>
      <div
        class="mt-[20px] flex flex-row items-center justify-between w-[151px] h-[44px] xl:hidden pb-[100px]"
      >
        <img
          src="@/assets/slider_left.svg"
          alt="Table_Prices"
          class="cursor-pointer w-[36px] hover:text-[#FBCE51]"
          @click="prevParticipant"
        />
        <div
          class="font-golos text-[16px] font-normal leading-[19.2px] text-left"
        >
          {{ currentIndex + 1 }} / {{ participants.length }}
        </div>
        <img
          src="@/assets/slider_right.svg"
          alt="Table_Prices"
          class="cursor-pointer w-[36px]"
          @click="nextParticipant"
        />
      </div>
    </div>

    <Marquee class="mt-100px" :messages="marqueeMessages" />
  </div>

  <div
    class="w-full h-[214px] xl:h-[150px] relative bg-cover bg-center bg-[#E9DED4] flex items-center justify-center"
  >
    <div
      class="w-full px-[72px] xl:h-[38px] opacity-[0.6] font-golos text-[16px] font-normal leading-[19.2px] text-left"
    >
      Все персонажи, события и цитаты являются вымышленными и не принадлежат
      создателям сайта. С подробностями можно познакомиться в главе XXXIV романа
      Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
    </div>
  </div>
</template>

<script>
import ParticipantCard from '@/components/ParticipantCard.vue'
import Marquee from '@/components/Marquee.vue'
import ImageSlider from '@/components/ImageSlider.vue'
import { VueSidePanel } from 'vue3-side-panel'
import ParticipantsView from '@/components/ParticipantsView.vue'

export default {
  components: {
    VueSidePanel,
    Marquee,
    ParticipantCard,
    ImageSlider,
    ParticipantsView,
  },
  data() {
    return {
      focusedParticipant: 1,
      currentIndex: 0, // Initialize the current index
      participants: [
        // Example participant data
        {
          name: 'Хозе-Рауль Капабланка',
          description: 'Чемпион мира по шахматам',
          link: 'link1',
        },
        {
          name: 'Эммануил Ласкер',
          description: 'Чемпион мира по шахматам',
          link: 'link2',
        },
        {
          name: 'Александр Алехин',
          description: 'Чемпион мира по шахматам',
          link: 'link3',
        },
        {
          name: 'Арон Нимцович',
          description: 'Чемпион мира по шахматам',
          link: 'link4',
        },
        {
          name: 'Рихард Рети',
          description: 'Чемпион мира по шахматам',
          link: 'link5',
        },
        {
          name: 'Остап Бендер',
          description: 'Чемпион мира по шахматам',
          link: 'link6',
        },
      ],
      marqueeMessages: [
        'Дело помощи утопающим — дело рук самих утопающих!',
        'Шахматы двигают вперёд не только культуру, но и экономику!',
        'Лёд тронулся, господа присяжные заседатели!',
      ],
      isOpened: false,
    }
  },
  computed: {
    visibleParticipants() {
      return [
        this.participants[this.getPrevIndex()],
        this.participants[this.currentIndex],
        this.participants[this.getNextIndex()],
      ]
    },
  },
  methods: {
    nextParticipant() {
      this.currentIndex = (this.currentIndex + 1) % this.participants.length
    },
    prevParticipant() {
      this.currentIndex =
        (this.currentIndex - 1 + this.participants.length) %
        this.participants.length
    },
    getPrevIndex() {
      return (
        (this.currentIndex - 1 + this.participants.length) %
        this.participants.length
      )
    },
    getNextIndex() {
      return (this.currentIndex + 1) % this.participants.length
    },
    isActive(index) {
      return index === 1
      // Центр
    },
    isPrevious(index) {
      return index === 0
      // Слева
    },
    isNext(index) {
      return index === 2
      // Справа
    },
  },
}
</script>

<style>
#app {
  font-family: 'Merriweather', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131;
}
</style>
