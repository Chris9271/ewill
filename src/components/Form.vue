<script>
import { ref, watch } from 'vue'

const inputError = ref('inputError')
const requireError = ref('requireError')

const success = ref('success')
const failure = ref('failure')

const store = ref('')
const storeState = ref(false)

function getOptionValue(e) {
  store.value = e.target.value
}
async function checkStore() {
  // store1 - 須完全符合
  const storeList = ['store1', 'store2', 'store3']
  let inputStore = store.value.toLowerCase().trim()
  let result = storeList.find((item) => item.includes(inputStore))
  if (result === undefined) {
    storeState.value = true
    storeRequire.value = false
  } else {
    storeState.value = false
    storeRequire.value = false
  }
}
watch(store, checkStore)

const name = ref('')
const nameState = ref(false)
async function checkName() {
  let nameRegex = /[0-9]/
  let inputName = name.value
  if (!nameRegex.test(inputName)) {
    nameState.value = false
    nameRequire.value = false
    name.value = inputName
  } else {
    /***--- 設置wrong format ---***/
    nameState.value = true
    nameRequire.value = false
    name.value = inputName
  }
}
// 監視name的變化，如有變動則執行後方function
watch(name, checkName)

const phone = ref('')
const phoneState = ref(false)
async function checkPhone() {
  let phoneRegex = /^09\d{2}\d{6}$/
  let inputNumber = phone.value
  if (
    phoneRegex.test(inputNumber) ||
    inputNumber.slice(0, 2) == '09' ||
    inputNumber.slice(0, 1) == '0' ||
    phone.value === ''
  ) {
    phoneState.value = false
    phoneRequire.value = false
    phone.value = inputNumber.slice(0, 10)
  } else {
    phoneState.value = true
    phoneRequire.value = false
    phone.value = inputNumber.slice(0, 10)
  }
}
watch(phone, checkPhone)

const amount = ref('')
const amountState = ref(false)
async function checkAmount() {
  let amountRegex = /[^0-9]/
  let inputAmount = amount.value
  if (amountRegex.test(inputAmount)) {
    amountState.value = true
    amountRequire.value = false
    amount.value = inputAmount
  } else {
    amountState.value = false
    amountRequire.value = false
    if (inputAmount.length > 1 && inputAmount.charAt(0) == 0) {
      amount.value = inputAmount.slice(1)
    } else {
      amount.value = inputAmount
    }
  }
}
watch(amount, checkAmount)

const payment = ref('')
async function checkPayment() {
  if (payment.value !== '') {
    paymentRequire.value = false
  }
}
watch(payment, checkPayment)

const allSuccess = ref(false)
const oneFailure = ref(false)

const storeRequire = ref(false)
const nameRequire = ref(false)
const phoneRequire = ref(false)
const amountRequire = ref(false)
const paymentRequire = ref(false)

function handleSubmit() {
  // 提交時要檢查輸入是否為空白，空白要顯示required跟紅框
  const submitStore = this.store
  const submitName = this.name
  const submitPhone = this.phone
  const submitAmount = this.amount
  const submitPayment = this.payment

  // 設定輸入為空時，要顯示required跟紅框(如何檢查複數輸入為空？)
  if (!submitStore) {
    storeRequire.value = true
  }

  if (!submitName) {
    nameRequire.value = true
  }

  if (!submitPhone || submitPhone.length < 10) {
    phoneRequire.value = true
  }

  if (!submitAmount) {
    amountRequire.value = true
  }

  if (!submitPayment) {
    paymentRequire.value = true
  }

  // 設定成功或失敗按鈕的顯示
  if (
    submitStore !== '' &&
    storeState.value === false &&
    submitName !== '' &&
    nameState.value === false &&
    submitPhone !== '' &&
    submitPhone.length === 10 &&
    submitAmount !== '' &&
    amountState.value === false &&
    submitPayment !== ''
  ) {
    allSuccess.value = true
    oneFailure.value = false
  } else if (
    submitStore === '' ||
    storeState.value === true ||
    submitName === '' ||
    nameState.value === true ||
    submitPhone === '' ||
    submitPhone.length < 10 ||
    submitAmount === '' ||
    amountState.value === true ||
    submitPayment === ''
  ) {
    oneFailure.value = true
    allSuccess.value = false
  }
}

export default {
  name: 'LayoutForm',
  data() {
    return {
      getOptionValue,
      handleSubmit,
      inputError,
      requireError,
      success,
      failure,
      storeRequire,
      nameRequire,
      phoneRequire,
      amountRequire,
      paymentRequire,
      storeState,
      nameState,
      phoneState,
      amountState,
      store,
      name,
      phone,
      amount,
      payment,
      allSuccess,
      oneFailure,
    }
  },
}
</script>

<template>
  <div class="contents__form" id="form">
    <form class="form">
      <div class="form__title">
        <p class="title__text">F o r m</p>
        <img class="turtle" src="../img/turtle.svg" alt="turtle" />
      </div>
      <div class="form__input">
        <label class="input__label">store <span class="red">*</span></label>
        <input
          type="text"
          class="input__text"
          placeholder="please type or select store..."
          list="stores"
          v-model="store"
          :class="{ inputError: storeState, requireError: storeRequire }"
          @change="getOptionValue"
        />
        <datalist id="stores">
          <option value="store1">store1</option>
          <option value="store2">store2</option>
          <option value="store3">store3</option>
        </datalist>
        <span class="input__warning" v-if="storeState">no result</span>
        <span class="input__warning" v-if="storeRequire">required</span>
      </div>
      <div class="form__input">
        <label class="input__label">name <span class="red">*</span></label>
        <input
          class="input__text"
          type="text"
          placeholder="please type your name..."
          v-model="name"
          :class="{ inputError: nameState, requireError: nameRequire }"
        />
        <span class="input__warning" v-if="nameState">wrong format</span>
        <span class="input__warning" v-if="nameRequire">required</span>
      </div>
      <div class="form__input">
        <label class="input__label">phone <span class="red">*</span></label>
        <input
          :class="{ inputError: phoneState, requireError: phoneRequire }"
          class="input__text"
          type="text"
          placeholder="please type your phone number..."
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="phone"
        />
        <span class="input__warning" v-if="phoneState">wrong format</span>
        <span class="input__warning" v-if="phoneRequire">required</span>
      </div>
      <div class="form__input">
        <label class="input__label">Amount of consumption <span class="red">*</span></label>
        <input
          :class="{ inputError: amountState, requireError: amountRequire }"
          class="input__text"
          type="text"
          placeholder="please type your amount..."
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="amount"
        />
        <span class="input__warning" v-if="amountState">wrong format</span>
        <span class="input__warning" v-if="amountRequire">required</span>
      </div>
      <div class="form__input">
        <label class="input__label">payment <span class="red">*</span></label>
        <select
          :class="{ inputError: paymentRequire, requireError: paymentRequire }"
          class="input__select"
          v-model="payment"
        >
          <option value="" selected disabled>please choose one of the options</option>
          <option value="digital payment">digital payment</option>
          <option value="atm">ATM</option>
        </select>
        <span class="input__warning" v-if="paymentRequire">required</span>
      </div>
    </form>
    <button :class="success" class="form__submit" type="submit" v-if="allSuccess" @click.prevent="handleSubmit()">
      Success
    </button>
    <button :class="failure" class="form__submit" type="submit" v-else-if="oneFailure" @click.prevent="handleSubmit()">
      Failure
    </button>
    <button class="form__submit" type="submit" v-else @click.prevent="handleSubmit()">Submit</button>
  </div>
</template>
