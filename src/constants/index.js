import {
  heart,
  search,
  sedona,
  welcome,
  gourgies,
  calendar,
  breadCrumbHous,
  filterBack,
  food,
  home,
  i,
  list,
  slideShow,
  souvenir,
  table,
  trash,
  x,
  townSedona,
  subscribeBack,
  canionView,
  backgroundSedona,
  logo,
  decor,
  hotel_1,
  hotel_2,
  hotel_3,
  hotel_4,
  star,
  vk,
  checkbox,
  breadCrumbRightArrow,
} from '../assets'

export {
  breadCrumbRightArrow,
  checkbox,
  vk,
  star,
  heart,
  search,
  sedona,
  welcome,
  gourgies,
  calendar,
  breadCrumbHous,
  filterBack,
  food,
  home,
  i,
  list,
  slideShow,
  souvenir,
  table,
  trash,
  x,
  townSedona,
  subscribeBack,
  canionView,
  backgroundSedona,
  logo,
  decor,
  hotel_1,
  hotel_2,
  hotel_3,
  hotel_4,
}

export const nav = [
  { id: 'main', title: 'Главная', ref: '/' },
  { id: 'about', title: 'О Седоне', ref: '/' },
  { id: 'hotels', title: 'Гостиницы', ref: 'hotels-search' },
]
export const advantages = [
  {
    id: 'real town',
    title: 'Настоящий городок',
    text: 'Седона — не аттракцион для туристов, там течёт своя жизнь',
    img: townSedona,
  },
  {
    id: 'square',
    title: 'Небольшая площадь',
    text: 'Все достопримечательности находятся очень близко',
  },
  {
    id: 'beautiful road',
    title: 'Красивая дорога',
    text: 'Ехать в Седону из Лас-Вегаса совсем не скучно!',
  },
  {
    id: 'few tourists',
    title: 'Мало туристов',
    text: 'Большинство едет в Гранд Каньон и толпится там',
  },
  {
    id: 'devil bridge',
    title: 'Там есть мост дьявола',
    text: 'Да, по нему можно пройти! Если вы осмелитесь, разумеется',
    img: canionView,
  },
]

export const services = [
  {
    id: 'housing',
    icon: home,
    title: 'Жильё',
    text: 'Рекомендуем пожить в настоящем мотеле, всё как в кино!',
  },
  {
    id: 'food',
    icon: food,
    title: 'Еда',
    text: 'Всегда заказывайте топовый фирменный бургер, вы не разочаруетесь!',
  },
  {
    id: 'souvenirs',
    icon: souvenir,
    title: 'Сувениры',
    text: 'Не только китайского, но и настоящего местного производства!',
  },
]

export const socmedia = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1164 1.80445C24.2824 1.25845 24.1164 0.856445 23.3214 0.856445H20.6964C20.0284 0.856445 19.7204 1.20345 19.5534 1.58645C19.5534 1.58645 18.2184 4.78245 16.3274 6.85845C15.7154 7.46045 15.4374 7.65145 15.1034 7.65145C14.9364 7.65145 14.6854 7.46045 14.6854 6.91345V1.80445C14.6854 1.14845 14.5014 0.856445 13.9454 0.856445H9.81738C9.40038 0.856445 9.14938 1.16045 9.14938 1.44945C9.14938 2.07045 10.0954 2.21445 10.1924 3.96245V7.76045C10.1924 8.59345 10.0394 8.74444 9.70538 8.74444C8.81538 8.74444 6.65038 5.53345 5.36538 1.85945C5.11638 1.14445 4.86438 0.856445 4.19338 0.856445H1.56638C0.816382 0.856445 0.666382 1.20345 0.666382 1.58645C0.666382 2.26845 1.55638 5.65645 4.81138 10.1374C6.98138 13.1974 10.0364 14.8564 12.8194 14.8564C14.4884 14.8564 14.6944 14.4884 14.6944 13.8534V11.5404C14.6944 10.8034 14.8524 10.6564 15.3814 10.6564C15.7714 10.6564 16.4384 10.8484 17.9964 12.3234C19.7764 14.0724 20.0694 14.8564 21.0714 14.8564H23.6964C24.4464 14.8564 24.8224 14.4884 24.6064 13.7604C24.3684 13.0364 23.5184 11.9854 22.3914 10.7384C21.7794 10.0284 20.8614 9.26345 20.5824 8.88045C20.1934 8.38945 20.3044 8.17044 20.5824 7.73345C20.5824 7.73345 23.7824 3.30745 24.1154 1.80445H24.1164Z" fill="#83B3D3"/>
</svg>`,
    title: 'twiter',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M16.785 0.955705L0.840489 7.1042C-0.247661 7.54126 -0.241365 8.14828 0.640845 8.41897L4.73445 9.69597L14.2058 3.72014C14.6537 3.44766 15.0629 3.59424 14.7265 3.89281L7.05283 10.8183H7.05103L7.05283 10.8192L6.77045 15.0387C7.18413 15.0387 7.36669 14.8489 7.59871 14.625L9.58705 12.6915L13.7229 15.7464C14.4855 16.1664 15.0332 15.9506 15.2229 15.0405L17.9379 2.2453C18.2158 1.13107 17.5126 0.626562 16.785 0.955705Z" fill="#83B3D3"/>
</svg>`,
    title: 'telegram',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
  <path d="M18.9402 0.356445H3.50738C1.64668 0.356445 0.333252 1.9502 0.333252 3.75645V13.8502C0.333252 15.7627 1.64668 17.3564 3.50738 17.3564H19.1591C20.8009 17.3564 22.3333 15.7627 22.3333 13.9564V3.75645C22.1143 1.9502 20.8009 0.356445 18.9402 0.356445ZM7.99494 12.8939V4.81894L15.3283 8.85645L7.99494 12.8939Z" fill="#83B3D3"/>
</svg>`,
    title: 'youtube',
  },
]

export const sections = [
  {
    title: 'Седона — небольшой городок в Аризоне, заслуживающий большего!',
    text: 'Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!',
  },
  {
    title: 'Приезжайте в Седону отдохнуть в комфорте и уюте!',
    text: 'Опытный персонал и качественное обслуживание!',
  },
  {
    title: 'Заинтересовались?',
    text: 'Укажите предполагаемые даты поездки, \n и мы покажем вам лучшие предложения гостиниц в Седоне',
  },
  {
    title: 'Подпишитесь на рассылку',
    text: 'Только полезная информация и никакого спама, честное бойскаутское!',
    background: subscribeBack,
  },
]

export const telephone = '+7 (812) 812-12-12'

export const cardData = {
  hotels: [
    {
      id: 'Amara',
      name: 'Amara Resort & Spa',
      type: 'Гостиница',
      price: '400',
      stars: '4',
      reiting: '8,5',
      img: hotel_1,
    },
    {
      id: 'Villas',
      name: 'Villas at Poco Diablo',
      type: 'Гостиница',
      price: '5000',
      stars: '4',
      reiting: '9,2',
      img: hotel_2,
    },
    {
      id: 'Desert',
      name: 'Desert Quail Inn',
      type: 'Гостиница',
      price: '2500',
      stars: '3',
      reiting: '6,9',
      img: hotel_3,
    },
    {
      id: 'GreenTree',
      name: 'GreenTree Inn',
      type: 'Мотель',
      price: '1500',
      stars: '2',
      reiting: '5,6',
      img: hotel_4,
    },
  ],
}
