(async () => {
  'use strict'
  const sleep = ms => 
    new Promise(resolve => setTimeout(resolve, ms))
  const w = open()
  do await sleep(999)
  while (!w)
  for (let i = 0; i < email.length; i++) {
    w.location = '/logout'
    do await sleep(999)
    while (!w['sign-in-btn'])
    w.email.value = email[i]
    w['sign-in-btn'].click()
    do await sleep(999)
    while (!w['sign-in-btn'])
    w.password.value = email[i]
    w['sign-in-btn'].click()
    do await sleep(999)
    while (w.location.pathname != '/wolframid')
    w.location = '/products/wolfram-one'
    do await sleep(999)
    while (!w['chat-widget-container'])
    const assertion = w.document
      .querySelector('account-subscription-product')
      .innerText.includes('Plan: Trial')
    console.assert(assertion, email[i])
    if (assertion)
      good.push(email[i])
    else
      bad.push(email[i])
  }
  good.forEach(e => document.write(e + '<br>'))
  bad.forEach(e => w.document.write(e + '<br>'))
})()
const good = []
const bad = []
const email = `

2021-05-02@01.04.48.059Z
hndo394pn9f@gmail.com
2021-05-02@01.05.08.748Z
pr7s4pybsb891tntav@gmail.com
2021-05-02@01.05.28.101Z

`.split('\n').filter(Boolean)
