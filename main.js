'use strict'

const activeClass = 'active'
const config = {
  activePlan: 'pro', // 'mvp' | 'basic' | 'pro'
}

const cardItems = document.querySelectorAll('.card')

Array.from(cardItems).forEach(function (card) {
  const isActivePlan = card.classList.contains(config.activePlan)

  if (isActivePlan) card.classList.add(activeClass)
})
