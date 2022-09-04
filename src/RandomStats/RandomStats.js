import React from 'react'

const Elements = ['Fire', 'Water', 'Earth', 'Air']


export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум не включается, минимум включается
}

export function getRandomElement () {
  return Elements[getRandomNumber(0, 3)]
}

