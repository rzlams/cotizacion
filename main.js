const translationPlaceholderIdentifier = '__'
const activeClass = 'active'
const config = {
  activePlan: 'basic', // 'mvp' | 'basic' | 'pro'
  language: 'en', // 'en' | 'es'
}

;(async function () {
  setActiveCard()
  await translate()
})()

function setActiveCard() {
  const cardItems = document.querySelectorAll('.card')

  Array.from(cardItems).forEach(function (card) {
    const isActivePlan = card.classList.contains(config.activePlan)

    if (isActivePlan) card.classList.add(activeClass)
  })
}

async function translate() {
  const body = document.querySelector('body')

  await readDOMRecursively(body.children)
}

async function readDOMRecursively(elements) {
  return new Promise(function (resolve) {
    Array.from(elements).forEach(function (el) {
      if (!el.hasChildNodes()) resolve()

      replaceTranslationPlaceholder(el)
      readDOMRecursively(el.children)
    })
  })
}

function replaceTranslationPlaceholder(element) {
  const placeholder = Array.from(element.classList).find(function (elClass) {
    return elClass.indexOf(translationPlaceholderIdentifier) === 0
  })

  if (placeholder) {
    element.textContent = translations[placeholder][config.language]
  }
}
