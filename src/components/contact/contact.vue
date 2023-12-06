<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-md-7">
        <ol class="steps">
          <li class="step is-active" data-step="1">
            Daff
          </li>
          <li class="step" :class="{ 'is-active': isSubmitDaff }" data-step="2" >
            Confirm
          </li>
          <li class="step" :class="{ 'is-active': isSubmitConfirm }" data-step="3">
            Complete
          </li>
        </ol>
      </div>
    </div>
    <div class="row justify-content-center" v-if="!isSubmitDaff">
      <div class="col-md-9 text-left">
        <div class="cpnContact">
          <h2 class="text-center">Contact</h2>
          <div class="alert alert-danger" role="alert" v-if="noticeErorr">
            {{ noticeErorr }}
          </div>
          <form method="get" id="formContact">
            <div class="form-row mt-5">
              <div class="form-group col-md-6">
                <label for="inputFullname">Full name</label>
                <span class="text-danger">*</span>
                <input
                  type="fullname"
                  class="form-control"
                  id="inputFullname"
                  placeholder="Fullname"
                  v-model.lazy="contact.fullname"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <span class="text-danger">*</span>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  v-model.lazy="contact.address"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-inline">
                <div class="form-group mr-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      v-model.lazy="contact.gender"
                      checked
                    />
                    <label class="form-check-label" for="male"> Male </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      v-model.lazy="contact.gender"
                    />
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-row">
                <div class="col-6">
                  <label for="inputEmail4">Email</label>
                  <span class="text-danger">*</span>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    v-model.lazy="contact.email"
                  />
                </div>
                <div class="col-6">
                  <label for="inputPhone">Phone</label>
                  <span class="text-danger">*</span>
                  <input
                    type="number"
                    class="form-control"
                    id="inputPhone"
                    placeholder="000xxxxx"
                    v-model.lazy="contact.phone"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="inputPhone">Type request</label>
                  <span class="text-danger">*</span>
                  <select
                    id="typlerequest"
                    name="typeRequest"
                    class="form-control"
                    v-model="contact.typeRequest"
                  >
                    <option selected>Choose...</option>
                    <option v-for="(item, index) in typeRequest" :key="index">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="inputPhone">Content</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  style="resize: none"
                  v-model="contact.content"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-success mt-3 d-block ml-auto py-3 btn-sencontact"
              @click.prevent="sendContactDaff"
            >
              Send Contact
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row mt-5" v-if="isSubmitDaff && !isSubmitConfirm">
      <ContactConfirm :contact="contact" @propsIsSubmitConfirm="handleIsSubmitConfirm" @propsBackContactDaff="handleBackContactDaff" />
    </div>
    <div class="row mt-5" v-if="isSubmitConfirm">
      <ContactComplete />
    </div>
  </div>
</template>

<script>
import ContactConfirm from './ContactConfirm'
import ContactComplete from './ContactComplete'
export default {
  name: 'contact',
  components: {
    ContactConfirm,
    ContactComplete
  },
  data () {
    return {
      contact: {
        id: '',
        fullname: '',
        address: '',
        gender: 'male',
        email: '',
        typeRequest: '',
        content: '',
        phone: ''
      },
      noticeErorr: '',
      typeRequest: ['Cart', 'Bonus', 'Sale'],
      isSubmitDaff: false,
      isSubmitConfirm: false
    }
  },
  methods: {
    sendContactDaff (e) {
      if (this.contact.fullname && this.contact.email && this.contact.typeRequest) {
        this.isSubmitDaff = true
      } else {
        this.noticeErorr = 'Please enter all values marked with *'
        e.preventDefault()
      }
    },
    handleIsSubmitConfirm () {
      this.isSubmitConfirm = !this.isSubmitConfirm
    },
    handleBackContactDaff () {
      this.isSubmitDaff = false
    }
  }
}
</script>

<style scoped>
  .btn-sencontact {
    width: 320px;
    max-width: 100%;
    margin: 0 auto;
  }
  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: table;
    table-layout: fixed;
    width: 100%;
    color: #929292;
    height: 4rem;
  }

  .steps>.step {
    position: relative;
    display: table-cell;
    text-align: center;
    font-size: 0.875rem;
    color: #6d6875;
  }

  .steps>.step:before {
    content: attr(data-step);
    display: block;
    margin: 0 auto;
    background: #fff;
    border: 2px solid #e6e6e6;
    color: #e6e6e6;
    width: 2rem;
    height: 2rem;
    text-align: center;
    margin-bottom: -4.2rem;
    line-height: 1.9rem;
    border-radius: 100%;
    position: relative;
    z-index: 1;
    font-weight: 700;
    font-size: 1rem;
  }

  .steps>.step:after {
    content: '';
    position: absolute;
    display: block;
    background: #e6e6e6;
    width: 100%;
    height: 0.125rem;
    top: 1rem;
    left: 50%;
  }

  .steps>.step:last-child:after {
    display: none;
  }

  .steps>.step.is-complete {
    color: #6d6875;
  }

  .steps>.step.is-complete:before {
    content: '\2713';
    color: #28a745 ;
    background: #fef0e2;
    border: 2px solid #28a745 ;
  }

  .steps>.step.is-complete:after {
    background: #28a745 ;
  }

  .steps>.step.is-active {
    font-size: 1.5rem;
  }

  .steps>.step.is-active:before {
    color: #fff;
    border: 2px solid #28a745 ;
    background: #28a745 ;
    margin-bottom: -4.9rem;
  }
</style>
