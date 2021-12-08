const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#interest")
const frequencyBox = document.querySelector("#frequency")
const yearsBox = document.querySelector("#years")
const interestSpan = document.querySelector("#result")

const interestHover = document.querySelector("#interestHover")
const howtoInterest = document.querySelector("#howtoInterest")
const compoundHover = document.querySelector("#compoundHover")
const howtoCompound = document.querySelector("#howtoCompound")

function computeInterest () {
  const principal = principalBox.value
  const interestRate = interestBox.value / 100
  const frequency = frequencyBox.value
  const years = yearsBox.value

  const interestResult = principal * (1 + interestRate / frequency) ** (frequency * years)

  interestSpan.textContent = interestResult.toFixed(2)
}

function showInterestHelp() {
  howtoInterest.style.display = "block";
}

function hideInterestHelp() {
  howtoInterest.style.display = "none";
}

function showCompoundHelp() {
  howtoCompound.style.display = "block";
}

function hideCompoundHelp() {
  howtoCompound.style.display = "none";
}

interestHover.addEventListener('mouseover', showInterestHelp)
interestHover.addEventListener('mouseout', hideInterestHelp)
compoundHover.addEventListener('mouseover', showCompoundHelp)
compoundHover.addEventListener('mouseout', hideCompoundHelp)

principalBox.addEventListener('input', computeInterest)
interestBox.addEventListener('input', computeInterest)
frequencyBox.addEventListener('input', computeInterest)
yearsBox.addEventListener('input', computeInterest)